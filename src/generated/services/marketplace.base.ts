/**
 * Auto-generated base service for Marketplace.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/marketplace.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  MarketplaceListingCollectionRepresentation,
  MarketplaceListingDetailRepresentation,
  MarketplaceListingInputRepresentation,
  MarketplaceListingRepresentation,
  MarketplaceTemplateInputRepresentation,
  MarketplaceTemplateOutputRepresentation,
  PackageComponentCollectionRepresentation,
  PackageComponentRepresentation,
  TableauMarketplaceListingInstallationProgressResponse,
  TableauMarketplaceListingInstallationResponse,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface MarketplaceListListingsParams {
  /** The ID of asset to query */
  assetId?: string;
  /** The type of asset to query */
  assetType?: string;
  /** The version of asset to query */
  assetVersion?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class MarketplaceServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/marketplace";

  /** GET /tableau/marketplace/installations/{installationId} — Get a marketplace installation */
  async getInstallations(installationId: string, options?: RequestOptions): Promise<TableauMarketplaceListingInstallationProgressResponse> {
    return this.httpClient.get(`${this.basePath}/installations/${encodeURIComponent(installationId)}`, options);
  }

  /** GET /tableau/marketplace/listings — Get marketplace listings */
  async listListings(params?: PaginationParams & MarketplaceListListingsParams, options?: RequestOptions): Promise<MarketplaceListingCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/listings`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** POST /tableau/marketplace/listings — Publish to marketplace */
  async createListings(body: MarketplaceListingInputRepresentation, options?: RequestOptions): Promise<MarketplaceListingRepresentation> {
    return this.httpClient.post(`${this.basePath}/listings`, body, options);
  }

  /** DELETE /tableau/marketplace/listings/{listingId} — Unpublish from marketplace */
  async deleteListings(listingId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/listings/${encodeURIComponent(listingId)}`, options);
  }

  /** GET /tableau/marketplace/listings/{listingId}/install — Install a marketplace listing */
  async getListingsInstall(listingId: string, options?: RequestOptions): Promise<TableauMarketplaceListingInstallationResponse> {
    return this.httpClient.get(`${this.basePath}/listings/${encodeURIComponent(listingId)}/install`, options);
  }

  /** GET /tableau/marketplace/packages/{packageVersionId}/components — List marketplace package components */
  async listPackagesComponents(packageVersionId: string, options?: RequestOptions): Promise<PackageComponentCollectionRepresentation> {
    return this.httpClient.get(`${this.basePath}/packages/${encodeURIComponent(packageVersionId)}/components`, options);
  }

  /** POST /tableau/marketplace/templates — Create a marketplace template */
  async createTemplates(body: MarketplaceTemplateInputRepresentation, options?: RequestOptions): Promise<MarketplaceTemplateOutputRepresentation> {
    return this.httpClient.post(`${this.basePath}/templates`, body, options);
  }

  /** Async generator yielding all items from listListings */
  async *listAllListings(params?: PaginationParams & MarketplaceListListingsParams, options?: RequestOptions): AsyncGenerator<MarketplaceListingDetailRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<MarketplaceListingDetailRepresentation>(`${this.basePath}/listings`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }

  /** Async generator yielding all items from listPackagesComponents */
  async *listAllPackagesComponents(packageVersionId: string, params?: PaginationParams, options?: RequestOptions): AsyncGenerator<PackageComponentRepresentation, void, undefined> {
    yield* this.paginate<PackageComponentRepresentation>(`${this.basePath}/packages/${encodeURIComponent(packageVersionId)}/components`, { ...params, pageSizeParam: "batchSize" }, options);
  }
}
