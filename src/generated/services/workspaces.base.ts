/**
 * Auto-generated base service for Workspaces.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/workspaces.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  BatchRepresentation,
  WorkspaceAssetBatchInputRepresentation,
  WorkspaceAssetCollectionRepresentation,
  WorkspaceAssetInputRepresentation,
  WorkspaceAssetRepresentation,
  WorkspaceCollectionRepresentation,
  WorkspaceInputRepresentation,
  WorkspaceRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface WorkspacesListParams {
  lastModifiedBy?: string;
  searchTerm?: string;
  sortBy?: string;
  sortDirection?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface WorkspacesCreateParams {
  description?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface WorkspacesListAssetsParams {
  assetUsageType?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface WorkspacesPostAssetsBatchParams {
  isBulk?: boolean;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class WorkspacesServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/workspaces";

  /** GET /tableau/workspaces — List workspaces */
  async list(params?: PaginationParams & WorkspacesListParams, options?: RequestOptions): Promise<WorkspaceCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/workspaces — Create workspace */
  async create(body: WorkspaceInputRepresentation, params?: WorkspacesCreateParams, options?: RequestOptions): Promise<WorkspaceRepresentation> {
    return this.httpClient.post(this.basePath, body, { ...options, query: params });
  }

  /** DELETE /tableau/workspaces/{workspaceIdOrApiName} — Delete workspace */
  async delete(workspaceIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}`, options);
  }

  /** GET /tableau/workspaces/{workspaceIdOrApiName} — Get workspace */
  async get(workspaceIdOrApiName: string, options?: RequestOptions): Promise<WorkspaceRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}`, options);
  }

  /** PATCH /tableau/workspaces/{workspaceIdOrApiName} — Update workspace */
  async patch(workspaceIdOrApiName: string, body: WorkspaceInputRepresentation, options?: RequestOptions): Promise<WorkspaceRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}`, body, options);
  }

  /** GET /tableau/workspaces/{workspaceIdOrApiName}/assets — Get workspace assets */
  async listAssets(workspaceIdOrApiName: string, params?: PaginationParams & WorkspacesListAssetsParams, options?: RequestOptions): Promise<WorkspaceAssetCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/workspaces/{workspaceIdOrApiName}/assets — Create workspace asset */
  async createAssets(workspaceIdOrApiName: string, body: WorkspaceAssetInputRepresentation, options?: RequestOptions): Promise<WorkspaceAssetRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets`, body, options);
  }

  /** DELETE /tableau/workspaces/{workspaceIdOrApiName}/assets/{assetId} — Delete workspace asset */
  async deleteAssets(assetId: string, workspaceIdOrApiName: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets/${encodeURIComponent(assetId)}`, options);
  }

  /** GET /tableau/workspaces/{workspaceIdOrApiName}/assets/{assetId} — Get workspace asset */
  async getAssets(assetId: string, workspaceIdOrApiName: string, options?: RequestOptions): Promise<WorkspaceAssetCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets/${encodeURIComponent(assetId)}`, options);
  }

  /** PATCH /tableau/workspaces/{workspaceIdOrApiName}/assets/{assetId} — Update workspace asset */
  async patchAssets(assetId: string, workspaceIdOrApiName: string, body: WorkspaceInputRepresentation, options?: RequestOptions): Promise<WorkspaceAssetRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets/${encodeURIComponent(assetId)}`, body, options);
  }

  /** POST /tableau/workspaces/{workspaceIdOrApiName}/assets/{assetId} — Clone workspace asset */
  async postAssets(assetId: string, workspaceIdOrApiName: string, options?: RequestOptions): Promise<WorkspaceAssetRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets/${encodeURIComponent(assetId)}`, undefined, options);
  }

  /** POST /tableau/workspaces/{workspaceIdOrApiName}/assets/batch — Batch create workspace assets */
  async postAssetsBatch(workspaceIdOrApiName: string, body: WorkspaceAssetBatchInputRepresentation, params?: WorkspacesPostAssetsBatchParams, options?: RequestOptions): Promise<BatchRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets/batch`, body, { ...options, query: params });
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & WorkspacesListParams, options?: RequestOptions): AsyncGenerator<WorkspaceRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<WorkspaceRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listAssets */
  async *listAllAssets(workspaceIdOrApiName: string, params?: PaginationParams & WorkspacesListAssetsParams, options?: RequestOptions): AsyncGenerator<WorkspaceAssetRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<WorkspaceAssetRepresentation>(`${this.basePath}/${encodeURIComponent(workspaceIdOrApiName)}/assets`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
