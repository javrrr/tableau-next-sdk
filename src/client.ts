import type { ClientConfig } from "./core/types.js";
import { HttpClient } from "./core/http-client.js";
import { AssetsService } from "./resources/assets.js";
import { DashboardsService } from "./resources/dashboards.js";
import { FollowersService } from "./resources/followers.js";
import { MarketplaceService } from "./resources/marketplace.js";
import { PersonalOrgsService } from "./resources/personal-orgs.js";
import { RecordsService } from "./resources/records.js";
import { SubscriptionsService } from "./resources/subscriptions.js";
import { VisualizationsService } from "./resources/visualizations.js";
import { WorkspacesService } from "./resources/workspaces.js";

/**
 * Entry point for the Tableau Next REST API (`/services/data/v{n}/tableau/*`).
 *
 * One service accessor per spec tag, each sharing a single `HttpClient`.
 * Construct with an `instanceUrl` that includes the API version (v67+):
 *
 *   const client = new TableauNextClient({
 *     instanceUrl: "https://my.salesforce.com/services/data/v67.0",
 *     auth: { type: "static", accessToken: process.env.SF_ACCESS_TOKEN! },
 *   });
 */
export class TableauNextClient {
  /** Shared HTTP client — passed to every service. Exposed for advanced usage. */
  public readonly httpClient: HttpClient;

  public readonly visualizations: VisualizationsService;
  public readonly dashboards: DashboardsService;
  public readonly workspaces: WorkspacesService;
  public readonly assets: AssetsService;
  public readonly followers: FollowersService;
  public readonly marketplace: MarketplaceService;
  public readonly personalOrgs: PersonalOrgsService;
  public readonly records: RecordsService;
  public readonly subscriptions: SubscriptionsService;

  constructor(config: ClientConfig) {
    this.httpClient = new HttpClient(config);

    this.visualizations = new VisualizationsService(this.httpClient);
    this.dashboards = new DashboardsService(this.httpClient);
    this.workspaces = new WorkspacesService(this.httpClient);
    this.assets = new AssetsService(this.httpClient);
    this.followers = new FollowersService(this.httpClient);
    this.marketplace = new MarketplaceService(this.httpClient);
    this.personalOrgs = new PersonalOrgsService(this.httpClient);
    this.records = new RecordsService(this.httpClient);
    this.subscriptions = new SubscriptionsService(this.httpClient);
  }
}
