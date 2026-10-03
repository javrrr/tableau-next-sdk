# tableau-next-sdk — build brief

This is the brief for the agent that builds out `tableau-next-sdk`. The repo is
**scaffolded** (harness + core runtime + configs, compiles green with placeholder
generated files). Your job: generate the real SDK from the Tableau Next OpenAPI
spec, add the ergonomic resource layer, live-validate, and then wire it into
`afd360`.

## Context — why this exists

`afd360` (../afd360) is an IaC SDK for Salesforce Data Cloud / Agentforce Data
360. Its Data Cloud resources already go through **`data-360-sdk`** (javrrr's
published generated SDK). But the three Tableau Next constructs — `Visualization`,
`Dashboard`, and `SemanticModel` — had no SDK, so they talk to the org through a
hand-rolled raw-REST seam: **`afd360/src/client/rest.ts`** (`connectRequest()`,
`RestError`). This SDK gives the `/tableau/*` surface (Visualization +
Dashboard) a proper generated client so those two migrate off the seam.

**`SemanticModel` stays in afd360 on `connectRequest` — intentionally, for
now** (user decision 2026-10-03). Its CRUD path is in no published spec (see
decision 3), so there's nothing to generate; `rest.ts` remains its dedicated,
hand-maintained wrapper. The seam is therefore **NOT fully retired** — it keeps
backing one clean, narrowly-scoped surface. Guiding principle: keep each REST
wrapper clean and easy to maintain — a focused generated client for `/tableau/*`
and a focused raw-REST wrapper for the spec-less `/ssot/semantic/models`
surface, rather than forcing both through one abstraction.

The goal mirrors the data-360-sdk setup exactly: a **generated wrapper around the
OpenAPI spec**, which afd360 imports as a dependency. This repo is the Tableau
Next half of that split.

## Locked decisions (do not relitigate)

1. **Name:** `tableau-next-sdk`; client class `TableauNextClient`. Done.
2. **Scope:** this SDK covers the **`/tableau/*`** path family ONLY (v67+).
   Visualizations, dashboards, workspaces, subscription digests, asset
   images/metadata, followers, user access.
3. **Semantic models are NOT in this SDK.** They live at
   `/ssot/semantic/models` (ssot namespace, v64) and belong with **`data-360-sdk`**
   (which already owns the `/ssot/*` surface) — a separate task against that
   repo, not this one.

   **IMPORTANT caveat (verified 2026-10-03):** the `/ssot/semantic/models` CRUD
   path is in **NEITHER published OpenAPI spec right now.** The CDP Connect API
   spec (data-360-sdk's source) has no such path — `SemanticModel` appears only
   as a data-kit component-type *enum value* (v63), not an endpoint; everything
   else matching "semantic" there is semantic *search* (the SearchIndex
   surface). The Tableau Next spec is a `/tableau/*` document, so an
   `ssot`-namespaced path almost certainly isn't in it either. afd360's
   `SemanticModel` was built from **live probing + reference builders**, not a
   spec. So "add a `semanticModels` service to data-360-sdk" canNOT be done by
   regenerating. Realistic options, in order of preference: (a) wait for the
   path to land in a future CDP spec version and regenerate; (b) **hand-author**
   a non-generated service module carrying afd360's live-captured shapes; or
   (c) maintain a local spec overlay/addendum that codegen merges in. Pick when
   that task is scheduled; it does not block this SDK.
4. **Architecture = data-360-sdk's, verbatim.** Generated types + generated
   per-tag base services + thin hand-written `src/resources/*` extensions +
   composing client. Dual ESM/CJS via tsup. `files: ["dist"]`. Published to npm
   (user-gated — do not publish without explicit sign-off).

## What's already in place (the scaffold)

Copied verbatim from data-360-sdk (spec-agnostic):

- `src/core/{auth,http-client,interceptors,pagination,types}.ts` — runtime
  (auth lifecycle, retry/backoff/Retry-After, async-iterator pagination,
  interceptors). `src/core/errors.ts` with the error hierarchy, renamed
  `Data360Error` → **`TableauNextError`**.
- `src/resources/base-resource.ts`, `src/utils/type-helpers.ts`.
- `scripts/{generate-types,generate-services,audit-spec-examples,type-tests}.ts`
  + `scripts/README.md` — the codegen harness (see "repoint" below).
- `tsconfig.json`, `tsup.config.ts`, `vitest.config.ts`, `.gitignore`.

Scaffold stubs you will replace:

- `src/generated/openapi.yaml` — placeholder spec (see Step 1).
- `src/generated/openapi.ts` — placeholder type aliases so the harness compiles.
  **Delete it** once `generate` emits `openapi.d.ts`.
- `src/generated/services/index.ts`, `src/schemas.ts` — placeholders,
  regenerated.
- `src/client.ts`, `src/index.ts` — skeleton `TableauNextClient` + exports with
  `TODO(build-agent)` markers for the service wiring.

## Build steps

### Step 1 — obtain the spec
The public portal URL serves an SPA shell (a bare `curl`/WebFetch 404s / returns
"not_found"). Get the real YAML via the download link on the
developer.salesforce.com Tableau Next REST API reference, or the
`tableau-next-connect-api.yaml` the get-started guide points at:
- spec (portal): `https://developer.salesforce.com/docs/analytics/tableau-next-rest-api/...`
- get-started: `https://developer.salesforce.com/docs/analytics/tableau-next-rest-api/guide/get-started.md`
- the URL the user originally gave (verify it still resolves to raw YAML):
  `https://developer.salesforce.com/static/analytics/tableau-next-rest-api/tableau-next-connect-api/tableau-next-connect-api.yaml`

Save it to `src/generated/openapi.yaml` (committed, for easy diffing). If the
fetch is gated, download manually and drop it in.

### Step 2 — repoint the generators
- `scripts/generate-types.ts` lines ~20–27: `SPEC_URL`, `SPEC_REFERER`,
  outputs. Point `SPEC_URL` at the Tableau Next raw spec (or make the script
  read the already-saved `openapi.yaml` if there's no fetchable URL). Fix the
  doc-comment package name (`data-360-sdk` → `tableau-next-sdk`) at ~1025.
- `scripts/generate-services.ts`: the **`SERVICE_CONFIG`** map (~line 115) is
  data-360-specific (one entry per Data Cloud tag, with pagination hints,
  additional paths, property names on the client). **Rewrite it for the Tableau
  Next tags** — one entry per `/tableau/*` tag in the spec. Fix the
  `Data360Client` comment at ~79. This map is the main hand-authored input to
  codegen; budget real time here.

### Step 3 — generate + compile
`npm install && npm run generate && npm run build`. Delete the
`src/generated/openapi.ts` placeholder (now `openapi.d.ts`). Expand
`src/client.ts` + `src/index.ts` to wire/export one service per tag (mirror
data-360-sdk's `client.ts` / `index.ts` tail). `npm run typecheck` green.

### Step 4 — ergonomic resource layer
For each `/tableau/*` resource afd360 needs (at minimum **visualizations** and
**dashboards**), add a thin `src/resources/<tag>.ts` extending the generated
`<Tag>ServiceBase`, with hand-written input-shape aliases derived from the
golden captures below. Follow data-360-sdk's resource modules as the pattern
(e.g. `search-index.ts`, `calculated-insights.ts`).

### Step 5 — live-validate
Validate CRUD against a live org (an agent with org access). The afd360
constructs are already live-proven against v67 — use them as the oracle. Verify
every golden-capture fact still holds; capture request/response pairs into
`tests/` fixtures.

### Step 6 — wire into afd360 (separate change in ../afd360)
- Add a `TableauNextClient` to afd360's `ResourceContext` (src/core/construct.ts
  — currently `{ client: Data360Client; session: Session; ... }`) and construct
  it in `src/client/factory.ts` (`createClient`) alongside the Data360Client,
  using the same `buildBaseUrl` + static-token-from-session pattern — but at the
  v67 base. Keep per-call version overrides available (the two namespaces drift:
  `/tableau/*` v67 vs model GET v64).
- Migrate `src/resources/visualization.ts` and `src/resources/dashboard.ts` off
  `connectRequest` onto the new client's services. Keep behavior identical;
  afd360's test suite + the live oracle must stay green.
- `src/resources/semantic-model.ts` **stays on `connectRequest`** (user
  decision — see decision 3). Do NOT migrate it; `rest.ts` remains its clean
  dedicated wrapper.
- **Do NOT delete `src/client/rest.ts`** — it still backs SemanticModel after
  Visualization + Dashboard move off it. Just narrow it to that one surface.

### Step 7 — publish (USER-GATED)
`npm publish` is outward-facing and irreversible-ish. Do NOT publish without
explicit user sign-off. Until published, afd360 can depend on it via a `file:`
or `link:` dependency for integration.

## Golden live-captured contract facts

These are **live-verified** against v67 orgs via the existing afd360 constructs
(see afd360 memory `feedback_semantic-model-viz-api-surface.md` and
`feedback_tableau-skills-repos-contract-deltas.md`). Do NOT re-derive — treat as
the oracle; carry them into resource-layer aliases and tests.

**Versioning / routing**
- `/tableau/*` endpoints need **v67+**; below v66 → `DOWNGRADE_VERSION_ERROR`.
- Semantic models are at **`/ssot/semantic/models`, v64** (not this SDK).
- Auth is Bearer token (from the sf CLI session in afd360's case).
- `queryv2` returns **201**, not 200 — don't assert 200 blindly.

**Visualization (`/tableau/visualizations`, v67) — CRUD proven**
- `dataSource.id` = the semantic model's GET `.id` (resolve the model first).
- `marks.panes` is a **SINGLE object** that parallels `marks.headers` — NOT an
  array. (An earlier array shape was wrong; corrected in afd360 c6e228a.)
- `view` must be a **populated `viewSpecification` scaffold**, not `{}`.
- On update, **strip read-only fields** including `view.isOriginal`.
- `dataSource` binds the model by **id**; fields bind by slot with **SEMANTIC
  apiNames**.
- Version drift is real: viz is v67 while the model GET it depends on is v64 —
  keep per-call version override escape hatches.

**Dashboard (`/tableau/dashboards`, v67) — CRUD, live-deployed**
- Widget binds a visualization by **name**.
- Page name is a **deterministic UUIDv5** (stable across redeploys → idempotent).
- Live diff+deploy both reported `0 create, 0 recreate, N adopt` — the TN assets
  adopt non-destructively on match (name-match + trust; no body deep-diff).

**Adoption model (informs afd360 wiring, not the SDK itself)**
- TN constructs adopt-on-match generically (GET-list dev-NAME lookup → match →
  `kind: adopt, owned: false` → destroy/prune skip). No `fromExisting` needed.

Reference implementations to mine for exact shapes: the afd360 modules
`src/resources/visualization.ts`, `dashboard.ts`, `semantic-model.ts`, and the
reference Python builders they were reconciled against
(`build_visualization.py`, `build_semantic_model.py`, in a separate internal
demo repo — ask the user for its path) — port the field shapes, not the Python.

## Guardrails (standing constraints)

- **Public repo.** No customer/account names, no internal
  org aliases / cluster labels / release numbers, no dev emails or org IDs — in
  code, tests, fixtures, or commit messages. Use neutral placeholders
  (`dev-org`, `user@example.com`, `00Dxx0000000001MAJ`).
- **No secrets** in the repo. Tokens come from the environment at runtime.
- **npm publish is user-gated** and outward-facing — never publish unprompted.
- When a captured fact and the live org disagree, the **live org wins**; update
  this brief.
