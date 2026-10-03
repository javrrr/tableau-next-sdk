import { describe, it, expect } from "vitest";
import {
  TableauNextClient,
  NotFoundError,
  BadRequestError,
} from "../../src/index.js";

/**
 * A recording mock `fetch`. Returns a queued response per call and captures the
 * URL + init so tests can assert routing, auth, method, and body. No network,
 * no org — all values are neutral placeholders.
 */
function mockFetch(
  responses: Array<{ status?: number; body?: unknown; headers?: Record<string, string> }>,
) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  let i = 0;
  const fn = async (url: string | URL, init?: RequestInit): Promise<Response> => {
    calls.push({ url: String(url), init: init ?? {} });
    const r = responses[Math.min(i, responses.length - 1)];
    i++;
    const status = r.status ?? 200;
    return new Response(r.body === undefined ? null : JSON.stringify(r.body), {
      status,
      headers: { "content-type": "application/json", ...r.headers },
    });
  };
  return { fn: fn as unknown as typeof globalThis.fetch, calls };
}

const INSTANCE = "https://example.my.salesforce.com/services/data/v67.0";

function makeClient(fetchFn: typeof globalThis.fetch) {
  return new TableauNextClient({
    instanceUrl: INSTANCE,
    auth: { type: "static", accessToken: "TEST_TOKEN" },
    fetch: fetchFn,
    maxRetries: 0,
  });
}

describe("TableauNextClient wiring", () => {
  it("exposes one accessor per spec tag", () => {
    const client = makeClient(mockFetch([{}]).fn);
    for (const key of [
      "visualizations",
      "dashboards",
      "workspaces",
      "assets",
      "followers",
      "marketplace",
      "personalOrgs",
      "records",
      "subscriptions",
    ] as const) {
      expect(client[key], key).toBeDefined();
    }
  });
});

describe("Visualizations routing", () => {
  it("GET get() hits /tableau/visualizations/{id} with a bearer token", async () => {
    const { fn, calls } = mockFetch([{ body: { id: "0abc", name: "Example_Viz" } }]);
    const client = makeClient(fn);
    const viz = await client.visualizations.get("Example_Viz");

    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe(`${INSTANCE}/tableau/visualizations/Example_Viz`);
    expect((calls[0].init.headers as Record<string, string>)["Authorization"]).toBe(
      "Bearer TEST_TOKEN",
    );
    expect((viz as { name?: string }).name).toBe("Example_Viz");
  });

  it("POST create() sends the body to the collection path", async () => {
    const { fn, calls } = mockFetch([{ status: 201, body: { id: "0new" } }]);
    const client = makeClient(fn);
    const body = { label: "Example", view: {} } as never;
    await client.visualizations.create(body);

    expect(calls[0].url).toBe(`${INSTANCE}/tableau/visualizations`);
    expect(calls[0].init.method).toBe("POST");
    expect(JSON.parse(String(calls[0].init.body))).toEqual({ label: "Example", view: {} });
  });

  it("update() is an alias for PATCH /tableau/visualizations/{id}", async () => {
    const { fn, calls } = mockFetch([{ body: { id: "0abc" } }]);
    const client = makeClient(fn);
    await client.visualizations.update("Example_Viz", { label: "Edited" } as never);

    expect(calls[0].init.method).toBe("PATCH");
    expect(calls[0].url).toBe(`${INSTANCE}/tableau/visualizations/Example_Viz`);
  });
});

describe("Dashboards", () => {
  it("update() aliases PATCH /tableau/dashboards/{id}", async () => {
    const { fn, calls } = mockFetch([{ body: { id: "0d" } }]);
    const client = makeClient(fn);
    await client.dashboards.update("Example_Dashboard", { label: "D" } as never);
    expect(calls[0].init.method).toBe("PATCH");
    expect(calls[0].url).toBe(`${INSTANCE}/tableau/dashboards/Example_Dashboard`);
  });
});

describe("Pagination (limit/offset)", () => {
  it("listAll walks pages using limit/offset and yields every item", async () => {
    // Page 1 returns a full page (2 of batchSize 2), page 2 a partial page → stop.
    const { fn, calls } = mockFetch([
      { body: { visualizations: [{ id: "a" }, { id: "b" }], totalSize: 3 } },
      { body: { visualizations: [{ id: "c" }], totalSize: 3 } },
    ]);
    const client = makeClient(fn);

    const ids: string[] = [];
    for await (const item of client.visualizations.listAll({ batchSize: 2 })) {
      ids.push((item as { id: string }).id);
    }
    expect(ids).toEqual(["a", "b", "c"]);
    // First page uses the `limit` query param (not `batchSize`).
    expect(calls[0].url).toContain("limit=2");
    expect(calls[0].url).toContain("offset=0");
  });
});

describe("Error mapping", () => {
  it("maps 404 to NotFoundError", async () => {
    const { fn } = mockFetch([{ status: 404, body: [{ errorCode: "NOT_FOUND", message: "nope" }] }]);
    const client = makeClient(fn);
    await expect(client.visualizations.get("missing")).rejects.toBeInstanceOf(NotFoundError);
  });

  it("maps 400 to BadRequestError", async () => {
    const { fn } = mockFetch([
      { status: 400, body: [{ errorCode: "JSON_PARSER_ERROR", message: "bad" }] },
    ]);
    const client = makeClient(fn);
    await expect(client.visualizations.create({} as never)).rejects.toBeInstanceOf(
      BadRequestError,
    );
  });
});
