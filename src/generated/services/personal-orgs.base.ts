/**
 * Auto-generated base service for Personal Orgs.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/personal-orgs.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  AnalyticsPersonalOrgInfoCollectionRepresentation,
  AnalyticsPersonalOrgInfoRepresentation,
  AnalyticsPersonalOrgInfoSyncInputRepresentation,
  AnalyticsPersonalOrgInfoSyncResultRepresentation,
  AnalyticsPersonalOrgInfoUpdateInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface PersonalOrgsListParams {
  owner?: string;
  queryFields?: string;
  queryValue?: string;
  sortBy?: string;
  sortOrder?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class PersonalOrgsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/personal-orgs";

  /** POST /tableau/analytics-personal-org-infos — Sync personal org info */
  async createAnalyticsPersonalOrgInfos(body: AnalyticsPersonalOrgInfoSyncInputRepresentation, options?: RequestOptions): Promise<AnalyticsPersonalOrgInfoSyncResultRepresentation> {
    return this.httpClient.post(`/tableau/analytics-personal-org-infos`, body, options);
  }

  /** GET /tableau/personal-orgs — List personal orgs */
  async list(params?: PaginationParams & PersonalOrgsListParams, options?: RequestOptions): Promise<AnalyticsPersonalOrgInfoCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(this.basePath, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** DELETE /tableau/personal-orgs/{personalOrgInfoId} — Delete personal org */
  async delete(personalOrgInfoId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(personalOrgInfoId)}`, options);
  }

  /** GET /tableau/personal-orgs/{personalOrgInfoId} — Get personal org */
  async get(personalOrgInfoId: string, options?: RequestOptions): Promise<AnalyticsPersonalOrgInfoRepresentation> {
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(personalOrgInfoId)}`, options);
  }

  /** PATCH /tableau/personal-orgs/{personalOrgInfoId} — Update personal org */
  async patch(personalOrgInfoId: string, body: AnalyticsPersonalOrgInfoUpdateInputRepresentation, options?: RequestOptions): Promise<AnalyticsPersonalOrgInfoRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(personalOrgInfoId)}`, body, options);
  }

  /** Async generator yielding all items from list */
  async *listAll(params?: PaginationParams & PersonalOrgsListParams, options?: RequestOptions): AsyncGenerator<AnalyticsPersonalOrgInfoRepresentation, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<AnalyticsPersonalOrgInfoRepresentation>(this.basePath, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
