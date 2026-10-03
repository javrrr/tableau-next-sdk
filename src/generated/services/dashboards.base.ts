/**
 * Auto-generated base service for Dashboards.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/dashboards.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  DashboardBundleRepresentation,
  DashboardCollectionRepresentation,
  DashboardCustomViewCollectionRepresentation,
  DashboardCustomViewInputRepresentation,
  DashboardCustomViewRepresentation,
  DashboardInputRepresentation,
  DashboardRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface DashboardsListParams {
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsCreateParams {
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsGetParams {
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsPatchParams {
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsGetBundleParams {
  /** Specifies whether to include referenced SDMs in the bundle response (`true`) or exclude them (`false`). */
  addSdm?: boolean;
  /** Specifies whether to include referenced visualizations in the bundle response (`true`) or exclude them (`false`). */
  addVisualization?: boolean;
  /** The custom view ID (if passed) to load as part of bundle. */
  customViewId?: string;
  /** Specifies whether to return extra API execution details in the response (`true`) or not (`false`). */
  debug?: boolean;
  /** Specifies whether to force a reload of the bundle instead of using cached data (`true`) or use cached data if available (`false`). */
  forceReload?: boolean;
  /** The dashboard height on the viewport in pixels. If passed, bundle only includes assets that display in the height. */
  height?: number;
  /** The minor supported for the API. */
  minorVersion?: number;
  /** The specific page name (GUID) of the dashboard. */
  pageName?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsListCustomviewsParams {
  /** Specifies whether to return a shallow version of the collection (`true`) or the full collection (`false`). */
  shallow?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface DashboardsCreateCustomviewsParams {
  /** Specifies whether to return a shallow version of the collection (`true`) or the full collection (`false`). */
  shallow?: boolean;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class DashboardsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/dashboards";

  /** GET /tableau/dashboards — List dashboards */
  async list(params?: PaginationParams & DashboardsListParams, options?: RequestOptions): Promise<DashboardCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/dashboards — Create dashboard */
  async create(body: DashboardInputRepresentation, params?: DashboardsCreateParams, options?: RequestOptions): Promise<DashboardRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** DELETE /tableau/dashboards/{dashboardIdOrApiName} — Delete dashboard */
  async delete(dashboardIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}`, options);
  }

  /** GET /tableau/dashboards/{dashboardIdOrApiName} — Get dashboard */
  async get(dashboardIdOrApiName: string, params?: DashboardsGetParams, options?: RequestOptions): Promise<DashboardRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}`, { ...options, query: params });
  }

  /** PATCH /tableau/dashboards/{dashboardIdOrApiName} — Update dashboard */
  async patch(dashboardIdOrApiName: string, body: DashboardInputRepresentation, params?: DashboardsPatchParams, options?: RequestOptions): Promise<DashboardRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}`, body, { ...options, query: params });
  }

  /** GET /tableau/dashboards/{dashboardIdOrApiName}/bundle — Get dashboard bundle */
  async getBundle(dashboardIdOrApiName: string, params?: DashboardsGetBundleParams, options?: RequestOptions): Promise<DashboardBundleRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/bundle`, { ...options, query: params });
  }

  /** GET /tableau/dashboards/{dashboardIdOrApiName}/customviews — List dashboard custom views */
  async listCustomviews(dashboardIdOrApiName: string, params?: PaginationParams & DashboardsListCustomviewsParams, options?: RequestOptions): Promise<DashboardCustomViewCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/dashboards/{dashboardIdOrApiName}/customviews — Create dashboard custom view */
  async createCustomviews(dashboardIdOrApiName: string, body: DashboardCustomViewInputRepresentation, params?: DashboardsCreateCustomviewsParams, options?: RequestOptions): Promise<DashboardCustomViewRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews`, body, { ...options, query: params });
  }

  /** GET /tableau/dashboards/{dashboardIdOrApiName}/customviews/{viewId} — Get dashboard custom view */
  async getCustomviews(dashboardIdOrApiName: string, viewId: string, options?: RequestOptions): Promise<DashboardCustomViewRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews/${encodeURIComponent(viewId)}`, options);
  }

  /** POST /tableau/dashboards/{dashboardIdOrApiName}/customviews/{viewId} — Delete dashboard custom view */
  async postCustomviews(dashboardIdOrApiName: string, viewId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews/${encodeURIComponent(viewId)}`, undefined, options);
  }

  /** GET /tableau/dashboards/{dashboardIdOrApiName}/customviews/default — Get default dashboard custom view */
  async getCustomviewsDefault(dashboardIdOrApiName: string, options?: RequestOptions): Promise<DashboardCustomViewRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews/default`, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & DashboardsListParams, options?: RequestOptions): AsyncGenerator<DashboardRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DashboardRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listCustomviews */
  async *listAllCustomviews(dashboardIdOrApiName: string, params?: PaginationParams & DashboardsListCustomviewsParams, options?: RequestOptions): AsyncGenerator<DashboardCustomViewRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<DashboardCustomViewRepresentation>(`${this.basePath}/${encodeURIComponent(dashboardIdOrApiName)}/customviews`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
