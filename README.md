# tableau-next-sdk

TypeScript SDK for the Salesforce **Tableau Next** REST API — the
`/services/data/v{n}/tableau/*` surface (visualizations, dashboards,
workspaces, assets, followers, marketplace, personal orgs, record shares,
subscription digests).

A thin, hand-written resource layer over a **generated** wrapper around the
OpenAPI spec: `openapi-typescript` emits the type surface, `generate-services`
emits one base service per spec tag, `src/resources/*` adds ergonomic
extensions, and `TableauNextClient` composes them. Same architecture as
[`data-360-sdk`](https://github.com/javrrr/data-360-sdk).

## Scope

This SDK covers the **`/tableau/*`** path family only (API version **v67+** —
versions below v66 return `DOWNGRADE_VERSION_ERROR`).

**Semantic models are out of scope.** They live under a different namespace
(`/ssot/semantic/models`, v64), not `/tableau/*`, so they are not part of this
package.

## Quick start

```ts
import { TableauNextClient } from "tableau-next-sdk";

const client = new TableauNextClient({
  instanceUrl: "https://my.salesforce.com/services/data/v67.0",
  auth: { type: "static", accessToken: process.env.SF_ACCESS_TOKEN! },
});

// Visualizations
const viz = await client.visualizations.get("My_Visualization");
for await (const v of client.visualizations.listAll()) {
  // ...
}

// Dashboards
await client.dashboards.update("My_Dashboard", dashboardBody);
```

## Services

| Accessor | Path family |
|---|---|
| `client.visualizations` | `/tableau/visualizations` |
| `client.dashboards` | `/tableau/dashboards` |
| `client.workspaces` | `/tableau/workspaces` |
| `client.assets` | `/tableau/assets` |
| `client.followers` | `/tableau/follow` |
| `client.marketplace` | `/tableau/marketplace` |
| `client.personalOrgs` | `/tableau/personal-orgs` |
| `client.records` | `/tableau/records` |
| `client.subscriptions` | `/tableau/subscriptions` |

Each accessor exposes generated CRUD methods plus `listAll` async iterators for
collection endpoints. `visualizations` and `dashboards` add an ergonomic
`update` alias and document the request-shape rules the raw types don't capture.

## Development

```sh
npm install
npm run generate   # emits src/generated/* + src/schemas.ts from the spec
npm run build
npm test
npm run typecheck
```

See [`BUILD_PLAN.md`](./BUILD_PLAN.md) for scope, locked decisions, and the
live-verified contract facts behind the resource layer. The codegen harness is
documented in [`scripts/README.md`](./scripts/README.md).

## License

MIT
