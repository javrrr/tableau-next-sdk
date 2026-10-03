import {
  DashboardsServiceBase,
  type DashboardsPatchParams,
} from "../generated/services/dashboards.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  DashboardInputRepresentation,
  DashboardRepresentation,
} from "../schemas.js";

/**
 * Ergonomic service for `/tableau/dashboards` (API v67+ — versions below v66
 * return `DOWNGRADE_VERSION_ERROR`).
 *
 * The generated base provides `list` / `create` / `get` / `patch` / `delete` /
 * `getBundle`, the custom-view sub-resource methods, and `listAll`. This
 * extension adds an `update` alias for `patch` and documents the live-verified
 * request-shape rules.
 *
 * ── Building a create/update body (`DashboardInputRepresentation`) ──
 *
 *  • `workspaceIdOrApiName` is a PLAIN STRING (not a `{ id, name }` object). The
 *    workspace must already exist — this surface does not create it.
 *  • A dashboard widget binds a visualization BY NAME ONLY: `source: { name }`.
 *    Do not send `source.type` — it is rejected. The widget-level
 *    `type: "visualization"` IS required (a polymorphic discriminator); keep it.
 *  • Each authored widget appears TWICE, linked by a key (e.g. `"visualization_1"`):
 *    once as a positioned entry in `layouts[].pages[].widgets[]`
 *    (`column` / `row` / `colspan` / `rowspan`) and once as a bound entry in the
 *    top-level `widgets` OBJECT (the `source` binding + parameters).
 *  • The layout grid is 48 columns (live-verified v67: a GET returns
 *    `layouts[0].columnCount: 48, rowHeight: 20, maxWidth: 1200`). A full-width
 *    tile is `column:0, row:0, colspan:48, rowspan:N`. (A 72-column grid seen
 *    referenced elsewhere does NOT apply at this release.)
 *  • A page `name` is a server-echoed UUID. Callers that need idempotent
 *    redeploys derive it deterministically (e.g. a UUIDv5 over stable inputs) so
 *    the same authored page maps to the same name across runs.
 *  • `minorVersion` is optional on every verb (live-verified v67); omit it unless
 *    pinning to a specific minor.
 */
export class DashboardsService extends DashboardsServiceBase {
  /**
   * PATCH `/tableau/dashboards/{idOrApiName}` — update a dashboard.
   *
   * Ergonomic alias for {@link DashboardsServiceBase.patch}. The body follows
   * the same widget/layout rules as create (see class docs).
   */
  async update(
    dashboardIdOrApiName: string,
    body: DashboardInputRepresentation,
    params?: DashboardsPatchParams,
    options?: RequestOptions,
  ): Promise<DashboardRepresentation> {
    return super.patch(dashboardIdOrApiName, body, params, options);
  }
}
