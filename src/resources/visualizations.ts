import {
  VisualizationsServiceBase,
  type VisualizationsPatchParams,
} from "../generated/services/visualizations.base.js";
import type { RequestOptions } from "../core/types.js";
import type {
  VisualizationInputRepresentation,
  VisualizationRepresentation,
} from "../schemas.js";

/**
 * Ergonomic service for `/tableau/visualizations` (API v67+ — versions below
 * v66 return `DOWNGRADE_VERSION_ERROR`).
 *
 * The generated base provides `list` / `create` / `get` / `patch` / `delete` /
 * `getBundle` / `listAll`. This extension adds an `update` alias for `patch`
 * and documents the live-verified request-shape rules that the generated types
 * alone don't capture.
 *
 * ── Building a create/update body (`VisualizationInputRepresentation`) ──
 *
 * Build the body FRESH — do not round-trip a GET response into a write. The
 * server strictly rejects UNKNOWN top-level fields with
 * `400 JSON_PARSER_ERROR: Unrecognized field "<name>"` (live-verified: sending
 * `apiName`, `properties`, `palette`, `domain`, `dateInfo`, or `tokenType` — all
 * of which appear in the spec's own examples — is rejected). The generated
 * `VisualizationInputRepresentation` is therefore AUTHORITATIVE: send only the
 * fields it models. The parser fails on the first unknown field, so an error
 * names only one even when several are present.
 *
 * Read-only / server-managed fields must likewise not be emitted on a write:
 *
 *   id, createdBy, createdDate, lastModifiedBy, lastModifiedDate, permissions,
 *   sourceVersion, dataSource.url, workspace.label, workspace.url,
 *   fields.<slot>.id (slot ids — the server assigns them), and
 *   view.id, view.name, view.isOriginal.
 *
 * `view.isOriginal` is the non-obvious one: it appears on every GET and should
 * be stripped before a write. (`view.id` was tolerated on create in one live
 * capture rather than rejected, but still strip it — don't rely on tolerance.)
 *
 * Key shape rules (all live-verified against v67, create → get → delete):
 *
 *  • `dataSource` is TOP-LEVEL (not nested under `workspace`) and binds the
 *    semantic model by id: `{ type: "SemanticModel", id, name }`. Resolve the
 *    model's id first (its GET `.id`); send both `id` and `name`.
 *  • `fields` is an OBJECT keyed by slot id (`"F2"`, `"F3"`, …) — NOT an array;
 *    an array fails `JSON_PARSER_ERROR`. Each slot has `type: "Field"` and
 *    carries SEMANTIC apiNames (the model's `objectName` / `fieldName`), not
 *    DMO/CIO dev names. A measure slot uses `role: "Measure"` with an aggregation
 *    `function` (e.g. `"UserAgg"`); a dimension slot uses `role: "Dimension"`,
 *    `displayCategory: "Discrete"`.
 *  • The layout lives under `visualSpecification`:
 *    `visualSpecification.columns` / `.rows` are arrays of slot ids
 *    (e.g. `["F3"]` / `["F2"]`), and the marks sit at
 *    `visualSpecification.marks.{headers,panes}`.
 *  • `visualSpecification.marks.panes` is a SINGLE object (not an array) that
 *    parallels `visualSpecification.marks.headers`: `{ encodings: [],
 *    isAutomatic: false, stack: { isAutomatic: true, isStacked: true },
 *    type: <chartType> }`, with `headers` of the same shape and `type: "Text"`.
 *    `panes.type` selects the chart.
 *
 * The client is pinned to one API version via `instanceUrl`; `minorVersion` is
 * available per call through the generated `*Params`. The v67(viz)/v64(model
 * GET) cross-namespace drift is handled by the caller (the model GET is not part
 * of this SDK), not by a per-call major-version override here.
 */
export class VisualizationsService extends VisualizationsServiceBase {
  /**
   * PATCH `/tableau/visualizations/{idOrApiName}` — update a visualization.
   *
   * Ergonomic alias for {@link VisualizationsServiceBase.patch}. The body obeys
   * the same build-fresh / strip-read-only rules as create (see class docs);
   * notably `view.isOriginal` must not be present.
   */
  async update(
    visualizationIdOrApiName: string,
    body: VisualizationInputRepresentation,
    params?: VisualizationsPatchParams,
    options?: RequestOptions,
  ): Promise<VisualizationRepresentation> {
    return super.patch(visualizationIdOrApiName, body, params, options);
  }
}
