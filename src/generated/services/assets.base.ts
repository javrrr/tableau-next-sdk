/**
 * Auto-generated base service for Assets.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/assets.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AnalyticsAssetCloneInputRepresentation,
  AnalyticsAssetCloneResultRepresentation,
  AnalyticsAssetsCompareInputRepresentation,
  AnalyticsAssetsCompareOutputRepresentation,
  AssetDependentCollectionRepresentation,
  AssetDependentsQueryInputRepresentation,
  TypedAssetReferenceCollectionRepresentation,
  TypedAssetReferenceRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class AssetsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/assets";

  /** GET /tableau/assets/{assetId}/references — Get asset references */
  async listReferences(assetId: string, options?: RequestOptions): Promise<TypedAssetReferenceCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(assetId)}/references`, options);
  }

  /** POST /tableau/assets/clone — Clone asset */
  async createClone(body: AnalyticsAssetCloneInputRepresentation, options?: RequestOptions): Promise<AnalyticsAssetCloneResultRepresentation> {
    return this.httpClient.post(`${this.basePath}/clone`, body, options);
  }

  /** POST /tableau/assets/compare — Compare assets */
  async createCompare(body: AnalyticsAssetsCompareInputRepresentation, options?: RequestOptions): Promise<AnalyticsAssetsCompareOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/compare`, body, options);
  }

  /** POST /tableau/assets/dependencies — List asset dependents */
  async createDependencies(body: AssetDependentsQueryInputRepresentation, options?: RequestOptions): Promise<AssetDependentCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/dependencies`, body, options);
  }

  /** Async generator yielding all items from listReferences */
  async *listAllReferences(assetId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<TypedAssetReferenceRepresentation, void, undefined> {
    yield* this.paginate<TypedAssetReferenceRepresentation>(`${this.basePath}/${encodeURIComponent(assetId)}/references`, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
