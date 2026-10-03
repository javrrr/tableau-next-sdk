/**
 * Auto-generated base service for Visualizations.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/visualizations.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  VisualizationBundleRepresentation,
  VisualizationCollectionRepresentation,
  VisualizationInputRepresentation,
  VisualizationRepresentation,
  VisualizationShallowRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface VisualizationsListParams {
  /** The minor API version for visualization operations. */
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface VisualizationsCreateParams {
  /** The minor API version for visualization operations. */
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface VisualizationsGetParams {
  /** The minor API version for visualization operations. */
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface VisualizationsPatchParams {
  /** The minor API version for visualization operations. */
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface VisualizationsGetBundleParams {
  /** The minor API version for visualization bundle operation. */
  minorVersion?: number;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class VisualizationsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/visualizations";

  /** GET /tableau/visualizations — List visualizations */
  async list(params?: PaginationParams & VisualizationsListParams, options?: RequestOptions): Promise<VisualizationCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/visualizations — Create visualization */
  async create(body: VisualizationInputRepresentation, params?: VisualizationsCreateParams, options?: RequestOptions): Promise<VisualizationRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** DELETE /tableau/visualizations/{visualizationIdOrApiName} — Delete visualization */
  async delete(visualizationIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(visualizationIdOrApiName)}`, options);
  }

  /** GET /tableau/visualizations/{visualizationIdOrApiName} — Get visualization */
  async get(visualizationIdOrApiName: string, params?: VisualizationsGetParams, options?: RequestOptions): Promise<VisualizationRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(visualizationIdOrApiName)}`, { ...options, query: params });
  }

  /** PATCH /tableau/visualizations/{visualizationIdOrApiName} — Update visualization */
  async patch(visualizationIdOrApiName: string, body: VisualizationInputRepresentation, params?: VisualizationsPatchParams, options?: RequestOptions): Promise<VisualizationRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(visualizationIdOrApiName)}`, body, { ...options, query: params });
  }

  /** GET /tableau/visualizations/{visualizationIdOrApiName}/bundle — Get visualization bundle */
  async getBundle(visualizationIdOrApiName: string, params?: VisualizationsGetBundleParams, options?: RequestOptions): Promise<VisualizationBundleRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(visualizationIdOrApiName)}/bundle`, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & VisualizationsListParams, options?: RequestOptions): AsyncGenerator<VisualizationShallowRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<VisualizationShallowRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
