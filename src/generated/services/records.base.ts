/**
 * Auto-generated base service for Records.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/records.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { PaginationParams, RequestOptions } from "../../core/types.js";
import type {
  SetupObjectAccessTypeEnum,
  SetupRecordAccessCollectionRepresentation,
  SetupRecordAccessInputRepresentation,
  SetupRecordShareCollectionRepresentation,
  UpdateSetupRecordAccessInputRepresentation,
} from "../../schemas.js";

// ── Query parameter interfaces ──

export interface RecordsListSharesParams {
  filterByAccessType?: string;
  filterByRecipientType?: string;
  recipientSearchTerm?: string;
  sortOrder?: string;
  userOrGroupId?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Base service class ──

export class RecordsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/records";

  /** DELETE /tableau/records/{recordId}/shares — Delete record shares */
  async deleteShares(recordId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordId)}/shares`, options);
  }

  /** GET /tableau/records/{recordId}/shares — List record shares */
  async listShares(recordId: string, params?: PaginationParams & RecordsListSharesParams, options?: RequestOptions): Promise<SetupRecordAccessCollectionRepresentation> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(recordId)}/shares`, {
      ...options,
      query: { ...this.paginationQuery({ batchSize, offset, orderBy, pageSizeParam: "limit" }), ...query },
    });
  }

  /** PATCH /tableau/records/{recordId}/shares — Update record shares */
  async patchShares(recordId: string, body: UpdateSetupRecordAccessInputRepresentation, options?: RequestOptions): Promise<SetupRecordShareCollectionRepresentation> {
    return this.httpClient.patch(`${this.basePath}/${encodeURIComponent(recordId)}/shares`, body, options);
  }

  /** POST /tableau/records/{recordId}/shares — Create record shares */
  async createShares(recordId: string, body: SetupRecordAccessInputRepresentation, options?: RequestOptions): Promise<SetupRecordShareCollectionRepresentation> {
    return this.httpClient.post(`${this.basePath}/${encodeURIComponent(recordId)}/shares`, body, options);
  }

  /** DELETE /tableau/records/{recordId}/shares/{userOrGroupId} — Delete a record share */
  async deleteSharesByDelete(recordId: string, userOrGroupId: string, options?: RequestOptions): Promise<void> {
    return this.httpClient.delete(`${this.basePath}/${encodeURIComponent(recordId)}/shares/${encodeURIComponent(userOrGroupId)}`, options);
  }

  /** Async generator yielding all items from listShares */
  async *listAllShares(recordId: string, params?: PaginationParams & RecordsListSharesParams, options?: RequestOptions): AsyncGenerator<SetupObjectAccessTypeEnum, void, undefined> {
    const { batchSize, offset, orderBy, ...query } = params ?? {};
    yield* this.paginate<SetupObjectAccessTypeEnum>(`${this.basePath}/${encodeURIComponent(recordId)}/shares`, { batchSize, offset, orderBy, pageSizeParam: "limit", query }, options);
  }
}
