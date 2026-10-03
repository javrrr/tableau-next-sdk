// Client
export { TableauNextClient } from "./client.js";

// Core types
export type {
  ClientConfig,
  AuthConfig,
  StaticTokenAuth,
  RefreshableTokenAuth,
  OAuth2Auth,
  RequestOptions,
  PaginationParams,
  PaginatedResponse,
  RequestInterceptor,
  ResponseInterceptor,
} from "./core/types.js";

// Errors
export {
  TableauNextError,
  BadRequestError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  ServerError,
} from "./core/errors.js";

// Pagination helpers
export { paginate, collectAll } from "./core/pagination.js";

// Type helpers
export type {
  Simplify,
  Schema,
  ResponseBody,
  RequestBody,
  QueryParams,
  PathParams,
} from "./utils/type-helpers.js";

// Generated types (raw)
export type { paths, components, operations } from "./generated/openapi.js";

// All named schema types + discriminated unions — discoverable via autocomplete
export type * from "./schemas.js";

// Generated query param interfaces — discoverable via autocomplete
export type * from "./generated/services/index.js";

// Resource service classes — one per spec tag
export { VisualizationsService } from "./resources/visualizations.js";
export { DashboardsService } from "./resources/dashboards.js";
export { WorkspacesService } from "./resources/workspaces.js";
export { AssetsService } from "./resources/assets.js";
export { FollowersService } from "./resources/followers.js";
export { MarketplaceService } from "./resources/marketplace.js";
export { PersonalOrgsService } from "./resources/personal-orgs.js";
export { RecordsService } from "./resources/records.js";
export { SubscriptionsService } from "./resources/subscriptions.js";
