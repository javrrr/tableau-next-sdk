# Test fixtures

Sanitized request/response shapes for the Tableau Next `/tableau/*` surface,
captured from live create → get → delete round-trips against a v67 org and
corroborated against afd360's live-proven constructs.

**All values are neutral placeholders** — model/field/workspace names, ids, and
apiNames are invented (`Example_*`, `0SMxx…`). Nothing here comes from any real
org, customer, or dataset. These fixtures capture the *shape and field names* of
the contract, not real data.

Notes on specific fields:

- **Visualizations** — `dataSource` is top-level `{ type:"SemanticModel", id,
  name }`; `fields` is an object keyed by slot id (`F2`/`F3`) with `type:"Field"`
  and semantic `objectName`/`fieldName`; the layout + marks live under
  `visualSpecification` (`columns`/`rows` are slot-id arrays, `marks.panes` is a
  single object paralleling `marks.headers`). The server strictly rejects unknown
  top-level fields (`JSON_PARSER_ERROR`), so the generated input type is
  authoritative. The `view` scaffold is shown schematically — a real create needs
  a fully populated `viewSpecification`, which is deployment-specific.
- **Dashboards** — `workspaceIdOrApiName` is a plain string; a widget binds a
  visualization by name (`source:{ name }`, no `source.type`) and carries the
  required `type:"visualization"` discriminator; the grid is 48 columns.

The `.response.json` fixtures include the read-only/server-managed fields (`id`,
`createdDate`, `view.isOriginal`, slot `fields.*.id`, …) that come back on GET
and must NOT be echoed into a subsequent write.
