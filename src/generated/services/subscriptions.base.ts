/**
 * Auto-generated base service for Subscriptions.
 * DO NOT EDIT — run `npm run generate` to regenerate.
 * Extend this class in src/resources/subscriptions.ts for customizations.
 */
import { BaseResource } from "../../resources/base-resource.js";
import type { RequestOptions } from "../../core/types.js";
import type {
  SubscriptionDigestConfigInputRepresentation,
  SubscriptionDigestConfigOutputRepresentation,
} from "../../schemas.js";

// ── Base service class ──

export class SubscriptionsServiceBase extends BaseResource {
  protected readonly basePath = "/tableau/subscriptions";

  /** GET /tableau/subscriptions/digest/{digestConfigOwner} — Get subscription digest configuration */
  async getDigest(digestConfigOwner: string, options?: RequestOptions): Promise<SubscriptionDigestConfigOutputRepresentation> {
    return this.httpClient.get(`${this.basePath}/digest/${encodeURIComponent(digestConfigOwner)}`, options);
  }

  /** PATCH /tableau/subscriptions/digest/{digestConfigOwner} — Update subscription digest configuration */
  async patchDigest(digestConfigOwner: string, body: SubscriptionDigestConfigInputRepresentation, options?: RequestOptions): Promise<SubscriptionDigestConfigOutputRepresentation> {
    return this.httpClient.patch(`${this.basePath}/digest/${encodeURIComponent(digestConfigOwner)}`, body, options);
  }
}
