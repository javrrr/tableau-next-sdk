/**
 * Auto-generated base service for Follow (Followers).
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/followers.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AnalyticsUserRepresentation,
  FollowInputRepresentation,
  FollowedAssetCollectionRepresentation,
  FollowedAssetRefCollectionRepresentation,
  FollowedAssetRefRepresentation,
  FollowedAssetRepresentation,
  FollowerAssetCollectionRepresentation,
  FollowerAssetRepresentation,
  FollowerCollectionRepresentation,
  SubMetricInfoInputRepresentation,
  SubMetricInfoOutputRepresentation,
  UniqueFollowerCountRepresentation,
  UpdateFollowInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface FollowersListAssetsFollowersParams {
  followerId?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface FollowersListFollowersFollowedAssetRefsParams {
  /** Determines the field to sort by */
  assetsOrderBy?: string;
  /** Determines what asset type to select */
  followedAssetType?: string;
  /** Determines the sorting order Valid values are app, ASC and DESC. */
  sortOrder?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface FollowersListFollowersFollowedAssetsParams {
  /** The determines the field to sort by. */
  assetsOrderBy?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class FollowersServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/follow";

  /** GET /tableau/follow/assets/{followedAssetId}/follower-count — Get asset follower count */
  async getAssetsFollowerCount(followedAssetId: string, options?: RequestOptions): Promise<UniqueFollowerCountRepresentation> {
    return this.httpClient.get(`${this.basePath}/assets/${encodeURIComponent(followedAssetId)}/follower-count`, options);
  }

  /** GET /tableau/follow/assets/{followedAssetId}/followers — Get asset followers */
  async listAssetsFollowers(followedAssetId: string, params?: FollowersListAssetsFollowersParams, options?: RequestOptions): Promise<FollowerCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/assets/${encodeURIComponent(followedAssetId)}/followers`, { ...options, query: params });
  }

  /** GET /tableau/follow/followers/{followerId}/followed-asset-refs — List followed assets */
  async listFollowersFollowedAssetRefs(followerId: string, params?: PaginationParams & FollowersListFollowersFollowedAssetRefsParams, options?: RequestOptions): Promise<FollowedAssetRefCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/followers/${encodeURIComponent(followerId)}/followed-asset-refs`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** GET /tableau/follow/followers/{followerId}/followed-assets — List followed assets */
  async listFollowersFollowedAssets(followerId: string, params?: FollowersListFollowersFollowedAssetsParams, options?: RequestOptions): Promise<FollowedAssetCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/followers/${encodeURIComponent(followerId)}/followed-assets`, { ...options, query: params });
  }

  /** PATCH /tableau/follow/followers/{followerId}/follows — Update follow */
  async patchFollowersFollows(followerId: string, body: UpdateFollowInputRepresentation, options?: RequestOptions): Promise<FollowerAssetCollectionRepresentation> {
    return this.httpClient.patch(`${this.basePath}/followers/${encodeURIComponent(followerId)}/follows`, body, options);
  }

  /** POST /tableau/follow/followers/{followerId}/follows — Create follow */
  async createFollowersFollows(followerId: string, body: FollowInputRepresentation, options?: RequestOptions): Promise<FollowerAssetRepresentation> {
    return this.httpClient.post(`${this.basePath}/followers/${encodeURIComponent(followerId)}/follows`, body, options);
  }

  /** DELETE /tableau/follow/followers/{followerId}/follows/{followedAssetId} — Delete follow */
  async deleteFollowersFollows(followedAssetId: string, followerId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/followers/${encodeURIComponent(followerId)}/follows/${encodeURIComponent(followedAssetId)}`, options);
  }

  /** POST /tableau/follow/submetric-info — Get submetric info */
  async createSubmetricInfo(body: SubMetricInfoInputRepresentation, options?: RequestOptions): Promise<SubMetricInfoOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/submetric-info`, body, options);
  }

  /** Async generator yielding all items from listAssetsFollowers */
  async *listAllAssetsFollowers(followedAssetId: string, params?: PaginationParams & FollowersListAssetsFollowersParams, options?: RequestOptions): AsyncGenerator<AnalyticsUserRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<AnalyticsUserRepresentation>(`${this.basePath}/assets/${encodeURIComponent(followedAssetId)}/followers`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }

  /** Async generator yielding all items from listFollowersFollowedAssetRefs */
  async *listAllFollowersFollowedAssetRefs(followerId: string, params?: PaginationParams & FollowersListFollowersFollowedAssetRefsParams, options?: RequestOptions): AsyncGenerator<FollowedAssetRefRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<FollowedAssetRefRepresentation>(`${this.basePath}/followers/${encodeURIComponent(followerId)}/followed-asset-refs`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listFollowersFollowedAssets */
  async *listAllFollowersFollowedAssets(followerId: string, params?: PaginationParams & FollowersListFollowersFollowedAssetsParams, options?: RequestOptions): AsyncGenerator<FollowedAssetRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<FollowedAssetRepresentation>(`${this.basePath}/followers/${encodeURIComponent(followerId)}/followed-assets`, { batchSize, offset, orderBy, pageSizeParam: "batchSize", query }, options);
  }
}
