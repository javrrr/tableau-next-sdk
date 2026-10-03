import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { TableauNextClient, BadRequestError } from "../../src/index.js";

/**
 * Exercises the SDK against the sanitized live-captured fixtures in
 * tests/fixtures/. These assert the resource layer passes bodies through
 * UNMANGLED and parses responses — the shapes themselves were verified live
 * (v67 create → get → delete). No network, no org; all placeholder data.
 */
const fixture = (name: string): unknown =>
  JSON.parse(
    readFileSync(fileURLToPath(new URL(`../fixtures/${name}`, import.meta.url)), "utf8"),
  );

function recordingClient(response: { status?: number; body?: unknown }) {
  const calls: Array<{ url: string; method?: string; body: unknown }> = [];
  const fetchFn = (async (url: string | URL, init?: RequestInit) => {
    calls.push({
      url: String(url),
      method: init?.method,
      body: init?.body ? JSON.parse(String(init.body)) : undefined,
    });
    return new Response(response.body === undefined ? null : JSON.stringify(response.body), {
      status: response.status ?? 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof globalThis.fetch;

  const client = new TableauNextClient({
    instanceUrl: "https://example.my.salesforce.com/services/data/v67.0",
    auth: { type: "static", accessToken: "TEST_TOKEN" },
    fetch: fetchFn,
    maxRetries: 0,
  });
  return { client, calls };
}

describe("Visualization create (fixture round-trip)", () => {
  it("POSTs the request body verbatim and returns the parsed response", async () => {
    const request = fixture("visualization.create.request.json");
    const response = fixture("visualization.create.response.json");
    const { client, calls } = recordingClient({ status: 201, body: response });

    const result = await client.visualizations.create(request as never);

    expect(calls[0].method).toBe("POST");
    expect(calls[0].url).toBe(
      "https://example.my.salesforce.com/services/data/v67.0/tableau/visualizations",
    );
    // The resource layer must not reshape the body.
    expect(calls[0].body).toEqual(request);
    expect((result as { id?: string }).id).toBe("0VZxx0000000001AAA");
  });

  it("surfaces the strict unknown-top-level-field rejection as BadRequestError", async () => {
    // The spec's examples carry fields the schema omits; the server 400s them.
    const badBody = { ...(fixture("visualization.create.request.json") as object), apiName: "x" };
    const { client } = recordingClient({
      status: 400,
      body: [{ errorCode: "JSON_PARSER_ERROR", message: 'Unrecognized field "apiName"' }],
    });

    await expect(client.visualizations.create(badBody as never)).rejects.toMatchObject({
      status: 400,
    });
    await expect(client.visualizations.create(badBody as never)).rejects.toBeInstanceOf(
      BadRequestError,
    );
  });
});

describe("Dashboard create (fixture round-trip)", () => {
  it("POSTs the request body verbatim and returns the parsed response", async () => {
    const request = fixture("dashboard.create.request.json");
    const response = fixture("dashboard.create.response.json");
    const { client, calls } = recordingClient({ status: 201, body: response });

    const result = await client.dashboards.create(request as never);

    expect(calls[0].method).toBe("POST");
    expect(calls[0].url).toBe(
      "https://example.my.salesforce.com/services/data/v67.0/tableau/dashboards",
    );
    expect(calls[0].body).toEqual(request);
    // workspaceIdOrApiName round-trips as a plain string; grid is 48 columns.
    expect((calls[0].body as { workspaceIdOrApiName?: unknown }).workspaceIdOrApiName).toBe(
      "Example_Workspace",
    );
    expect((result as { layouts?: Array<{ columnCount?: number }> }).layouts?.[0]?.columnCount).toBe(
      48,
    );
  });
});
