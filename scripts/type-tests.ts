/**
 * Compile-time type assertions over the generated Tableau Next SDK surface.
 *
 * This file is type-checked by `npm run typecheck` (it is in the tsconfig
 * include set) but never executed. It pins the public shapes afd360 relies on
 * so a future spec regeneration that drops or renames them fails loudly here.
 *
 * All sample values are neutral placeholders — no real org, model, or field
 * names appear in this repo.
 */
import { TableauNextClient } from "../src/index.js";
import type {
  VisualizationInputRepresentation,
  VisualizationRepresentation,
  DashboardInputRepresentation,
  DashboardRepresentation,
  WorkspaceRepresentation,
} from "../src/schemas.js";

// ── Helpers ──
function expectType<T>(_value: T): void {}

// ── Client surface ──
const client = new TableauNextClient({
  instanceUrl: "https://example.my.salesforce.com/services/data/v67.0",
  auth: { type: "static", accessToken: "REPLACE_AT_RUNTIME" },
});

// One accessor per spec tag, all present and typed.
void client.visualizations;
void client.dashboards;
void client.workspaces;
void client.assets;
void client.followers;
void client.marketplace;
void client.personalOrgs;
void client.records;
void client.subscriptions;

// ── Visualizations: CRUD + ergonomic update alias ──
async function visualizationSurface(
  body: VisualizationInputRepresentation,
): Promise<void> {
  const created: VisualizationRepresentation = await client.visualizations.create(body);
  const fetched: VisualizationRepresentation = await client.visualizations.get("DevName_Or_Id");
  const updated: VisualizationRepresentation = await client.visualizations.update(
    "DevName_Or_Id",
    body,
  );
  const patched: VisualizationRepresentation = await client.visualizations.patch(
    "DevName_Or_Id",
    body,
  );
  await client.visualizations.delete("DevName_Or_Id");
  expectType<VisualizationRepresentation>(created);
  expectType<VisualizationRepresentation>(fetched);
  expectType<VisualizationRepresentation>(updated);
  expectType<VisualizationRepresentation>(patched);

  // listAll is an async iterator of the shallow representation.
  for await (const _item of client.visualizations.listAll()) void _item;
}

// ── Dashboards: CRUD + ergonomic update alias ──
async function dashboardSurface(body: DashboardInputRepresentation): Promise<void> {
  const created: DashboardRepresentation = await client.dashboards.create(body);
  const updated: DashboardRepresentation = await client.dashboards.update("DevName_Or_Id", body);
  expectType<DashboardRepresentation>(created);
  expectType<DashboardRepresentation>(updated);
}

// ── Workspaces: a workspace is referenced by a plain id-or-apiName string ──
async function workspaceSurface(): Promise<void> {
  const ws: WorkspaceRepresentation = await client.workspaces.get("My_Workspace");
  expectType<WorkspaceRepresentation>(ws);
}

// Reference the functions so noUnusedLocals is satisfied.
void visualizationSurface;
void dashboardSurface;
void workspaceSurface;
