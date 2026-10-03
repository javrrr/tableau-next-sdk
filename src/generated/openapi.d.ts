// Auto-generated — DO NOT EDIT
export type paths = {
    "/tableau/assets/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clone asset
         * @description Clone a Tableau Next asset with specified options.
         */
        post: operations["cloneAsset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/assets/compare": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Compare assets
         * @description Compare source and target assets and return structured block-level differences.
         */
        post: operations["compareAssets"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/assets/dependencies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List asset dependents
         * @description Get the dependent assets of the given Tableau Next assets.
         */
        post: operations["getAssetDependents"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/assets/{assetId}/references": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
            };
            cookie?: never;
        };
        /**
         * Get asset references
         * @description Get type asset presentation of an asset and all its inner reference assets.
         */
        get: operations["getAssetInnerReference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/dashboards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dashboards
         * @description Get all available Tableau Next Dashboards.
         */
        get: operations["getDashboards"];
        put?: never;
        /**
         * Create dashboard
         * @description Creates a Tableau Next dashboard.
         */
        post: operations["postDashboardCollection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/dashboards/{dashboardIdOrApiName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get dashboard
         * @description Get Tableau Next Dashboard by ID or Name.
         */
        get: operations["getDashboard"];
        put?: never;
        post?: never;
        /**
         * Delete dashboard
         * @description Delete Tableau Next Dashboard by ID or Name.
         */
        delete: operations["deleteDashboard"];
        options?: never;
        head?: never;
        /**
         * Update dashboard
         * @description Update Tableau Next Dashboard Metadata by ID or Name.
         */
        patch: operations["patchDashboard"];
        trace?: never;
    };
    "/tableau/dashboards/{dashboardIdOrApiName}/bundle": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get dashboard bundle
         * @description Gets the bundle response for the specified Tableau Next dashboard.
         *
         *     _Updated April 2026: added `customViewId`, `forceReload`, `height`, `minorVersion`._
         */
        get: operations["getDashboardBundle"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/dashboards/{dashboardIdOrApiName}/customviews": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * List dashboard custom views
         * @description Gets the collection of saved views of a dashboard.
         */
        get: operations["getViews"];
        put?: never;
        /**
         * Create dashboard custom view
         * @description Creates a custom view of a Tableau Next dashboard.
         */
        post: operations["saveView"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/dashboards/{dashboardIdOrApiName}/customviews/default": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get default dashboard custom view
         * @description Gets the default custom view of a Tableau Next dashboard for the current user.
         */
        get: operations["getDefaultView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/dashboards/{dashboardIdOrApiName}/customviews/{viewId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
                /** @description The ID of the custom view. */
                viewId: string;
            };
            cookie?: never;
        };
        /**
         * Get dashboard custom view
         * @description Get the custom view of dashboard by the ID.
         */
        get: operations["getView"];
        put?: never;
        /**
         * Delete dashboard custom view
         * @description Deletes a custom view of a Tableau Next dashboard, specified by the view's view ID.
         */
        post: operations["deleteView"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/assets/{followedAssetId}/follower-count": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followedAssetId: string;
            };
            cookie?: never;
        };
        /**
         * Get asset follower count
         * @description Gets the count of unique followers for a specified followed Tableau Next asset.
         */
        get: operations["getUniqueFollowerCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/assets/{followedAssetId}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followedAssetId: string;
            };
            cookie?: never;
        };
        /**
         * Get asset followers
         * @description Gets a list of followers of a followed Tableau Next asset. You can filter by follower type or a specified follower ID.
         */
        get: operations["getFollowerCollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/followers/{followerId}/followed-asset-refs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        /**
         * List followed assets
         * @description Gets all followed asset references for a follower filterable by asset type.
         *
         *     _Available April 2026 and later._
         */
        get: operations["getFollowedAssetRefCollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/followers/{followerId}/followed-assets": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        /**
         * List followed assets
         * @description Lists the followed Tableau Next assets of a follower. You can filter by asset type.
         */
        get: operations["getFollowedAssetCollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/followers/{followerId}/follows": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create follow
         * @description Follow an asset.
         */
        post: operations["postFollow"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update follow
         * @description Update a followed asset.
         */
        patch: operations["patchFollow"];
        trace?: never;
    };
    "/tableau/follow/followers/{followerId}/follows/{followedAssetId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followedAssetId: string;
                followerId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete follow
         * @description Unfollow an asset.
         */
        delete: operations["deleteUnfollow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/follow/submetric-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get submetric info
         * @description Get SubMetric Info including metric and goal details.
         */
        post: operations["postSubMetricInfo"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/installations/{installationId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                installationId: string;
            };
            cookie?: never;
        };
        /**
         * Get a marketplace installation
         * @description Fetch progress of Tableau Marketplace Listing Installation.
         */
        get: operations["getAnalyticsTableauMarketplaceListingInstallationTracking"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/listings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get marketplace listings
         * @description Get the list of assets published to Tableau Marketplace
         *
         *     _Available April 2026 and later._
         */
        get: operations["getMarketplaceListings"];
        put?: never;
        /**
         * Publish to marketplace
         * @description Adds a new asset to the marketplace listings collection.
         *
         *     _Available April 2026 and later._
         */
        post: operations["publishToMarketplace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/listings/{listingId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the Marketplace Listings */
                listingId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Unpublish from marketplace
         * @description Unpublishes an asset from marketplace listings
         *
         *     _Available April 2026 and later._
         */
        delete: operations["unpublishFromMarketplace"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/listings/{listingId}/install": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                listingId: string;
            };
            cookie?: never;
        };
        /**
         * Install a marketplace listing
         * @description Install the package.
         */
        get: operations["getAnalyticsTableauMarketplaceListing"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/packages/{packageVersionId}/components": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the package version */
                packageVersionId: string;
            };
            cookie?: never;
        };
        /**
         * List marketplace package components
         * @description Get the list of components installed as part of the given package version.
         */
        get: operations["getPackageComponents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/marketplace/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a marketplace template
         * @description Creates a new template.
         */
        post: operations["postMarketplaceTemplateBuilder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/analytics-personal-org-infos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sync personal org info
         * @description Create or update the mirrored AnalyticsPersonalOrgInfo record in this Personal Org.
         */
        post: operations["postAnalyticsPersonalOrgInfoSync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/personal-orgs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List personal orgs
         * @description List the Personal Orgs owned by a user, augmented with their owners.
         */
        get: operations["getAnalyticsPersonalOrgInfoCollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/personal-orgs/{personalOrgInfoId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                personalOrgInfoId: string;
            };
            cookie?: never;
        };
        /**
         * Get personal org
         * @description Get a single Personal Org by its PersonalOrgInfo record ID.
         */
        get: operations["getAnalyticsPersonalOrgInfo"];
        put?: never;
        post?: never;
        /**
         * Delete personal org
         * @description Delete a Personal Org by its PersonalOrgInfo record ID (soft-delete; triggers cross-org deprovisioning).
         */
        delete: operations["deleteAnalyticsPersonalOrgInfo"];
        options?: never;
        head?: never;
        /**
         * Update personal org
         * @description Update a Personal Org (owner deltas; name/details reserved for a follow-up story).
         */
        patch: operations["patchAnalyticsPersonalOrgInfo"];
        trace?: never;
    };
    "/tableau/records/{recordId}/shares": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        /**
         * List record shares
         * @description Get record shares for requested registered grantee for a record.
         */
        get: operations["getSetupRecordShareCollection"];
        put?: never;
        /**
         * Create record shares
         * @description Add record shares to be associated with a record.
         */
        post: operations["postSetupRecordShareCollection"];
        /**
         * Delete record shares
         * @description Delete all shares for an record.
         */
        delete: operations["deleteSetupRecordShareCollection"];
        options?: never;
        head?: never;
        /**
         * Update record shares
         * @description Update an record share to be associated with a record Item.
         */
        patch: operations["patchSetupRecordShareCollection"];
        trace?: never;
    };
    "/tableau/records/{recordId}/shares/{userOrGroupId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
                userOrGroupId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a record share
         * @description Delete a record shares for a record and a user or group.
         */
        delete: operations["deleteSetupRecordShare"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/subscriptions/digest/{digestConfigOwner}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                digestConfigOwner: string;
            };
            cookie?: never;
        };
        /**
         * Get subscription digest configuration
         * @description Get user's subscription digest configuration.
         */
        get: operations["getSubscriptionDigestConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update subscription digest configuration
         * @description Update user's subscription digest configuration.
         */
        patch: operations["patchSubscriptionDigestConfig"];
        trace?: never;
    };
    "/tableau/visualizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List visualizations
         * @description Get all available Tableau Next visualizations.
         */
        get: operations["getVisualizations"];
        put?: never;
        /**
         * Create visualization
         * @description Create a new Tableau Next visualization.
         */
        post: operations["createVisualization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/visualizations/{visualizationIdOrApiName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get visualization
         * @description Get a Tableau Next visualization by ID or API name.
         */
        get: operations["getVisualization"];
        put?: never;
        post?: never;
        /**
         * Delete visualization
         * @description Delete a Tableau Next visualization by ID or API name.
         */
        delete: operations["deleteVisualization"];
        options?: never;
        head?: never;
        /**
         * Update visualization
         * @description Update a Tableau Next visualization by ID or API name.
         */
        patch: operations["updateVisualization"];
        trace?: never;
    };
    "/tableau/visualizations/{visualizationIdOrApiName}/bundle": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get visualization bundle
         * @description Get a Tableau Next visualization by ID or Name with additional information.
         */
        get: operations["getVisualizationBundle"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List workspaces
         * @description Get all available Tableau Next Workspaces.
         */
        get: operations["getWorkspaces"];
        put?: never;
        /**
         * Create workspace
         * @description Creates a Tableau Next workspace.
         */
        post: operations["postWorkspaceCollection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/workspaces/{workspaceIdOrApiName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get workspace
         * @description Get Tableau Next Workspace by ID or Name.
         */
        get: operations["getWorkspace"];
        put?: never;
        post?: never;
        /**
         * Delete workspace
         * @description Delete Tableau Next Workspace by ID or Name.
         */
        delete: operations["deleteWorkspace"];
        options?: never;
        head?: never;
        /**
         * Update workspace
         * @description Update Tableau Next Workspace Metadata by ID or Name.
         */
        patch: operations["patchWorkspace"];
        trace?: never;
    };
    "/tableau/workspaces/{workspaceIdOrApiName}/assets": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get workspace assets
         * @description Get all available assets in a Tableau Next Workspace filterable by asset usage type.
         */
        get: operations["getWorkspaceAssets"];
        put?: never;
        /**
         * Create workspace asset
         * @description Add an asset to be associated with a workspace.
         */
        post: operations["postWorkspaceAssetCollection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/workspaces/{workspaceIdOrApiName}/assets/batch": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Batch create workspace assets
         * @description Batch a batch of workspace assets.
         */
        post: operations["batchCreateWorkspaceAsset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tableau/workspaces/{workspaceIdOrApiName}/assets/{assetId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        /**
         * Get workspace asset
         * @description Get all dependent assets of the given asset.
         */
        get: operations["getWorkspaceAsset"];
        put?: never;
        /**
         * Clone workspace asset
         * @description Clone an asset in the same workspace.
         */
        post: operations["postWorkspaceAsset"];
        /**
         * Delete workspace asset
         * @description Delete an asset from a workspace.
         */
        delete: operations["deleteWorkspaceAsset"];
        options?: never;
        head?: never;
        /**
         * Update workspace asset
         * @description Move workspace asset to another workspace.
         */
        patch: operations["patchWorkspaceAsset"];
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /**
         * Value
         * @description A value-based label for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineValueLabelRepresentation": {
            /**
             * @description The shape of `label` when `type` is `Value`.
             * @enum {string}
             */
            type: "Value";
        };
        /**
         * @description The source a visualization was created from.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationCreationSource": "Conversation" | "Mcp" | "Slack" | "TuaApp";
        /**
         * @description The forecast interval time unit of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastTimeUnitType": "Days" | "Hours" | "Minutes" | "Months" | "Quarters" | "Weeks" | "Years";
        /**
         * @description The type of quick table calculation for a visualization field.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType": "Difference" | "MovingAverage" | "MovingMax" | "MovingMin" | "MovingSum" | "PercentDifference" | "PercentOfTotal" | "Percentile" | "Rank" | "RankDense" | "RankModified" | "RankUnique" | "RunningAvg" | "RunningMax" | "RunningMin" | "RunningSum";
        /** @description Representation of types of action to run on a record. */
        "sfdc.unified.analytics.connect.api.input.actions.RecordActionInfoInputRepresentation": {
            /** @description Name of the action. */
            apiName?: string;
        };
        /** @description Abstract base output representation for style properties common to all visualization layout types. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationStyleRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationVizqlStyleRepresentation"];
        /**
         * Line
         * @description A line-type reference line for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineInputRepresentation": {
            line?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInfoInputRepresentation"];
            /** @description The field key of the reference line in the visualization. */
            fieldKey?: string;
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineScopeType"];
            /**
             * @description The shape of `referenceLines` when `type` is `Line`.
             * @enum {string}
             */
            type: "Line";
        };
        /**
         * @description The axis synchronization type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisSynchronizationType": "FullRange" | "None" | "ZeroPosition";
        /** @description A layout-based visual specification for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationLayoutVisualSpecRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationVizqlLayoutVisualSpecRepresentation"];
        /**
         * @description Supported Order By Fields
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.resource.follow.OrderBy": "AssetLabel" | "CreatedDate" | "ShouldShowForecast";
        /**
         * @description Type of a Microsoft Teams recipient for a data alert
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.input.dataAlert.MsTeamsRecipientTypeEnum": "SalesforceUser";
        /** @description A text value element in a tooltip custom text sequence for a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationTooltipTextValueInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBasicTextValueInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldTokenTextValueInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationPropertyTokenTextValueInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationSdmFieldTokenTextValueInputRepresentation"];
        /** @description Representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation": {
            /** @description The encoding properties of the mark. */
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkEncodingRepresentation"][];
            /** @description Whether the mark stack should be applied by default. */
            isAutomatic?: boolean;
            stack?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStackRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkType"];
        };
        /** @description A field reference for a unified filter. */
        "sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterFieldInputRepresentation": {
            /** @description The expression. */
            expression?: string;
            /** @description The model field reference. */
            model?: string;
        };
        /** @description A filter applied to a visualization, such as a range, relative date, or wildcard filter. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationFilterInfoInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationGreaterThanFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationInFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLessThanFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationNullsFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRangeFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRelativeDateFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTopNFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationWildCardFilterInfoInputRepresentation"];
        /**
         * None
         * @description The absence of a label for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineNoneLabelInputRepresentation": {
            /**
             * @description The shape of `label` when `type` is `None`.
             * @enum {string}
             */
            type: "None";
        };
        /** @description Input representation for a style rule scope. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleScopeInputRepresentation": {
            /** @description Mark type to scope this rule to. */
            markType?: string;
        };
        /**
         * @description The display unit type for the number format info in the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoDisplayUnitType": "Auto" | "B" | "G" | "K" | "M" | "None";
        /**
         * DownloadDashboardAsset
         * @description A downloaded Tableau Next dashboard, including the filters applied to it.
         */
        "sfdc.unified.analytics.connect.api.output.download.DownloadDashboardAssetRepresentation": {
            /** @description Summary of filters applied to this dashboard */
            dashboardFilterSummary?: string;
            /** @description List of filters applied to this dashboard */
            dashboardFilters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadFilterRepresentation"][];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * @description The wild card filter operator type of the visualization's view specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationWildCardFilterOperatorType": "Contains" | "EndsWith" | "Exact" | "StartsWith";
        /**
         * Page
         * @description A navigation destination that targets a specific page within the current dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.actions.PageNavigateActionDestinationInputRepresentation": {
            /** @description Destination target */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Page`.
             * @enum {string}
             */
            type?: "Page";
        };
        /** @description Representation for field label style for table layout in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTableFieldLabelsStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
        };
        /** @description Input representation for flow field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFlowFieldLabelsStyleInputRepresentation": {
            levels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
        };
        /** @description Represents an error that occurred during the clone operation. */
        "sfdc.unified.analytics.clone.connect.api.output.CloneErrorRepresentation": {
            /** @description The ID of the asset that caused the error, if applicable. */
            assetId?: string;
            /** @description The error code. */
            errorCode?: string;
            /** @description The error message. */
            errorMessage?: string;
        };
        /** @description A Tableau Next asset, identified by an ID, with a name, label, and description. */
        "sfdc.unified.analytics.connect.api.output.BaseAnalyticsRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsGroupRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.AssetReferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseAnalyticsAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDataSourceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutPageRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardPageWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationItemRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetLabelStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation"];
        /** @description Represents text widget parameter content attribute representation in unified analytics */
        "sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetContentAttributeRepresentation": {
            /** @description Align attribute of text widget */
            align?: string;
            /** @description Background attribute of text widget */
            background?: string;
            /** @description Bold attribute of text widget */
            bold?: boolean;
            /** @description Color attribute of text widget */
            color?: string;
            /** @description Italic attribute of text widget */
            italic?: boolean;
            /** @description Link attribute of text widget */
            link?: string;
            /** @description List type attribute of text widget (e.g. bullet, ordered) */
            list?: string;
            /** @description Size attribute of text widget */
            size?: string;
            /** @description Strike attribute of text widget */
            strike?: boolean;
            /** @description Underline attribute of text widget */
            underline?: boolean;
        };
        /**
         * Text
         * @description A set of configuration parameters for a text widget in a Tableau Next dashboard, including its content, conditional formatting rules, and vertical alignment.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetParametersInputRepresentation": {
            /** @description Measure and dimension conditional formatting rules for text widget */
            conditionalFormattingRules?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.ConditionalFormattingRuleInputRepresentation"][];
            /** @description Text content of the text widget */
            content?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetContentParameterInputRepresentation"][];
            /**
             * Format: double
             * @description Line spacing of the text widget content. Null means Normal (browser default).
             */
            lineSpacing?: number;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            /** @description Tooltip of the text widget */
            tooltip?: string;
            /** @description Vertical alignment of the text widget content. Valid values: top, center, bottom */
            verticalAlignment?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetStylesInputRepresentation"];
        };
        /**
         * Band
         * @description A band, defined by a start and end reference line, for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceBandRepresentation": {
            endLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineInfoRepresentation"];
            startLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineInfoRepresentation"];
            /** @description The field key of the reference line in the visualization. */
            fieldKey?: string;
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineScopeType"];
            /**
             * @description The shape of `referenceLines` when `type` is `Band`.
             * @enum {string}
             */
            type: "Band";
        };
        /**
         * Grid
         * @description A grid background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationGridBackgroundInputRepresentation": {
            domain?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationGridBackgroundDomainInputRepresentation"];
            /**
             * @description The shape of `background` when `type` is `Grid`.
             * @enum {string}
             */
            type: "Grid";
        };
        /** @description Filter option input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.FilterOptionInputRepresentation": {
            /** @description Data type of the field name being filtered */
            dataType?: string;
            /** @description The specific field within the data object that this filter widget will filter on */
            fieldName?: string;
            /** @description The name of the table or view that this filter widget is associated with */
            objectName?: string;
            selectionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterSelectionTypeEnum"];
        };
        /**
         * @description The type of layout in a visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType": "Flow" | "Map" | "Radial" | "Table" | "Vizql";
        /**
         * Blank
         * @description A blank background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationBlankBackgroundInputRepresentation": {
            /**
             * @description The shape of `background` when `type` is `Blank`.
             * @enum {string}
             */
            type: "Blank";
        };
        /** @description Output representation for all headers style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAllHeadersStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsDirectionStyleRepresentation"];
            /** @description The field header styles for the visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderStyleRepresentation"];
            };
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsDirectionStyleRepresentation"];
        };
        /** @description Input representation for visual specification style in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleInputRepresentation": {
            allHeaders?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAllHeadersStyleInputRepresentation"];
            /** @description The axis style for the visualization. */
            axis?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisStyleInputRepresentation"];
            };
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsStyleInputRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation"];
            /** @description The header style for the visualization. */
            headers?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderStyleInputRepresentation"];
            };
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            /** @description The mark style for the visualization. */
            marks?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
            };
            /** @description The pane style for the visualization. */
            panes?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationPaneStyleInputRepresentation"];
            };
            /** @description The reference line style for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineStyleInputRepresentation"];
            };
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            /** @description If the data placeholder column or cell should be visible. */
            showDataPlaceholder?: boolean;
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
        };
        /** @description A color palette for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationPaletteRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomPaletteRepresentation"];
        /**
         * Custom
         * @description A custom range style for a visualization axis, with defined start and end values.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationCustomAxisRangeStyleRepresentation": {
            end?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisCustomRangeExtentRepresentation"];
            start?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisCustomRangeExtentRepresentation"];
            /**
             * @description The shape of `range` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /** @description The background of a visualization, either blank, a grid, or a map. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationBackgroundInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBlankBackgroundInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationGridBackgroundInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundInputRepresentation"];
        /**
         * Radial
         * @description The Radial layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialLayoutVisualSpecInputRepresentation": {
            /** @description The BAN (big number) fields for the radial visualization. */
            ban?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialMarksInputRepresentation"];
            /** @description The measure values for the visualization. */
            measureValues?: string[];
            /** @description The rings fields for the radial visualization. */
            rings?: string[];
            /** @description The slices fields for the radial visualization. */
            slices?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialStyleInputRepresentation"];
            /**
             * @description The shape of this object when `layout` is `Radial`.
             * @enum {string}
             */
            layout: "Radial";
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation"];
        };
        /** @description Follower input representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.input.follow.FollowerInputRepresentation": {
            /** @description Followed asset ID */
            followedAssetId?: string;
            /** @description Follower ID */
            followerId?: string;
            followerType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowerTypeEnum"];
            /** @description Limit parameter value */
            limit?: number;
            /** @description Offset parameter value */
            offset?: number;
        };
        /** @description A dashboard bundle asset. */
        "sfdc.unified.analytics.connect.api.output.DashboardBundleAssetRepresentation": {
            /** @description The tODO-asset metadata as blob once we will migrate old APIs to IDL then we mark it as ConnectRepresentation. */
            asset?: unknown;
            /** @description The asset created from template. */
            assetAppTemplate?: string;
            /** @description The bundle asset status. */
            status?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardBundleAssetTypeEnum"];
        };
        /**
         * Value
         * @description A value label for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineValueLabelInputRepresentation": {
            /**
             * @description The shape of `label` when `type` is `Value`.
             * @enum {string}
             */
            type: "Value";
        };
        /**
         * @description Followed asset type.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum": "SemanticMetricDefinition" | "SemanticSubMetric";
        /** @description A field ID representation with metadata. */
        "sfdc.unified.analytics.connect.api.output.MarkSelectionFieldRepresentation": {
            /** @description The index for disambiguating field references. */
            disambiguationIndex?: number;
            /** @description The display category of the field (e.g., Continuous, Discrete). */
            displayCategory?: string;
            /** @description The name of the field. */
            fieldName?: string;
            /** @description The aggregation function applied to the field (e.g., Sum, Count). */
            function?: string;
            /** @description The name of the object containing the field. */
            objectName?: string;
            /** @description The role of the field (e.g., Measure, Dimension). */
            role?: string;
            /** @description The type of the field. */
            type?: string;
        };
        /** @description Token information representation */
        "sfdc.unified.analytics.connect.api.output.TextWidgetInsertTokenRepresentation": {
            /** @description Label of the token */
            label?: string;
            /** @description Name of the token */
            name?: string;
        };
        /**
         * ParameterWidget
         * @description A set of style settings for a parameter widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description Output representation for font styling properties. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockFontRepresentation": {
            /** @description Font family name. */
            family?: string;
            /** @description Whether text is italic. */
            italic?: boolean;
            /** @description Font size in pixels. */
            size?: number;
            /** @description Whether text is underlined. */
            underline?: boolean;
            weight?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFontWeightType"];
        };
        /** @description Output representation for totals style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsCommonStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsCommonStyleRepresentation"];
        };
        /** @description Output representation for common banding style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBandingCommonStyleRepresentation": {
            application?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBandingApplicationStyleRepresentation"];
            /** @description The color for the banding common style. */
            color?: string;
        };
        /**
         * PaneDown
         * @description The pane-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneDownRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneDown`.
             * @enum {string}
             */
            type: "PaneDown";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * Container
         * @description A set of configuration parameters for a container widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetParametersRepresentation": {
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetStylesRepresentation"];
        };
        /** @description Forecast interval to representation. */
        "sfdc.unified.analytics.connect.api.output.VisualizationForecastToRepresentation": {
            forecastInterval?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastIntervalRepresentation"];
        };
        /**
         * @description The direction type of the Top N filter in the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTopNFilterInfoDirectionType": "Bottom" | "Top";
        /**
         * @description Granularity level of the forecast in the visualization's visual representation.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastGranularityType": "InferFromData";
        /**
         * Container
         * @description A set of configuration parameters for a container widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetParametersInputRepresentation": {
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetStylesInputRepresentation"];
        };
        /** @description A digest configuration for a user's subscription. */
        "sfdc.unified.analytics.connect.api.output.subscription.SubscriptionDigestConfigOutputRepresentation": {
            /** @description Specifies whether the subscription digest is enabled (`true`) or not (`false`). */
            isEnabled?: boolean;
            scheduleType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectSubscriptionScheduleTypeEnum"];
            /** @description The user ID. */
            userId?: string;
        };
        /**
         * Summary
         * @description A set of style settings for a summary widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetStylesRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description A dashboard custom view filter selection. */
        "sfdc.unified.analytics.connect.api.input.CustomViewFilterInputRepresentation": {
            details?: components["schemas"]["sfdc.unified.analytics.connect.api.input.FilterDetailsInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.DataSourceInputRepresentation"];
        };
        /** @description A batch of assets for a workspace. */
        "sfdc.unified.analytics.connect.api.input.workspace.WorkspaceAssetBatchInputRepresentation": {
            /** @description A list of workspace assets. */
            workspaceAssets?: components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceAssetInputRepresentation"][];
        };
        /** @description Input representation for data format in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationDataFormatInputRepresentation": {
            /** @description The template for the date format. */
            dateTemplate?: string;
            numberFormatInfo?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationNumberFormatInfoInputRepresentation"];
        };
        /** @description A collection of assets in a workspace in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetCollectionRepresentation": {
            /** @description The list of workspace assets being returned. */
            workspaceAssets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation"][];
        };
        /** @description A reference to an asset by its API name and type. */
        "sfdc.unified.analytics.dependents.connect.api.input.AssetReferenceInputRepresentation": {
            /** @description Required. The API (developer) name of the asset. */
            assetApiName: string;
            /** @description Required. The type of the queried asset. */
            assetType: string;
        };
        /** @description Output representation for font style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation": {
            actionableHeaders?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            axisTickLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            ban?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontBanStyleRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            grandTotalLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            grandTotalValues?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            legendLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            markLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            subtotalLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
            subtotalValues?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation"];
        };
        /** @description The color palette for a visualization, such as a custom palette. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationPaletteInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.CustomPaletteInputRepresentation"];
        /** @description Output representation for mark color style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkColorStyleRepresentation": {
            /** @description The color for a mark. */
            color?: string;
        };
        /**
         * @description DataConnection Filter Keys
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.dataorchestration.DataConnectionFilterKeyEnum": "ConnectionStatuses" | "ConnectorTypes";
        /** @description Data alert content generated as a brief from one or more semantic data models, guided by a set of generation instructions. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertBriefContentInputRepresentation": {
            /** @description Ids or API names of the semantic data models used to generate the brief */
            modelApiNameOrIdList?: string[];
            /** @description Extensible JSON document of LLM instructions used to generate the brief */
            skillInstruction?: string;
        };
        /**
         * @description The type of interaction action.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectInteractionTypeEnum": "Filter" | "Flow" | "Navigate" | "Parameter" | "RecordAction";
        /** @description Specifies the field key for the date dimension used in the forecast visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationForecastDateDimensionFieldRepresentation": {
            /** @description The field key of dimension. */
            fieldKey?: string;
            granularity?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastGranularityType"];
        };
        /** @description Filter value input representation for filter actions in unified analytics */
        "sfdc.unified.analytics.connect.api.input.actions.FilterActionFilterInputRepresentation": {
            /** @description Token name for the filter */
            tokenName?: string;
        };
        /**
         * LessThan
         * @description A less-than filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationLessThanFilterInfoRepresentation": {
            /** @description The end value of the range category filters. */
            endValue?: unknown;
            /**
             * @description The shape of this object when `type` is `LessThan`.
             * @enum {string}
             */
            type: "LessThan";
            /** @description Whether to include nulls in the range category filters. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filters. */
            showOnlyRelevantValues?: boolean;
        };
        /** @description A visual specification for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationVisualSpecRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableLayoutVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationVisualSpecRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationVizqlLayoutVisualSpecRepresentation"];
        /** @description Output representation for data format in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationDataFormatRepresentation": {
            /** @description The template for the date format. */
            dateTemplate?: string;
            numberFormatInfo?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationNumberFormatInfoRepresentation"];
        };
        /** @description Input representation for custom range extent in a visualization axis. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAxisCustomRangeExtentInputRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisStyleRangeType"];
            /** @description Value for start/end in the custom axis range. */
            value?: unknown;
        };
        /** @description Output representation for legacy visual spec style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleRepresentation": {
            allHeaders?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAllHeadersStyleRepresentation"];
            /** @description The axis style for the visualization. */
            axis?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisStyleRepresentation"];
            };
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsStyleRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation"];
            /** @description The header style for the visualization. */
            headers?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderStyleRepresentation"];
            };
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            /** @description The mark style for the visualization. */
            marks?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
            };
            /** @description The pane style for the visualization. */
            panes?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationPaneStyleRepresentation"];
            };
            /** @description The reference line style for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineStyleRepresentation"];
            };
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            /** @description If the data placeholder column or cell should be visible. */
            showDataPlaceholder?: boolean;
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
        };
        /** @description Data alert content sourced from a specified metric, with an accompanying instruction for the alert message. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertMetricContentInputRepresentation": {
            /** @description input string instruction */
            instruction?: string;
            /** @description Id or API name of the semantic data model */
            modelApiNameOrId?: string[];
        };
        /**
         * SdmFieldToken
         * @description A semantic model field token text value in a tooltip text sequence.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationSdmFieldTokenTextValueInputRepresentation": {
            /** @description The API name of the SDM field. */
            apiName?: string;
            tokenType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSdmFieldTokenType"];
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTextStylePropertiesInputRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `SdmFieldToken`.
             * @enum {string}
             */
            type: "SdmFieldToken";
        };
        /**
         * Xy
         * @description An X/Y map position for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.XYMapPositionalInputRepresentation": {
            latitudeOrY?: components["schemas"]["sfdc.unified.analytics.connect.api.input.MapFieldReferenceInputRepresentation"];
            longitudeOrX?: components["schemas"]["sfdc.unified.analytics.connect.api.input.MapFieldReferenceInputRepresentation"];
            /**
             * @description The shape of `positional` when `type` is `Xy`.
             * @enum {string}
             */
            type: "Xy";
        };
        /**
         * TableAcrossThenDown
         * @description The table-across-then-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableAcrossThenDownInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableAcrossThenDown`.
             * @enum {string}
             */
            type: "TableAcrossThenDown";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * NavigationItem
         * @description A navigation item for a navigation widget, including its visibility, order, and target.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationItemInputRepresentation": {
            /** @description Whether the item is hidden */
            hidden?: boolean;
            /** @description Explicit position in navigation order */
            order?: number;
            /** @description Target identifier */
            target?: string;
            /** @description Type of navigation item */
            type?: string;
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Interaction
         * @description An interaction that triggers an action, such as a navigation or filter, in response to an event on a Tableau Next widget.
         */
        "sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation": {
            actionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInteractionTypeEnum"];
            eventType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInteractionEventTypeEnum"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.BaseInteractionParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Custom
         * @description A custom label for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineCustomLabelInputRepresentation": {
            /** @description Label text for the reference line label. */
            labelText?: string;
            /**
             * @description The shape of `label` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /** @description Representation of a buttonWidgetIcon. */
        "sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetIconRepresentation": {
            /** @description Icon name of button */
            name?: string;
            /** @description Icon position of button */
            position?: string;
        };
        /**
         * DownloadSubmetricAsset
         * @description A downloaded submetric, including its title, value, change, sentiment, goal status, and applied filters.
         */
        "sfdc.unified.analytics.connect.api.output.download.DownloadSubmetricAssetRepresentation": {
            metricBadge?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.MetricBadgeRepresentation"];
            /** @description text indicating what has changed in submetric data */
            metricChange?: string;
            /** @description user-facing label containing time range and other filters (if any) applied to this submetric */
            metricFilterSummary?: string;
            /** @description applied submetric filters */
            metricFilters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadFilterRepresentation"][];
            /** @description Label summarizing goal status and progress. */
            metricGoalStatus?: string;
            /** @description submetric insight text */
            metricInsight?: string;
            /** @description sentiment associated with metric change - 'positive', 'negative', 'neutral' */
            metricSentiment?: string;
            /** @description title of the submetric */
            metricTitle?: string;
            /** @description top level submetric value */
            metricValue?: string;
            /**
             * Format: Id
             * @description parentMetricId of the submetric
             */
            parentMetricId?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * Auto
         * @description An automatic axis range style for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationAutoAxisRangeStyleInputRepresentation": {
            /** @description Whether to include zero in the axis range. */
            includeZero?: boolean;
            /**
             * @description The shape of `range` when `type` is `Auto`.
             * @enum {string}
             */
            type: "Auto";
        };
        /**
         * RidgeRegression
         * @description A ridge-regression forecast model for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationRidgeRegressionForecastInputRepresentation": {
            /** @description Specifies the confidence level when bounds are requested. Defaults to 95, and can be customized to 90 or 99. */
            confidenceLevel?: number;
            /** @description The forecast dimension fields. */
            dimensionFields?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastDimensionFieldInputRepresentation"][];
            /** @description Replace null values in actual data with zeroes. */
            fillNullsWithZero?: boolean;
            /**
             * @description The shape of `forecasts` when `forecastModel` is `RidgeRegression`.
             * @enum {string}
             */
            forecastModel: "RidgeRegression";
            from?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastFromInputRepresentation"];
            /** @description Number of periods at the end of the data to ignore. */
            ignoreLastPeriods?: number;
            /** @description Whether to include bounds (blue shade area) for forecast. */
            includeBounds?: boolean;
            /** @description The measure field key. */
            measureFieldKey?: string;
            to?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastToInputRepresentation"];
        };
        /** @description Output representation for continuous color palette. */
        "sfdc.unified.analytics.connect.api.output.ContinuousPaletteRepresentation": {
            /** @description The end color for continuous assignment. */
            end?: string;
            /** @description The middle color for divergent continuous assignment. */
            middle?: string;
            /** @description The steps between the middle and end colors for divergent continuous assignment. */
            middleToEndSteps?: string[];
            /** @description The start color for continuous assignment. */
            start?: string;
            /** @description The steps between the start and end colors for sequential continuous assignment. */
            startToEndSteps?: string[];
            /** @description The steps between the start and end colors for divergent continuous assignment. */
            startToMiddleSteps?: string[];
        };
        /**
         * List
         * @description A set of configuration parameters for a list parameter widget in a Tableau Next dashboard, including its parameter name and label visibility.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetParametersInputRepresentation": {
            /** @description Show or hide parameter widget label. */
            isLabelHidden?: boolean;
            /** @description Parameter Name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * TopN
         * @description A top-N filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationTopNFilterInfoInputRepresentation": {
            /** @description The field to apply the top n filter on. */
            byField?: string;
            /** @description The count of the top n filter. */
            count?: number;
            direction?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTopNFilterInfoDirectionType"];
            /**
             * @description The shape of `filterInfos` when `type` is `TopN`.
             * @enum {string}
             */
            type: "TopN";
        };
        /**
         * @description Represents text widget parameter content representation in unified analytics
         *
         *     _Updated April 2026: added `rules`._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetContentParameterRepresentation": {
            attributes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetContentAttributeRepresentation"];
            /** @description Inserted text or token object in text widget */
            insert?: unknown;
            /**
             * @description List of CF rule names set for this content block
             *
             *     _Available April 2026 and later._
             */
            rules?: string[];
        };
        /** @description Output representation for a single field's BAN (big number) style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldBanStyleRepresentation": {
            fieldLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            format?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDataFormatRepresentation"];
        };
        /** @description A visual style for a dashboard in Tableau Next. */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardStyleInputRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.BackgroundParametersInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardStyleWidgetStyleInputRepresentation"];
        };
        /**
         * Name
         * @description A named map background style for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundStyleNameInputRepresentation": {
            /**
             * @description The shape of `style` when `type` is `Name`.
             * @enum {string}
             */
            type: "Name";
            /** @description The style value. */
            value?: string;
        };
        /** @description Input representation for continuous color palette. */
        "sfdc.unified.analytics.connect.api.input.ContinuousPaletteInputRepresentation": {
            /** @description The end color for continuous assignment. */
            end?: string;
            /** @description The middle color for divergent continuous assignment. */
            middle?: string;
            /** @description The steps between the middle and end colors for divergent continuous assignment. */
            middleToEndSteps?: string[];
            /** @description The start color for continuous assignment. */
            start?: string;
            /** @description The steps between the start and end colors for sequential continuous assignment. */
            startToEndSteps?: string[];
            /** @description The steps between the start and end colors for divergent continuous assignment. */
            startToMiddleSteps?: string[];
        };
        /**
         * *
         * @description The legacy, pre-layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationVisualSpecInputRepresentation": {
            /** @description The columns for the visualization. */
            columns?: string[];
            /** @description The forecasts for the visualization. */
            forecasts?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationForecastModelInputRepresentation"];
            };
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            /** @description The marks for the visualization. */
            marks?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
            };
            /** @description The measure values for the visualization. */
            measureValues?: string[];
            mode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationModeType"];
            /** @description The reference lines for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInputRepresentation"];
            };
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleInputRepresentation"];
            /**
             * @description The shape of `visualSpecification` when `layout` is `*`.
             * @enum {string}
             */
            layout: "*";
        };
        /** @description Output representation for tooltip container style. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTooltipContainerStyleRepresentation": {
            /** @description The background color of the tooltip container. */
            color?: string;
            /** @description The transparency of the tooltip container (0-100). */
            transparency?: number;
        };
        /**
         * Custom
         * @description A custom color palette for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.CustomPaletteInputRepresentation": {
            /** @description The list of colors in the palette. */
            colors?: string[];
            /**
             * @description The shape of `palette` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /** @description Input representation for header groups direction style in table visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderGroupsDirectionStyleInputRepresentation": {
            /** @description Whether repeated cells should be merged for group headers in the visualization. */
            mergeRepeatedCells?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsSizingStyleInputRepresentation"];
        };
        /**
         * Cell
         * @description The cell computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingCellInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `Cell`.
             * @enum {string}
             */
            type: "Cell";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * Blank
         * @description A blank background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationBlankBackgroundRepresentation": {
            /**
             * @description The shape of `background` when `type` is `Blank`.
             * @enum {string}
             */
            type: "Blank";
        };
        /**
         * @description The type of a text value segment in a tooltip text sequence.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextValueType": "PropertyToken" | "SdmFieldToken" | "Text" | "VisualizationFieldToken";
        /**
         * RelativeDate
         * @description A relative-date filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationRelativeDateFilterInfoInputRepresentation": {
            /** @description The anchor filter value to a relative date. */
            anchorRelativeDate?: string;
            beginPeriod?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRelativeDateFilterPeriodInputRepresentation"];
            endPeriod?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRelativeDateFilterPeriodInputRepresentation"];
            /** @description Whether to include null values. */
            includeNulls?: boolean;
            /** @description Whether the value uses the standard fiscal calendar. */
            isFiscal?: boolean;
            /**
             * @description The shape of `filterInfos` when `type` is `RelativeDate`.
             * @enum {string}
             */
            type: "RelativeDate";
        };
        /** @description Data alert content that delivers a generated Beacon Report, guided by a set of generation instructions. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertBeaconReportContentInputRepresentation": {
            /** @description Extensible JSON document of LLM instructions used to generate the Beacon Report */
            skillInstruction?: string;
        };
        /**
         * Map
         * @description A map-layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapLayoutVisualSpecRepresentation": {
            /** @description The location fields for the map visualization. */
            locations?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapMarksRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapStyleRepresentation"];
            layout: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType"];
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation"];
        };
        /**
         * @description The response status for a dashboard-related request, such as a widget or token request.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum": "DataAccessError" | "DataSourceError" | "Ok";
        /** @description Input representation for header mark encoding in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkEncodingInputRepresentation": {
            /** @description The reference to the field to which the header mark encoding is applied. */
            fieldKey?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkEncodingType"];
        };
        /**
         * AnalyticsContainer
         * @description A container widget for a Tableau Next dashboard, with a background sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.container.AnalyticsContainerWidgetInputRepresentation": {
            backgroundSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description A color assignment for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationColorAssignmentRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.ContinuousColorAssignmentRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.DiscreteColorAssignmentRepresentation"];
        /**
         * ListCard
         * @description Parameters for a filter widget displayed as a list card, including its filter option, label visibility, and title, value, and widget styles.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.ListCardFilterWidgetParametersRepresentation": {
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterOptionRepresentation"];
            /** @description property that shows or hides the label on a filter widget */
            isLabelHidden?: boolean;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterWidgetStylesRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * PaneDown
         * @description The pane-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneDownInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneDown`.
             * @enum {string}
             */
            type: "PaneDown";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description A Marketplace template. */
        "sfdc.unified.analytics.connect.api.input.marketplaceTemplateBuilder.MarketplaceTemplateInputRepresentation": {
            /** @description The source asset ID. */
            assetIdOrApiName?: string;
            assetType?: components["schemas"]["sfdc.app.framework.connect.api.enums.TemplateSubtypeEnum"];
            /** @description The template description. */
            description?: string;
            /** @description The label of the template. */
            label?: string;
            /** @description The template name. */
            name?: string;
            /** @description The tags associated with the template. */
            tags?: {
                [key: string]: string[];
            };
        };
        /**
         * AnalyticsParameter
         * @description A parameter widget for a Tableau Next dashboard, with initial values sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.AnalyticsParameterWidgetInputRepresentation": {
            initialValues?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterInitialValuesInputRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.BaseParameterWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description A filter applied to a field in an ad hoc calculation. */
        "sfdc.unified.analytics.connect.api.input.AdhocCalculationFilterInputRepresentation": {
            /** @description The field name to filter on. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            /** @description The single value to filter against. */
            value?: string;
            /** @description The multiple values to filter against. */
            values?: string[];
        };
        /** @description How a visualization field's table calculation is computed, such as across a pane or down a table. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldComputeUsingInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingCellInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneAcrossInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneAcrossThenDownInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneDownInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneDownThenAcrossInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableAcrossInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableAcrossThenDownInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableDownInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableDownThenAcrossInputRepresentation"];
        /** @description Represents flow action parameter's attribute representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.actions.FlowActionParameterAttributesRepresentation": {
            inputData?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.BaseFlowActionAttributeDataRepresentation"];
            /** @description Data type of the flow input variable. */
            inputDataType?: string;
        };
        /** @description A request to grant record access to users or roles. */
        "sfdc.unified.analytics.connect.api.input.share.SetupRecordAccessInputRepresentation": {
            /** @description The list of records shares. */
            accessRequestItems?: components["schemas"]["sfdc.unified.analytics.connect.api.input.share.SetupRecordAccessItemInputRepresentation"][];
            /** @description Specifies whether to send a notification to the recipients of the shared access (`true`) or not (`false`). */
            sendNotificationToRecipients?: boolean;
        };
        /** @description An asset associated with a workspace. */
        "sfdc.unified.analytics.connect.api.input.workspace.WorkspaceAssetInputRepresentation": {
            /** @description The ID of the asset. */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
            assetUsageType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetUsageTypeEnum"];
        };
        /** @description Metric option details inside metric widget parameters input representation */
        "sfdc.unified.analytics.connect.api.input.widgets.metric.MetricOptionInputRepresentation": {
            /** @description Metric layout option */
            layout?: {
                [key: string]: Record<string, never>;
            };
            /** @description Metric-card experience version captured for this widget (0 = legacy card, >= 1 = redesigned card). Snapshotted when the widget adopts the latest experience. */
            metricCardVersion?: number;
            /** @description SDM API name */
            sdmApiName?: string;
            /** @description SDM Id */
            sdmId?: string;
            /** @description Whether to show forecast on the metric widget */
            showForecast?: boolean;
        };
        /** @description A list of email recipients for a data alert, specified as user IDs or group IDs. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertEmailRecipientsInputRepresentation": {
            /** @description email addresses */
            recipients?: string[];
        };
        /**
         * TableAcross
         * @description The table-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableAcrossRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableAcross`.
             * @enum {string}
             */
            type: "TableAcross";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * RunningAvg
         * @description A running-average quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningAvgRepresentation": {
            /**
             * @description The shape of this object when `type` is `RunningAvg`.
             * @enum {string}
             */
            type: "RunningAvg";
        };
        /**
         * @description Input representation for unified filter measure criteria
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterMeasureCriteriaInputRepresentation": {
            unifiedFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterInputRepresentation"];
        };
        /**
         * @description The vertical text alignment type for the visualization stylesheet.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextVerticalAlignmentType": "Bottom" | "Middle" | "Top";
        /**
         * @description The palette type for discrete color assignment in a visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationPaletteType": "Custom";
        /**
         * @description Represents a measure and dimension conditional formatting rule for text widgets
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.ConditionalFormattingRuleRepresentation": {
            /** @description Array of buckets defining conditions and their corresponding styles */
            buckets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.ConditionalFormattingBucketRepresentation"][];
            /** @description Token ID representing the value that content will be formatted based on */
            formatBasedOn?: string;
            formattingType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FormattingTypeEnum"];
            /** @description Unique conditional formatting rule name that doesn't conflict with any other rules in the widget */
            name?: string;
        };
        /**
         * MovingAverage
         * @description A moving-average quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageInputRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingAverage`.
             * @enum {string}
             */
            type: "MovingAverage";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description Input representation for data value to color string mapping. */
        "sfdc.unified.analytics.connect.api.input.DataValueToColorStringInputRepresentation": {
            /** @description The color string. */
            color?: string;
            /** @description The data value. */
            value?: unknown;
        };
        /**
         * @description The type of a field in a visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldType": "Field" | "MapPosition" | "MeasureNames" | "MeasureValues";
        /** @description Output representation for map background domain in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundDomainRepresentation": {
            latitude?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBackgroundDomainRangeRepresentation"];
            longitude?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBackgroundDomainRangeRepresentation"];
        };
        /**
         * @description Type of agent LLM configuration metadata
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.agent.AgentLlmConfigurationTypeEnum": "ReasoningMode";
        /**
         * Image
         * @description A set of style settings for an image widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.image.ImageStylesInputRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description Output representation for BAN (big number) style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBanStyleRepresentation": {
            /** @description The BAN style per field, keyed by field key. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldBanStyleRepresentation"];
            };
        };
        /** @description A collection of Tableau Next visualizations. */
        "sfdc.unified.analytics.connect.api.output.VisualizationCollectionRepresentation": {
            /** @description The list of shallow representation of returned visualizations. */
            visualizations?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShallowRepresentation"][];
        };
        /**
         * RidgeRegression
         * @description A ridge-regression forecast model for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRidgeRegressionForecastRepresentation": {
            /** @description Specifies the confidence level when bounds are requested. Defaults to 95, and can be customized to 90 or 99. */
            confidenceLevel?: number;
            /** @description The attribute dimension field. */
            dimensionFields?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastDimensionFieldRepresentation"][];
            /** @description Replace null values in actual data with zeroes. */
            fillNullsWithZero?: boolean;
            /**
             * @description The shape of `forecasts` when `forecastModel` is `RidgeRegression`.
             * @enum {string}
             */
            forecastModel: "RidgeRegression";
            from?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastFromRepresentation"];
            /** @description Number of periods at the end of the data to ignore. */
            ignoreLastPeriods?: number;
            /** @description Whether to include bounds (blue shade area) for forecast. */
            includeBounds?: boolean;
            /** @description The attribute measure Field Key. */
            measureFieldKey?: string;
            to?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastToRepresentation"];
        };
        /** @description Input representation for BAN (big number) font style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFontBanStyleInputRepresentation": {
            /** @description The color for the BAN font. */
            color?: string;
        };
        /** @description Output representation for common totals style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTotalsCommonStyleRepresentation": {
            /** @description Custom label for grand total rows. */
            label?: string;
            position?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.visualization.visualSpec.ConnectVisualizationPositionType"];
        };
        /** @description A direction style for header rows in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderRowsDirectionStyleRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsSizingStyleRepresentation"];
        };
        /** @description Input representation for flow mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFlowMarkStylesInputRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
            };
            links?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
            nodes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
        };
        /** @description A share of setup object access granted to a user or group, including who created and last modified it. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordShareRepresentation": {
            accessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"];
            applicationDomain?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.ApplicationDomainEnum"];
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the share access for a record.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last Modified date of the share access for a record.
             */
            lastModifiedDate?: string;
            /** @description The user/Group ID. */
            userOrGroupId?: string;
        };
        /** @description A dashboard custom view parameter. */
        "sfdc.unified.analytics.connect.api.input.CustomViewParameterInputRepresentation": {
            /** @description The tODO-details is as blob for which structure is not yet final. */
            details?: unknown;
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.DataSourceInputRepresentation"];
        };
        /** @description Output representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarksRepresentation": {
            /** @description The mark specifications per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
            };
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkSpecificationRepresentation"];
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
        };
        /** @description A dashboard saved view. */
        "sfdc.unified.analytics.connect.api.input.DashboardCustomViewInputRepresentation": {
            /** @description The dashboard page UUID which is default for the view. */
            defaultPage?: string;
            /** @description Specifies whether the view is the default view for the user (`true`) or not the default view (`false`). */
            isDefault?: boolean;
            /** @description The label of dashboard view. */
            label?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardCustomViewType"];
            viewSpec?: components["schemas"]["sfdc.unified.analytics.connect.api.input.DashboardCustomViewSpecInputRepresentation"];
        };
        /**
         * In
         * @description An inclusion filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationInFilterInfoRepresentation": {
            /** @description Whether the filter is a custom filter. */
            isCustom?: boolean;
            /** @description Whether the filter should exclude the values. */
            isExcludes?: boolean;
            /** @description Whether to use all the values in the filter. */
            useAll?: boolean;
            /** @description The values for the filter. */
            values?: unknown[];
            /**
             * @description The shape of `filterInfos` when `type` is `In`.
             * @enum {string}
             */
            type: "In";
        };
        /** @description A view specification for a visualization, including its filters, sorts, totals, and style. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecRepresentation": {
            /** @description The advanced dimension filters (no filter logic supported). */
            advancedDimensionFilters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterRepresentation"][];
            aggregateFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterGroupRepresentation"];
            contextFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterGroupRepresentation"];
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterGroupRepresentation"];
            /** @description The filter information for the visualization. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterRepresentation"][];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsRepresentation"];
            sortOrders?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationSortOrdersRepresentation"];
            /** @description The sort information for the visualization. */
            sorts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationSortRepresentation"][];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecStyleRepresentation"];
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsRepresentation"];
            tableCalcFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterGroupRepresentation"];
        };
        /**
         * @description The mark type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkType": "Area" | "Bar" | "Circle" | "Donut" | "Line" | "Spatial" | "Square" | "Text";
        /** @description Map layout specific input representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapMarksInputRepresentation": {
            /** @description The mark fields. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
            };
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
        };
        /**
         * @description Different input types for flow action.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectFlowInputTypeEnum": "Dynamic" | "Static";
        /**
         * @description The type of map positional.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectMapPositionalType": "Geocoded" | "Xy";
        /** @description A schedule for a data alert that fires every N minutes, where N is the configured minute-level frequency. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertEveryNMinutesScheduleRepresentation": {
            /** @description run the evaluation every n minutes */
            minuteLevelFrequency?: number;
        };
        /**
         * Map
         * @description The Map layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapLayoutVisualSpecInputRepresentation": {
            /** @description The location fields for the map visualization. */
            locations?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapMarksInputRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapStyleInputRepresentation"];
            /**
             * @description The shape of this object when `layout` is `Map`.
             * @enum {string}
             */
            layout: "Map";
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation"];
        };
        /** @description Radial layout specific output representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialMarksRepresentation": {
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
        };
        /** @description A data source. */
        "sfdc.unified.analytics.connect.api.input.DataSourceInputRepresentation": {
            /** @description The ID of the data source. */
            id?: string;
            /** @description The name of the data source. */
            name?: string;
        };
        /** @description Navigate action destination representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.actions.BaseNavigateActionDestinationInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.DashboardNavigateActionDestinationInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.MetricDetailsNavigateActionDestinationInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.PageNavigateActionDestinationInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.UrlNavigateActionDestinationInputRepresentation"];
        /**
         * Shallow
         * @description A condensed visualization, used in collection responses.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationShallowRepresentation": {
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
            dataSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDataSourceRepresentation"];
            permissions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.PermissionsRepresentation"];
            sourceVersion?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation"];
            targetVersion?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation"];
            creationSource?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationCreationSource"];
            templateSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsTemplateSourceRepresentation"];
            workspace?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AssetReferenceRepresentation"];
        };
        /** @description Represents actions parameter representation in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.actions.BaseInteractionParametersRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.FilterActionParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.FlowActionParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.NavigateActionParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.ParameterActionParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.RecordActionParametersRepresentation"];
        /** @description Representation for the Receive Parameter Source */
        "sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation": {
            parameterMode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectReceiveFilterModeEnum"];
            /** @description The list of parameter publishers for this subscriber */
            publishers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ParameterPublisherRepresentation"][];
        };
        /** @description Representation of a metricOption. */
        "sfdc.unified.analytics.connect.api.output.widgets.metric.MetricOptionRepresentation": {
            /** @description Layout */
            layout?: {
                [key: string]: Record<string, never>;
            };
            /** @description Metric-card experience version captured for this widget (0 = legacy card, >= 1 = redesigned card). */
            metricCardVersion?: number;
            /** @description SDM API name */
            sdmApiName?: string;
            /** @description SDM Id */
            sdmId?: string;
            /** @description Whether to show forecast on the metric widget */
            showForecast?: boolean;
        };
        /** @description A group of dependent assets that share the same asset type. */
        "sfdc.unified.analytics.dependents.connect.api.output.AssetDependentGroupRepresentation": {
            /** @description The number of dependent assets in this group. */
            count?: number;
            dependentAssetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
            /** @description The dependent assets of this type. */
            dependents?: components["schemas"]["sfdc.unified.analytics.dependents.connect.api.output.AssetDependentRepresentation"][];
        };
        /**
         * Nulls
         * @description A null-value filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationNullsFilterInfoInputRepresentation": {
            nullType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNullsFilterType"];
            /**
             * @description The shape of `filterInfos` when `type` is `Nulls`.
             * @enum {string}
             */
            type: "Nulls";
        };
        /** @description A daily schedule for a data alert. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDailyScheduleInputRepresentation": Record<string, never>;
        /** @description Output representation for grid background domain in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationGridBackgroundDomainRepresentation": {
            x?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBackgroundDomainRangeRepresentation"];
            y?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBackgroundDomainRangeRepresentation"];
        };
        /**
         * Navigation
         * @description A set of configuration parameters for a navigation widget in a Tableau Next dashboard, including its navigation items, view type, and label styles.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetParametersInputRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"];
            labelStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetLabelStyleInputRepresentation"];
            /** @description Navigation items */
            navigationItems?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationItemInputRepresentation"][];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"];
            /** @description View type */
            viewType?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"];
        };
        /**
         * RankUnique
         * @description A unique-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankUniqueRepresentation": {
            /**
             * @description The shape of this object when `type` is `RankUnique`.
             * @enum {string}
             */
            type: "RankUnique";
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * @description Output representation for unified filter
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterRepresentation": {
            /** @description The list of fields for the unified filter */
            fields?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterFieldRepresentation"][];
            /** @description Whether to include null values in the filter results */
            includeNulls?: boolean;
            measureCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterMeasureCriteriaRepresentation"];
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            topBottomCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterTopBottomCriteriaRepresentation"];
            /** @description The values for the unified filter */
            values?: unknown[];
        };
        /**
         * RunningSum
         * @description A running-sum quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningSumRepresentation": {
            /**
             * @description The shape of this object when `type` is `RunningSum`.
             * @enum {string}
             */
            type: "RunningSum";
        };
        /**
         * @description Different usage types of assets in a workspace
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetUsageTypeEnum": "Created" | "Referenced";
        /** @description The dependents of a single queried asset, grouped by dependent type. */
        "sfdc.unified.analytics.dependents.connect.api.output.AssetDependentResultRepresentation": {
            asset?: components["schemas"]["sfdc.unified.analytics.dependents.connect.api.output.AssetReferenceRepresentation"];
            /** @description The dependent assets grouped by their asset type. */
            dependentsByType?: components["schemas"]["sfdc.unified.analytics.dependents.connect.api.output.AssetDependentGroupRepresentation"][];
            /** @description The total number of dependent assets across all groups. */
            totalCount?: number;
        };
        /**
         * WildCard
         * @description A wildcard filter for a visualization, matching field values against a text pattern.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationWildCardFilterInfoRepresentation": {
            /** @description Whether to include all values when the wild card filter is empty. */
            includeAllValuesWhenEmpty?: boolean;
            /** @description Whether the wild card filter is an exclude filter. */
            isExcludes?: boolean;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationWildCardFilterOperatorType"];
            /** @description The value of the wild card filter. */
            value?: string;
            /**
             * @description The shape of `filterInfos` when `type` is `WildCard`.
             * @enum {string}
             */
            type: "WildCard";
        };
        /** @description Output representation for mark range style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkRangeStyleRepresentation": {
            /** @description Whether the range is reversed. */
            reverse?: boolean;
        };
        /** @description Input representation for legends in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation": {
            /** @description Whether the legend is visible. */
            isVisible?: boolean;
            position?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLegendPositionType"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendTitleInputRepresentation"];
        };
        /**
         * @description The reference line scope type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineScopeType": "Cell" | "Pane" | "Table";
        /** @description A set of top/bottom filtering criteria for a unified filter. */
        "sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterTopBottomCriteriaRepresentation": {
            /** @description The expression to order by for top/bottom determination. */
            expression?: string;
            /** @description Specifies whether the filter selects the top values (`true`) or the bottom values (`false`). */
            isTop?: boolean;
            nullValuesPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectUnifiedSemanticFilterNullValuesPositionType"];
            /** @description The limit for top/bottom filtering. */
            topBottomLimit?: number;
        };
        /**
         * Computation
         * @description A computed value definition for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineComputationInfoRepresentation": {
            /** @description The field key of the reference line. */
            fieldKey?: string;
            function?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineFunctionType"];
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineLabelRepresentation"];
            /**
             * @description The shape of `endLine` when `valueType` is `Computation`.
             * @enum {string}
             */
            valueType: "Computation";
        };
        /**
         * DashboardLayoutPage
         * @description A page within a Tableau Next dashboard layout.
         */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutPageInputRepresentation": {
            /** @description Specifies whether navigation is hidden on the page (`true`) or shown (`false`). */
            navigationHidden?: boolean;
            /** @description The list of widgets in the page. */
            widgets?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardPageWidgetInputRepresentation"][];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /** @description Output representation for banding application style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBandingApplicationStyleRepresentation": {
            /** @description The banding level for the banding application. */
            level?: number;
            /** @description The banding size for the banding application. */
            size?: number;
        };
        /**
         * AnlytLightningComp
         * @description A set of configuration parameters for a Lightning component widget in a Tableau Next dashboard, including its fully qualified component name and dynamic properties.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningCompWidgetParametersInputRepresentation": {
            /** @description Fully qualified name (namespace__componentName) for Lightning Components */
            fullyQualifiedName?: string;
            /** @description Dynamic properties for the Lightning Component widget (supports String and Boolean values) */
            properties?: {
                [key: string]: Record<string, never>;
            };
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetStylesInputRepresentation"];
        };
        /** @description Output representation for mark style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation": {
            color?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkColorStyleRepresentation"];
            connector?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkConnectorStyleRepresentation"];
            /** @description Whether the mark opacity is managed automatically by the system. */
            isAutomaticOpacity?: boolean;
            /** @description Whether the size style is automatic. */
            isAutomaticSize?: boolean;
            /** @description Whether the marks are centered along their stacking axis. */
            isStackingAxisCentered?: boolean;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkLabelStyleRepresentation"];
            /** @description The opacity of the mark, as a percentage value from 0 (transparent) to 100 (opaque). */
            opacity?: number;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRangeStyleRepresentation"];
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkSizeStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipMarkStyleRepresentation"];
        };
        /** @description Output representation for data value to color string mapping. */
        "sfdc.unified.analytics.connect.api.output.DataValueToColorStringRepresentation": {
            /** @description The color string. */
            color?: string;
            /** @description The data value. */
            value?: unknown;
        };
        /** @description An ID of template created. */
        "sfdc.unified.analytics.connect.api.output.marketplaceTemplateBuilder.MarketplaceTemplateOutputRepresentation": {
            /** @description The ID of template. */
            id?: string;
        };
        /**
         * All
         * @description A style that labels all marks in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationAllMarksToLabelStyleInputRepresentation": {
            /**
             * @description The shape of `marksToLabel` when `type` is `All`.
             * @enum {string}
             */
            type: "All";
        };
        /** @description Input representation for common totals style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTotalsCommonStyleInputRepresentation": {
            /** @description Custom label for grand total rows. */
            label?: string;
            position?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.visualization.visualSpec.ConnectVisualizationPositionType"];
        };
        /**
         * @description The sort order in a visualization's view specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType": "Ascending" | "Descending";
        /** @description A request to follow an analytics asset. */
        "sfdc.unified.analytics.connect.api.input.follow.FollowInputRepresentation": {
            /** @description The asset ID. */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            followedTimeRange?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.UnifiedFilterInputRepresentation"];
            followerType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowerTypeEnum"];
            /** @description Specifies whether to show a forecast for the followed asset (`true`) or not (`false`); a null value is treated as `false`. */
            shouldShowForecast?: boolean;
        };
        /**
         * ListCard
         * @description A set of configuration parameters for a list-card parameter widget in a Tableau Next dashboard, including its parameter name and label visibility.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ListCardParameterWidgetParametersRepresentation": {
            /** @description property that shows or hides the label on a parameter widget */
            isLabelHidden?: boolean;
            /** @description parameter name parameter value for the parameter widget */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Input representation for header rows direction style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsDirectionStyleInputRepresentation": {
            /** @description Whether repeated cells should be merged for the visualization. */
            mergeRepeatedCells?: boolean;
            /** @description Whether the index should be shown for the visualization. */
            showIndex?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsSizingStyleInputRepresentation"];
        };
        /** @description Output representation for a style rule scope. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleScopeRepresentation": {
            /** @description Mark type to scope this rule to. */
            markType?: string;
        };
        /**
         * InputCard
         * @description A set of configuration parameters for an input-card parameter widget in a Tableau Next dashboard, including its parameter name, value source, and label visibility.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.InputCardParameterWidgetParametersInputRepresentation": {
            /** @description Show or hide parameter widget label. */
            isLabelHidden?: boolean;
            /** @description Parameter Name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation"];
            /** @description Source for values used in input, it can be used for eg: autocomplete */
            valueSource?: unknown;
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * HoltWinters
         * @description A Holt-Winters forecast model for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationHoltWintersForecastInputRepresentation": {
            /** @description Specifies the confidence level when bounds are requested. Defaults to 95, and can be customized to 90 or 99. */
            confidenceLevel?: number;
            /** @description The forecast dimension fields. */
            dimensionFields?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastDimensionFieldInputRepresentation"][];
            /** @description Replace null values in actual data with zeroes. */
            fillNullsWithZero?: boolean;
            /**
             * @description The shape of `forecasts` when `forecastModel` is `HoltWinters`.
             * @enum {string}
             */
            forecastModel: "HoltWinters";
            from?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastFromInputRepresentation"];
            /** @description Number of periods at the end of the data to ignore. */
            ignoreLastPeriods?: number;
            /** @description Whether to include bounds (blue shade area) for forecast. */
            includeBounds?: boolean;
            /** @description The measure field key. */
            measureFieldKey?: string;
            to?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastToInputRepresentation"];
        };
        /** @description Input representation for a relative date filter period in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationRelativeDateFilterPeriodInputRepresentation": {
            unit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationRelativeDateFilterPeriodUnitType"];
            /** @description The value offset for the relative date filter period. */
            value?: number;
        };
        /**
         * VisualizationView
         * @description A view of a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewInputRepresentation": {
            /** @description The master label. */
            label?: string;
            viewSpecification?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * @description The field to order results by in an assets query.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.AnalyticsAssetsQueryOrderByEnum": "AssetType" | "CreatedBy" | "CreatedDate" | "LastModifiedBy" | "LastModifiedDate" | "Name";
        /**
         * alphabetic
         * @description An alphabetic sort for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationAlphabeticSortRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            /**
             * @description The shape of `sorts` when `type` is `alphabetic`.
             * @enum {string}
             */
            type: "alphabetic";
        };
        /** @description A visualization bundle. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBundleRepresentation": {
            dataSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferencedDataSourceRepresentation"];
            visualization?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRepresentation"];
        };
        /** @description A single change entry from asset compare. */
        "sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareChangeOutputRepresentation": {
            /** @description The type of change for this block: added, deleted, or modified. */
            changeType?: string;
            /** @description The field-level changes for this block (the changed fields and their source/target values). */
            delta?: {
                [key: string]: Record<string, never>;
            };
            /** @description The block ID. */
            id?: string;
            /** @description The optional nested block diff payload. */
            nestedDiff?: components["schemas"]["sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareChangeOutputRepresentation"][];
            /** @description The block type. */
            type?: string;
        };
        /**
         * @description Input representation to publish asset to Marketplace
         *
         *     _Available April 2026 and later._
         */
        "sfdc.analyticsdashboard.connect.api.input.MarketplaceListingInputRepresentation": {
            /** @description The ID of asset */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.analyticsdashboard.connect.api.enums.MarketplaceAssetTypeEnum"];
            /** @description The version of the asset */
            assetVersion?: string;
        };
        /** @description Input representation for map mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapMarkStylesInputRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
            };
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
        };
        /**
         * @description The reference line function type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineFunctionType": "Avg" | "Max" | "Min" | "Now" | "Sum" | "Today";
        /** @description A collection of assets. */
        "sfdc.unified.analytics.connect.api.output.workspace.TypedAssetReferenceCollectionRepresentation": {
            /** @description The list of assets being returned. */
            assets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.TypedAssetReferenceRepresentation"][];
        };
        /** @description Representation of a parameterOption. */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation": {
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInputParameterDataTypeEnum"];
        };
        /**
         * SummaryWidget
         * @description A set of style settings for a summary widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetStylesInputRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * AnalyticsNavigation
         * @description A navigation widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.navigation.AnalyticsNavigationWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * GreaterThan
         * @description A greater-than filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationGreaterThanFilterInfoRepresentation": {
            /** @description The begin value of the range category filters. */
            beginValue?: unknown;
            /**
             * @description The shape of this object when `type` is `GreaterThan`.
             * @enum {string}
             */
            type: "GreaterThan";
            /** @description Whether to include nulls in the range category filters. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filters. */
            showOnlyRelevantValues?: boolean;
        };
        /** @description Output representation for mark-specific tooltip style. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTooltipMarkStyleRepresentation": {
            /** @description Custom text sequence for the tooltip. */
            customText?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationTooltipTextValueRepresentation"][];
            /** @description Whether to show actions in the tooltip. */
            showActions?: boolean;
        };
        /** @description Output representation for common field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation": {
            /** @description The background color for the field labels. */
            backgroundColor?: string;
            /** @description Whether the divider line should be shown. */
            showDividerLine?: boolean;
            /** @description Whether the field labels should be displayed. */
            showLabels?: boolean;
        };
        /** @description Output representation for map mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapMarkStylesRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
            };
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
        };
        /** @description Represents dashboard layout style representation in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutStyleRepresentation": {
            /** @description The background color in RGB. */
            backgroundColor?: string;
            /** @description The cell spacing Horizontal. */
            cellSpacingX?: number;
            /** @description The cell spacing Vertical. */
            cellSpacingY?: number;
            /** @description The gutter color in RGB. */
            gutterColor?: string;
        };
        /** @description A dashboard bundle response. */
        "sfdc.unified.analytics.connect.api.output.DashboardBundleRepresentation": {
            /** @description The referenced assets as map object in bundle response. */
            bundledAssets?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardBundleAssetRepresentation"];
            };
            /** @description Specifies whether the dashboard is loaded from cache (`true`) or not (`false`). */
            cached?: boolean;
            /** @description The tODO-dashboard metadata as blob once we will migrate old APIs to IDL then we mark it as DashboardRepresentation. */
            dashboard?: unknown;
            /** @description The time taken to start the execution of asset retrieval thread. */
            executionDelay?: {
                [key: string]: number;
            };
            /** @description The time taken to finish the execution of each asset thread. */
            executionTime?: {
                [key: string]: number;
            };
        };
        /**
         * @description The mark connector type of the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkConnectorType": "Origami";
        /**
         * WidgetDataSource
         * @description A data source for a Tableau Next dashboard widget, including its type and URL.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardDataSourceTypeEnum"];
            /** @description The URL of the widget data source. */
            url?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * Computation
         * @description A computed label for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineComputationLabelInputRepresentation": {
            /**
             * @description The shape of `label` when `type` is `Computation`.
             * @enum {string}
             */
            type: "Computation";
        };
        /** @description The grand totals configuration for a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTotalsInputRepresentation": {
            /** @description Specifies whether grand totals are shown for columns (`true`) or not shown (`false`). */
            columns?: boolean;
            /** @description Specifies whether grand totals are shown for rows (`true`) or not shown (`false`). */
            rows?: boolean;
        };
        /** @description Input representation for common field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation": {
            /** @description The background color for the field labels. */
            backgroundColor?: string;
            /** @description Whether the divider line should be shown. */
            showDividerLine?: boolean;
            /** @description Whether the field labels should be displayed. */
            showLabels?: boolean;
        };
        /** @description Input representation for common line style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationLineCommonStyleInputRepresentation": {
            /** @description The color for the line. */
            color?: string;
        };
        /** @description Receive Parameter Source Input Representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation": {
            parameterMode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectReceiveFilterModeEnum"];
            /** @description The list of parameter publishers for this subscriber */
            publishers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ParameterPublisherInputRepresentation"][];
        };
        /** @description Input representation for grid background domain in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationGridBackgroundDomainInputRepresentation": {
            x?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBackgroundDomainRangeInputRepresentation"];
            y?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBackgroundDomainRangeInputRepresentation"];
        };
        /** @description The top/bottom criteria for a unified filter. */
        "sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterTopBottomCriteriaInputRepresentation": {
            /** @description The expression to order by for top/bottom determination. */
            expression?: string;
            /** @description Specifies whether this is a top filter (`true`) or a bottom filter (`false`). */
            isTop?: boolean;
            nullValuesPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectUnifiedSemanticFilterNullValuesPositionType"];
            /** @description The limit for top/bottom filtering. */
            topBottomLimit?: number;
        };
        /** @description Output representation for flow field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFlowFieldLabelsStyleRepresentation": {
            levels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
        };
        /** @description Flow Actions variable input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.actions.BaseFlowActionAttributeDataInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.DynamicFlowActionAttributeDataInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.StaticFlowActionAttributeDataInputRepresentation"];
        /** @description A version number, expressed as major and minor components, for a Tableau Next asset. */
        "sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation": {
            /** @description The major version of the asset. */
            major?: number;
            /** @description The minor version of the asset. */
            minor?: number;
        };
        /**
         * DashboardLayout
         * @description A layout for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutInputRepresentation": {
            /** @description The number of Columns in the layout. */
            columnCount?: number;
            /** @description The maximum width of the layout in pixels. */
            maxWidth?: number;
            /** @description The pages in the layout. */
            pages?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutPageInputRepresentation"][];
            /** @description The grid row height of the layout in pixels. */
            rowHeight?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutStyleInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * @description Representation for unified filter measure criteria
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterMeasureCriteriaRepresentation": {
            unifiedFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterRepresentation"];
        };
        /**
         * @description The reference line value type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineValueType": "Computation" | "Value";
        /** @description A reference line for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceBandRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineRepresentation"];
        /** @description A single dependent asset resolved to navigable fields. */
        "sfdc.unified.analytics.dependents.connect.api.output.AssetDependentRepresentation": {
            /** @description The API (developer) name of the dependent asset. */
            assetApiName?: string;
            /** @description The navigable record ID of the dependent asset. */
            assetId?: string;
            /** @description The display label of the dependent asset. */
            assetLabel?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
        };
        /**
         * @description The position of null values in ordering for unified semantic filter top/bottom criteria.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectUnifiedSemanticFilterNullValuesPositionType": "NullsFirst" | "NullsLast" | "Unspecified";
        /**
         * RunningMin
         * @description A running-min quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningMinInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `RunningMin`.
             * @enum {string}
             */
            type: "RunningMin";
        };
        /**
         * @description The reference line type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineType": "Band" | "Line";
        /**
         * @description The negative value type for the number formats in the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoNegativeValuesType": "Auto" | "MinusAfterNumber" | "MinusAfterSuffix" | "MinusBeforeNumber" | "MinusBeforePrefix" | "Parenthesis";
        /** @description Input representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation": {
            /** @description The encoding properties of the mark. */
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkEncodingInputRepresentation"][];
            /** @description Whether the mark stack should be applied by default. */
            isAutomatic?: boolean;
            stack?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStackInputRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkType"];
        };
        /** @description Input representation for number format info in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationNumberFormatInfoInputRepresentation": {
            /** @description The number of decimal places. */
            decimalPlaces?: number;
            displayUnits?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoDisplayUnitType"];
            /** @description Whether to include the thousand separator. */
            includeThousandSeparator?: boolean;
            negativeValuesFormat?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoNegativeValuesType"];
            /** @description The prefix value. */
            prefix?: string;
            /** @description The suffix value. */
            suffix?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleNumberFormatType"];
        };
        /** @description Map field reference input representation. */
        "sfdc.unified.analytics.connect.api.input.MapFieldReferenceInputRepresentation": {
            /** @description The field name. */
            fieldName?: string;
            /** @description The object name. */
            objectName?: string;
        };
        /** @description A style for labeling marks in a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationMarksToLabelStyleRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAllMarksToLabelStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineEndsMarksToLabelStyleRepresentation"];
        /**
         * Table
         * @description A table-layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationTableLayoutVisualSpecRepresentation": {
            /** @description The groups for the visualization. */
            groups?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarksRepresentation"];
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableStyleRepresentation"];
            layout: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType"];
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation"];
        };
        /**
         * TableDown
         * @description The table-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableDownRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableDown`.
             * @enum {string}
             */
            type: "TableDown";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * AnalyticsWidget
         * @description A widget for a Tableau Next dashboard, including its actions, dynamic tokens, type, and response status.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.AnalyticsButtonWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.AnalyticsContainerWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.AnalyticsFilterWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.image.AnalyticsImageWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningCompWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.AnalyticsMetricWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.AnalyticsNavigationWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.AnalyticsParameterWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.summary.AnalyticsSummaryWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.AnalyticsTextWidgetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.visualization.AnalyticsVisualizationWidgetRepresentation"];
        /** @description An asset compare response payload. */
        "sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareOutputRepresentation": {
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.assetsBrowse.AnalyticsAssetsBrowseAssetTypeEnum"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareSideOutputRepresentation"];
            target?: components["schemas"]["sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareSideOutputRepresentation"];
        };
        /** @description An output object containing the result of the clone operation. */
        "sfdc.unified.analytics.clone.connect.api.output.AnalyticsAssetCloneResultRepresentation": {
            /** @description The list of dependent assets that were added as references (not cloned). */
            addedDependencies?: components["schemas"]["sfdc.unified.analytics.clone.connect.api.output.DependencyResultRepresentation"][];
            /** @description The developer name of the cloned asset. */
            clonedAssetDeveloperName?: string;
            /** @description The ID of the newly cloned asset. */
            clonedAssetId?: string;
            /** @description The label of the cloned asset. */
            clonedAssetLabel?: string;
            /** @description The type of the cloned asset. */
            clonedAssetType?: string;
            /** @description The list of dependent assets that were cloned. */
            clonedDependencies?: components["schemas"]["sfdc.unified.analytics.clone.connect.api.output.DependencyResultRepresentation"][];
            /** @description The any errors that occurred during the clone operation. */
            errors?: components["schemas"]["sfdc.unified.analytics.clone.connect.api.output.CloneErrorRepresentation"][];
            /** @description The status of the clone operation. */
            status?: string;
            /** @description The developer name of the target workspace, used for navigation. */
            targetWorkspaceDeveloperName?: string;
            /** @description The label of the target workspace. */
            targetWorkspaceLabel?: string;
        };
        /** @description A userOrGroup who a share is assigned to. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordShareUserOrGroupRepresentation": {
            /** @description The display Name. */
            displayName?: string;
            /** @description The email. */
            email?: string | null;
            /** @description The number of user members in the group. */
            groupMemberCount?: number | null;
            /** @description The ID of the User/Group. */
            id?: string;
            /**
             * Format: url
             * @description The Chatter profile photo of the user.
             */
            profilePhotoUrl?: string | null;
            /** @description The username. */
            username?: string | null;
        };
        /** @description A specification for a dashboard custom view, including its filters, parameters, and selections. */
        "sfdc.unified.analytics.connect.api.output.DashboardCustomViewSpecRepresentation": {
            /** @description The value is required. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomViewFilterRepresentation"][];
            /** @description The value is required. */
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomViewParameterRepresentation"][];
            /** @description The value is required. */
            selections?: components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomViewSelectionRepresentation"][];
        };
        /**
         * Dashboard
         * @description A navigation destination that targets a specific dashboard page in Tableau Next.
         */
        "sfdc.unified.analytics.connect.api.input.actions.DashboardNavigateActionDestinationInputRepresentation": {
            /** @description Destination pageName */
            pageName?: string;
            /** @description Destination target */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Dashboard`.
             * @enum {string}
             */
            type?: "Dashboard";
        };
        /**
         * AnalyticsParameter
         * @description A parameter widget for a Tableau Next dashboard, with initial values sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.AnalyticsParameterWidgetRepresentation": {
            initialValues?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterInitialValuesRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.BaseParameterWidgetParametersRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Input representation for line style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation": {
            axisLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineCommonStyleInputRepresentation"];
            fieldLabelDividerLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineCommonStyleInputRepresentation"];
            separatorLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineCommonStyleInputRepresentation"];
            zeroLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineCommonStyleInputRepresentation"];
        };
        /**
         * @description User Or Group Setup Record Share Input Representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.share.UserOrGroupSetupRecordShareInputRepresentation": {
            /** @description The setup object types to filter the request by */
            filterBySetupObjectType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectTypeEnum"][];
            /** @description The limit to use for paginated results */
            limit?: number;
            /** @description The offset to use for paginating the results */
            offset?: number;
            /** @description Search term to filter assets by label */
            searchTerm?: string;
            /** @description The ID of the user or group whose share information is being requested */
            userOrGroupId?: string;
        };
        /**
         * AnalyticsVisualization
         * @description A visualization widget for a Tableau Next dashboard, sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.visualization.AnalyticsVisualizationWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * @description The type of dynamic token.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsDynamicTokenTypeEnum": "Insights" | "Metric" | "Query" | "Reference";
        /** @description Input representation for axis styles in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAxisStylesInputRepresentation": {
            /** @description The axis styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisStyleInputRepresentation"];
            };
        };
        /** @description Single Microsoft Teams recipient for Data alerts. Contains user or group Id and type. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertMsTeamsRecipientInputRepresentation": {
            /** @description group or user Id */
            recipient?: string;
            recipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.MsTeamsRecipientTypeEnum"];
        };
        /**
         * Continuous
         * @description A continuous color assignment for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.ContinuousColorAssignmentInputRepresentation": {
            palette?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ContinuousPaletteInputRepresentation"];
            /**
             * @description The shape of `colors` when `type` is `Continuous`.
             * @enum {string}
             */
            type: "Continuous";
        };
        /**
         * Range
         * @description A range-based filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationRangeFilterInfoRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationGreaterThanFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLessThanFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRangeFilterInfoRepresentation"];
        /** @description A sizing style for header columns in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsSizingStyleRepresentation": {
            /** @description The height for each field in the header columns. */
            fieldHeight?: {
                [key: string]: number;
            };
            /**
             * Format: double
             * @description The height for the index column.
             */
            indexHeight?: number;
            /**
             * Format: double
             * @description The width of the header columns.
             */
            width?: number;
        };
        /**
         * AnalyticsSummary
         * @description A summary widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.summary.AnalyticsSummaryWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * TopN
         * @description A top-N filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationTopNFilterInfoRepresentation": {
            /** @description The field to apply the top n filter on. */
            byField?: string;
            /** @description The count of the top n filter. */
            count?: number;
            direction?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTopNFilterInfoDirectionType"];
            /**
             * @description The shape of `filterInfos` when `type` is `TopN`.
             * @enum {string}
             */
            type: "TopN";
        };
        /**
         * DownloadVisualizationWidgetAsset
         * @description A downloaded visualization widget, including the filters applied to it.
         */
        "sfdc.unified.analytics.connect.api.output.download.DownloadVisualizationWidgetAssetRepresentation": {
            /** @description user-facing label containing filters (if any) applied to this viz widget */
            filterSummary?: string;
            /** @description applied viz widget filters */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadFilterRepresentation"][];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * @description The mark size type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkSizeType": "Percentage" | "Pixel";
        /**
         * @description The position of null values in ordering for unified semantic filter top/bottom criteria
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.common.filters.ConnectUnifiedSemanticFilterNullValuesPositionType": "NullsFirst" | "NullsLast" | "Unspecified";
        /** @description Output representation for background domain range in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBackgroundDomainRangeRepresentation": {
            /**
             * Format: double
             * @description The maximum value of the domain.
             */
            max?: number;
            /**
             * Format: double
             * @description The minimum value of the domain.
             */
            min?: number;
        };
        /**
         * None
         * @description Hidden axis ticks for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationNoneAxisTicksInfoInputRepresentation": {
            /**
             * @description The shape of `majorTicks` when `type` is `None`.
             * @enum {string}
             */
            type: "None";
        };
        /** @description A daily schedule for a data alert. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertDailyScheduleRepresentation": Record<string, never>;
        /**
         * AnalyticsButton
         * @description A button widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.button.AnalyticsButtonWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Input representation for field label style for table layout in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTableFieldLabelsStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
        };
        /**
         * NavigationWidgetLabelStyle
         * @description A label style for a navigation widget, including its alignment and font size.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetLabelStyleInputRepresentation": {
            /** @description Horizontal alignment */
            alignmentX?: string;
            /** @description Vertical alignment */
            alignmentY?: string;
            /** @description Font size */
            fontSize?: number;
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Dashboard
         * @description A Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation": {
            backgroundSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            customConfig?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardCustomConfigRepresentation"];
            /** @description The custom views for this dashboard. */
            customViews?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"][] | null;
            defaultView?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"];
            /** @description The all grid layouts for this dashboard. */
            layouts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutRepresentation"][];
            permissions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.PermissionsRepresentation"];
            sourceVersion?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardStyleRepresentation"];
            templateSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsTemplateSourceRepresentation"];
            /**
             * Format: url
             * @description The URL to this dashboard.
             */
            url?: string;
            /** @description The widgets in the dashboard. */
            widgets?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetRepresentation"];
            };
            /** @description The ID of the workspace from which this dashboard originates. */
            workspaceIdOrApiName?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * @description The forecast model type used in the visualization's visual representation.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastModelType": "HoltWinters" | "RidgeRegression";
        /**
         * LessThan
         * @description A less-than filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationLessThanFilterInfoInputRepresentation": {
            /** @description The end value of the range category filter. */
            endValue?: unknown;
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFilterType"];
            /** @description Whether to include nulls in the range category filter. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filter. */
            showOnlyRelevantValues?: boolean;
        };
        /** @description Input representation for tooltip styles shared across all tooltip types in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation": {
            container?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipContainerStyleInputRepresentation"];
            /** @description Whether the tooltip is visible. */
            isVisible?: boolean;
        };
        /**
         * @description The reference line label type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineLabelType": "Computation" | "Custom" | "None" | "Value";
        /** @description Input representation for totals style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsCommonStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsCommonStyleInputRepresentation"];
        };
        /** @description A subMetric info representation in Tableau Next. */
        "sfdc.unified.analytics.connect.api.input.follow.SubMetricInfoInputRepresentation": {
            /** @description The filter Logic. */
            filterLogic?: string;
            /** @description The filters. */
            filters?: components["schemas"]["sfdc.semantic.authoring.connect.api.input.SemanticFilterInputRepresentation"][];
            /** @description The metric ID or Name. */
            metricIdOrApiName?: string;
            /** @description The model ID or Name. */
            modelIdOrApiName?: string;
            /** @description The subMetric ID. */
            subMetricId?: string;
            timeRange?: components["schemas"]["sfdc.semantic.authoring.connect.api.input.SemanticGoalDateRangeInputRepresentation"];
            unifiedFilter?: components["schemas"]["sfdc.semantic.authoring.connect.api.input.UnifiedFilterInputRepresentation"];
        };
        /** @description An update to apply to a Personal Org. */
        "sfdc.unified.analytics.connect.api.input.personalOrg.AnalyticsPersonalOrgInfoUpdateInputRepresentation": {
            /** @description The new free-form details for the Personal Org (not yet applied). */
            details?: string;
            /** @description The new display name for the Personal Org (not yet applied). */
            name?: string;
            /** @description The explicit owner usernames to add. */
            ownersToAdd?: string[];
            /** @description The explicit owner usernames to remove. */
            ownersToRemove?: string[];
            /** @description The full desired list of TabAdmin owner usernames; automated-process (cron) context only. */
            systemAddedOwners?: string[];
        };
        /** @description A dashboard custom view parameter. */
        "sfdc.unified.analytics.connect.api.output.CustomViewParameterRepresentation": {
            details?: components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomViewParameterDetailsRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DataSourceRepresentation"];
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
        };
        /**
         * Navigate
         * @description The parameters for a navigation action, including the destination, an optional field and label, and whether to carry over the current dashboard filters and parameters.
         */
        "sfdc.unified.analytics.connect.api.output.actions.NavigateActionParametersRepresentation": {
            destination?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.BaseNavigateActionDestinationRepresentation"];
            /** @description Field */
            field?: string;
            /** @description Whether to include current dashboard state (filters and parameters) during navigation */
            includeState?: boolean;
            /** @description Label */
            label?: string;
        };
        /** @description Output representation for header mark style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkStyleRepresentation": {
            color?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkColorStyleRepresentation"];
            connector?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkConnectorStyleRepresentation"];
            /** @description Whether the mark opacity is managed automatically by the system. */
            isAutomaticOpacity?: boolean;
            /** @description Whether the size style is automatic. */
            isAutomaticSize?: boolean;
            /** @description Whether the marks are centered along their stacking axis. */
            isStackingAxisCentered?: boolean;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkLabelStyleRepresentation"];
            /** @description The opacity of the mark, as a percentage value from 0 (transparent) to 100 (opaque). */
            opacity?: number;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRangeStyleRepresentation"];
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkSizeStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipMarkStyleRepresentation"];
        };
        /**
         * Computation
         * @description A computed value source for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineComputationInfoInputRepresentation": {
            /** @description The field key of the reference line. */
            fieldKey?: string;
            function?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineFunctionType"];
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineLabelInputRepresentation"];
            /**
             * @description The shape of `line` when `valueType` is `Computation`.
             * @enum {string}
             */
            valueType: "Computation";
        };
        /** @description Input representation for mark size range in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkSizeRangeInputRepresentation": {
            /** @description Whether the size is automatic (defaults to true). */
            isAutomatic?: boolean;
            /** @description The maximum value for the size range. */
            max?: number;
            /** @description The minimum value for the size range. */
            min?: number;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkSizeType"];
        };
        /**
         * WorkspaceAsset
         * @description A Tableau Next workspace asset.
         */
        "sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation": {
            /** @description The asset in the workspace. */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
            assetUsageType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetUsageTypeEnum"];
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the workspace association.
             */
            createdDate?: string;
            /**
             * Format: url
             * @description The URL to this workspace asset.
             */
            url?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * auto
         * @description An automatic range style for a visualization axis.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationAutoAxisRangeStyleRepresentation": {
            /** @description Whether to include zero in the axis range. */
            includeZero?: boolean;
            /**
             * @description The shape of `range` when `type` is `auto`.
             * @enum {string}
             */
            type: "auto";
        };
        /** @description Representation for legend title in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationLegendTitleRepresentation": {
            /** @description Whether the legend title is visible. */
            isVisible?: boolean;
            /** @description The title text for the legend. */
            titleText?: string;
        };
        /**
         * Vizql
         * @description The style for a VizQL-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationVizqlStyleInputRepresentation": {
            axis?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisStylesInputRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsStyleInputRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationVizqlStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAllHeadersStyleInputRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStylesInputRepresentation"];
            /** @description The reference line styles for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineStyleInputRepresentation"];
            };
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            /** @description Whether to show data placeholder. */
            showDataPlaceholder?: boolean;
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation"];
        };
        /**
         * @description DataTransform Last Run Time Range
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.dataorchestration.DataTransformLastRunTimeRangeEnum": "Last120Days" | "Last1Hour" | "Last24Hours" | "Last30Days" | "Last7Days" | "Last90Days";
        /**
         * LineEnds
         * @description A style that labels marks at the ends of lines in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationLineEndsMarkToLabelStyleInputRepresentation": {
            /** @description Whether to label the end of the line. */
            labelEnd?: boolean;
            /** @description Whether to label the start of the line. */
            labelStart?: boolean;
            /**
             * @description The shape of `marksToLabel` when `type` is `LineEnds`.
             * @enum {string}
             */
            type: "LineEnds";
        };
        /** @description A dashboard custom view. */
        "sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation": {
            /** @description The dashboard page UUID which is default for the view. */
            defaultPage?: string;
            /** @description The custom view ID. */
            id?: string;
            /** @description Specifies whether this is the default view for the user (`true`) or not (`false`). */
            isDefault?: boolean;
            /** @description The label of dashboard view. */
            label?: string;
            owner?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsAssetOwnerRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardCustomViewType"];
            viewSpec?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewSpecRepresentation"];
        };
        /** @description A request to update the settings for a followed analytics asset. */
        "sfdc.unified.analytics.connect.api.input.follow.UpdateFollowInputRepresentation": {
            /** @description The asset ID. */
            assetId?: string;
            followedTimeRange?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.UnifiedFilterInputRepresentation"];
            /** @description Specifies whether to show a forecast for the followed asset (`true`) or not (`false`); a null value is treated as `false`. */
            shouldShowForecast?: boolean;
            /** @description Specifies whether to update all followed assets for the follower (`true`) or only the specified asset (`false`). */
            updateAllAssets?: boolean;
        };
        /**
         * Parameter
         * @description The parameters for a parameter action, including the value to set and its source field and object.
         */
        "sfdc.unified.analytics.connect.api.output.actions.ParameterActionParametersRepresentation": {
            /** @description Parameter value */
            parameter?: unknown;
            /** @description Source field API name */
            sourceFieldAPIName?: string;
            /** @description Source object API name */
            sourceObjectAPIName?: string;
        };
        /** @description Output representation for a visualization stylesheet. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation": {
            /** @description Ordered list of style rules. */
            rules?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleRuleRepresentation"][];
        };
        /** @description A data lake object asset in data orchestration, including its connection and data stream. */
        "sfdc.unified.analytics.connect.api.output.dataorchestration.DataLakeObjectAssetOutputRepresentation": {
            connection?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dataorchestration.DataOrchestrationConnectionEnrichmentRepresentation"];
            datastream?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dataorchestration.DataOrchestrationDatastreamEnrichmentRepresentation"];
        };
        /** @description Represents a single Slack recipient for a data alert */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertSlackRecipientRepresentation": {
            /** @description Slack recipient id */
            recipient?: string;
            recipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.SlackRecipientTypeEnum"];
        };
        /**
         * Filter
         * @description The parameters for a filter action, including the filter to apply and its source field and object.
         */
        "sfdc.unified.analytics.connect.api.output.actions.FilterActionParametersRepresentation": {
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.FilterActionFilterRepresentation"];
            /** @description Source field API name */
            sourceFieldAPIName?: string;
            /** @description Source object API name */
            sourceObjectAPIName?: string;
        };
        /** @description Input representation for banding style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationBandingStyleInputRepresentation": {
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBandingCommonStyleInputRepresentation"];
        };
        /** @description A reference line value or computation source for a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInfoInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineComputationInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineValueInfoInputRepresentation"];
        /**
         * @description The reference line style type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineStyleType": "None" | "Solid";
        /**
         * @description The element visibility type for the visualization stylesheet.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleVisibilityType": "Hidden" | "Visible";
        /**
         * AnalyticsGroup
         * @description A Tableau Next group.
         */
        "sfdc.unified.analytics.connect.api.output.AnalyticsGroupRepresentation": {
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description Created date of the asset
             */
            createdDate?: string;
            /** @description The number of users in the group. */
            numGroupMembers?: number | null;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /** @description Metadata of the operator of a filter applied to a download asset */
        "sfdc.unified.analytics.connect.api.output.download.DownloadFilterOperatorRepresentation": {
            /** @description filter operator label */
            label?: string;
            /** @description filter operator enum name */
            name?: string;
        };
        /**
         * ContainerWidget
         * @description A set of style settings for a container widget in a Tableau Next dashboard, including its background.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetStylesInputRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.BackgroundParametersInputRepresentation"];
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * AnalyticsSummary
         * @description A summary widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.summary.AnalyticsSummaryWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description A collection of components installed as part of a package version. */
        "sfdc.analyticsdashboard.connect.api.output.PackageComponentCollectionRepresentation": {
            /** @description The list of components installed as part of the package version. */
            components?: components["schemas"]["sfdc.analyticsdashboard.connect.api.output.PackageComponentRepresentation"][];
            packageGeneration?: components["schemas"]["sfdc.analyticsdashboard.connect.api.enums.PackageGenerationEnum"];
            /** @description The ID of the package version. */
            packageVersionId?: string;
            /** @description The total number of components inside the package. */
            totalCount?: number;
        };
        /** @description Input representation for header style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderStyleInputRepresentation": {
            defaults?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationCommonStyleInputRepresentation"];
            /** @description The hidden values for the header. */
            hiddenValues?: string[];
            /** @description Whether the header is visible. */
            isVisible?: boolean;
            /** @description Whether to show missing values. */
            showMissingValues?: boolean;
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
        };
        /** @description The sort order for columns, rows, and fields in a table visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationSortOrdersInputRepresentation": {
            /** @description The column sort information for the table. */
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationByFieldSortInputRepresentation"][];
            /** @description Indicates the field level sorts. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationSortInputRepresentation"];
            };
            /** @description The row sort information for the table. */
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationByFieldSortInputRepresentation"][];
        };
        /**
         * @description The font weight type for the visualization stylesheet.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFontWeightType": "Bold" | "Normal";
        /**
         * @description Different selection types for flow dynamic action.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectDynamicFlowSelectionTypeEnum": "Result" | "Selection";
        /** @description A list of notification recipients for a data alert, specified as user or group IDs. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertNotificationRecipientsInputRepresentation": {
            /** @description group or user Ids */
            recipients?: string[];
        };
        /** @description Output representation for mark connector style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkConnectorStyleRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkConnectorType"];
        };
        /**
         * RunningMax
         * @description A running-max quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMaxRepresentation": {
            /**
             * @description The shape of this object when `type` is `RunningMax`.
             * @enum {string}
             */
            type: "RunningMax";
        };
        /** @description Represents the target for a metric details navigate action destination. */
        "sfdc.unified.analytics.connect.api.output.actions.MetricDetailsNavigateActionTarget": {
            /** @description Token name that references the metric. */
            tokenName?: string;
        };
        /**
         * Geocoded
         * @description A geocoded map position for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.GeocodedMapPositionalInputRepresentation": {
            geocoded?: components["schemas"]["sfdc.unified.analytics.connect.api.input.MapFieldReferenceInputRepresentation"];
            /**
             * @description The shape of `positional` when `type` is `Geocoded`.
             * @enum {string}
             */
            type: "Geocoded";
        };
        /**
         * BaseParameter
         * @description A set of configuration parameters for a parameter widget in a Tableau Next dashboard, including its parameter option and view type.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.BaseParameterWidgetParametersRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputCardParameterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListCardParameterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ToggleParameterWidgetParametersRepresentation"];
        /** @description A layout style for a dashboard in Tableau Next. */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutStyleInputRepresentation": {
            /** @description The background color in RGB. */
            backgroundColor?: string;
            /** @description The cell Spacing Horizontal. */
            cellSpacingX?: number;
            /** @description The cell Spacing Vertical. */
            cellSpacingY?: number;
            /** @description The gutter Color in RGB. */
            gutterColor?: string;
        };
        /** @description Output representation for mark styles collection in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkStylesRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
            };
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkStyleRepresentation"];
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
        };
        /**
         * Metric
         * @description A set of style settings for a metric widget in a Tableau Next dashboard, including its text color.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetStylesRepresentation": {
            /** @description Text color of all metric widget elements */
            textColor?: string;
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description Representation for the Receive Filter Source */
        "sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation": {
            filterMode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectReceiveFilterModeEnum"];
            /** @description The list of filter publishers for the receive filter source */
            publishers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.FilterPublisherRepresentation"][];
            /** @description The list of widgets to be filtered (or ignored) based on the filterMode. If the filterMode is 'Exclude' */
            widgetIds?: string[];
        };
        /**
         * Discrete
         * @description A discrete color assignment for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.DiscreteColorAssignmentRepresentation": {
            /** @description The mapping of data values to colors. */
            customColors?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DataValueToColorStringRepresentation"][];
            palette?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationPaletteRepresentation"];
            /**
             * @description The shape of `colors` when `type` is `Discrete`.
             * @enum {string}
             */
            type: "Discrete";
        };
        /** @description A map background style for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationMapBackgroundStyleRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundStyleNameRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundStyleUrlRepresentation"];
        /**
         * @description The viz element whose style can be targeted by a stylesheet rule's selector.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStylableElementType": "ActionableHeaderLabel" | "Axis" | "AxisLine" | "AxisTick" | "AxisTickLabel" | "AxisTitle" | "BanLabel" | "BanValue" | "BodyText" | "ColumnFieldLabel" | "ConfidenceBand" | "FieldLabel" | "FieldLabelBackground" | "FieldLabelDividerLine" | "FlowLink" | "FlowNode" | "Global" | "GrandTotalLabel" | "GrandTotalValue" | "GridLine" | "HeaderBackground" | "HeaderCell" | "HeaderLabel" | "Headings" | "Legend" | "LegendLabel" | "LegendTitle" | "LevelFieldLabel" | "LevelNodeLabel" | "LevelNodeValue" | "Mark" | "MarkLabel" | "Pane" | "ReferenceLine" | "ReferenceLineLabelBox" | "RowFieldLabel" | "Scene" | "SceneMargin" | "SeparatorLine" | "SubtotalLabel" | "SubtotalValue" | "TrendLine" | "VizLines" | "ZeroLine";
        /**
         * @description The color assignment type in a visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationColorAssignmentType": "Continuous" | "Discrete";
        /**
         * Vizql
         * @description A visual specification for a VizQL visualization layout, defined by its columns, rows, marks, and style.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationVizqlLayoutVisualSpecRepresentation": {
            /** @description The columns for the visualization. */
            columns?: string[];
            /** @description The forecasts for the visualization. */
            forecasts?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationForecastModelRepresentation"];
            };
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarksRepresentation"];
            /** @description The measure values for the visualization. */
            measureValues?: string[];
            /** @description The reference lines for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineRepresentation"];
            };
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationVizqlStyleRepresentation"];
            layout: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType"];
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation"];
        };
        /**
         * Filter
         * @description Styles for a filter widget.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.FilterWidgetStylesRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description A data transform asset in data orchestration, including its run frequency, last run status, and target object. */
        "sfdc.unified.analytics.connect.api.output.dataorchestration.DataTransformAssetOutputRepresentation": {
            /** @description Run frequency */
            frequency?: string;
            /** @description Last run status */
            lastRunStatus?: string;
            /**
             * Format: date-time
             * @description Last run time
             */
            lastRunTime?: string;
            /** @description Target object name */
            targetObject?: string;
            /** @description Transform status */
            transformStatus?: string;
            /** @description Transform type */
            type?: string;
        };
        /**
         * @description The number format type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleNumberFormatType": "Currency" | "CurrencyCustom" | "CurrencyShort" | "Number" | "NumberCustom" | "NumberShort" | "Percentage" | "PercentageCustom" | "PercentageShort";
        /**
         * AnalyticsVisualization
         * @description A visualization widget for a Tableau Next dashboard, sourced from a data source and linked to a semantic model.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.visualization.AnalyticsVisualizationWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetParametersRepresentation"];
            /** @description Semantic Model Id */
            semanticModelId?: string;
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description The style for the column direction of view headers in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderColumnsDirectionStyleInputRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsSizingStyleInputRepresentation"];
        };
        /** @description A set of common style properties for a widget in a Tableau Next dashboard. */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardStyleWidgetStyleInputRepresentation": {
            /** @description The background color. */
            backgroundColor?: string;
            /** @description The border color. */
            borderColor?: string;
            /** @description The border edges. */
            borderEdges?: string[];
            /** @description The border radius. */
            borderRadius?: number;
            /** @description The border width. */
            borderWidth?: number;
        };
        /** @description Input representation for date info in axis ticks of a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAxisTicksDateInfoInputRepresentation": {
            /** @description Whether to show only date axis boundary ticks. */
            showOnlyDateBoundary?: boolean;
            unit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisTicksDateUnitType"];
        };
        /**
         * ListFilter
         * @description A text style for a list filter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation": {
            /** @description Font color as a hex string */
            fontColor?: string;
            /** @description Font size in pixels */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting) */
            textStyle?: string[];
        };
        /** @description A unified filter. */
        "sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterRepresentation": {
            /** @description The list of fields for the unified filter. */
            fields?: components["schemas"]["sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterFieldRepresentation"][];
            /** @description Specifies whether to include null values in the filter results (`true`) or not (`false`). */
            includeNulls?: boolean;
            measureCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterMeasureCriteriaRepresentation"];
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            topBottomCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterTopBottomCriteriaRepresentation"];
            /** @description The values for the unified filter. */
            values?: unknown[];
        };
        /**
         * @description The data source type of the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationDataSourceType": "SemanticModel";
        /**
         * @description Enum for different insight types
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.input.dataAlert.InsightTypeEnum": "Forecast" | "GoalProgress" | "PaceToGoal" | "Popc" | "RecordLevelOutliers" | "RiskyMonopoly" | "Threshold" | "Unspecified" | "UnusualChange";
        /** @description Representation for mark encoding in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkEncodingRepresentation": {
            /** @description The reference to the field to which the mark is applied. */
            fieldKey?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkEncodingType"];
        };
        /** @description A collection of Tableau Next workspaces. */
        "sfdc.unified.analytics.connect.api.output.workspace.WorkspaceCollectionRepresentation": {
            /** @description The list of workspaces being returned. */
            workspaces?: components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation"][];
        };
        /** @description A sort for a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationSortInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAlphabeticSortInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSortInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationNestedSortInputRepresentation"];
        /** @description Input representation for reference line style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineStyleInputRepresentation": {
            /** @description Color to fill above the line when the reference line is of type line. */
            fillAboveColor?: string;
            /** @description Color to fill below the line when the reference line is of type line. */
            fillBelowColor?: string;
            /** @description Color to fill between the lines when the reference line is of type band. */
            fillColor?: string;
            /** @description The visibility of the reference line in the visualization. */
            isVisible?: boolean;
            labelAlignment?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineLabelAlignmentInputRepresentation"];
            lineFormat?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineFormatInputRepresentation"];
        };
        /**
         * @description Grantee Type
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.GranteeTypeEnum": "Group" | "User";
        /**
         * @description The type of sort in a visualization's view specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortType": "Alphabetic" | "Field" | "Nested";
        /**
         * PercentDifference
         * @description A percent-difference quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcPercentDifferenceInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `PercentDifference`.
             * @enum {string}
             */
            type: "PercentDifference";
        };
        /** @description A collection of Personal Orgs with their owners and system-added owners. */
        "sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoCollectionRepresentation": {
            /** @description The list of Personal Orgs. */
            personalOrgs?: components["schemas"]["sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoRepresentation"][];
        };
        /**
         * @description The style fit type of the visualization's table visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTableStyleFitType": "RowHeadersWidth" | "Standard";
        /**
         * @description Order by enum for Setup Record Share APIs
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.share.SetupRecordShareOrderByEnum": "CreatedDate" | "UserDisplayName";
        /** @description Input representation for legend title in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationLegendTitleInputRepresentation": {
            /** @description Whether the legend title is visible. */
            isVisible?: boolean;
            /** @description The title text for the legend. */
            titleText?: string;
        };
        /**
         * @description The sort direction for the results of an assets query.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.AnalyticsAssetsQuerySortDirectionEnum": "Ascending" | "Descending";
        /**
         * Fixed
         * @description A fixed tick configuration for a visualization axis, with a defined interval and origin.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFixedAxisTicksInfoRepresentation": {
            dateInfo?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisTicksDateInfoRepresentation"];
            /** @description The interval at which axis ticks are shown. */
            interval?: number;
            /** @description The origin of the axis ticks. */
            origin?: string;
            /**
             * @description The shape of `majorTicks` when `type` is `Fixed`.
             * @enum {string}
             */
            type: "Fixed";
        };
        /**
         * Flow
         * @description A flow-layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFlowLayoutVisualSpecRepresentation": {
            /** @description The levels for the flow layout visualization. */
            levels?: string[];
            /** @description The link for the flow layout visualization. */
            link?: string;
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowMarksRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowStyleRepresentation"];
            layout: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType"];
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation"];
        };
        /** @description Data alert content sourced from a specified metric, with an accompanying instruction for generating the alert message. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertMetricContentRepresentation": {
            /** @description Instructions to generate notification content */
            instruction?: string;
            /** @description Id or API name of the semantic data model */
            modelApiNameOrId?: string[];
        };
        /** @description Input representation for mark stack in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkStackInputRepresentation": {
            /** @description Whether the mark stack should be applied by default. */
            isAutomatic?: boolean;
            /** @description Whether the mark stack should be stacked. */
            isStacked?: boolean;
        };
        /** @description Followed asset input representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.input.follow.FollowedAssetInputRepresentation": {
            /** @description Returned assets orderBy parameter value */
            assetsOrderBy?: string;
            followedAssetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            /** @description Follower ID */
            followerId?: string;
            /** @description Limit parameter value */
            limit?: number;
            /** @description Offset parameter value */
            offset?: number;
            /** @description Returned assets sortOrder parameter value */
            sortOrder?: string;
        };
        /** @description A per-side diff output for asset compare. */
        "sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareSideOutputRepresentation": {
            /** @description The asset api name for this side. */
            assetApiName?: string;
            /** @description The structured list of block diffs. */
            diff?: components["schemas"]["sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareChangeOutputRepresentation"][];
        };
        /**
         * @description The style type of the visualization map background.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMapBackgroundStyleType": "Name" | "Url";
        /** @description An ad-hoc calculation for a visualization field. */
        "sfdc.unified.analytics.connect.api.output.AdHocCalculationRepresentation": {
            aggregationType?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticAggregationTypeEnum"];
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDataType"];
            /** @description The decimal place (measure only). */
            decimalPlace?: number;
            /** @description The description. */
            description?: string;
            displayCategory?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDisplayCategoryType"];
            /** @description The ad-hoc calculation expression. */
            expression?: string;
            /** @description The filters applied to the calculation. */
            filters?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticFilterOutputRepresentation"][];
            /** @description The label. */
            label?: string;
            level?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticCalculatedFieldLevelEnum"];
            sentiment?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SentimentTypeEnum"];
            /** @description Specifies whether to treat null values as zero for the measure (`true`) or not (`false`). */
            shouldTreatNullsAsZeros?: boolean;
        };
        /** @description Representation for insert token operation */
        "sfdc.unified.analytics.connect.api.output.TextWidgetInsertRepresentation": {
            token?: components["schemas"]["sfdc.unified.analytics.connect.api.output.TextWidgetInsertTokenRepresentation"];
        };
        /**
         * Value
         * @description A fixed-value definition for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineValueInfoRepresentation": {
            /** @description The value of the reference line. */
            value?: unknown;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineLabelRepresentation"];
            /**
             * @description The shape of `endLine` when `valueType` is `Value`.
             * @enum {string}
             */
            valueType: "Value";
        };
        /**
         * @description Enum for measure conditional formatting types.
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.FormattingTypeEnum": "SingleColor";
        /** @description Input representation for mark label style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkLabelStyleInputRepresentation": {
            /** @description Whether labels can overlap. */
            canOverlapLabels?: boolean;
            marksToLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationMarksToLabelStyleInputRepresentation"];
            /** @description Whether to show mark labels. */
            showMarkLabels?: boolean;
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
        };
        /**
         * @description Visualization capture mode for the Image API
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.VizCaptureModeEnum": "Default" | "HeadlessCapture" | "HtmlBundleCapture";
        /**
         * TableDownThenAcross
         * @description The table-down-then-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableDownThenAcrossInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableDownThenAcross`.
             * @enum {string}
             */
            type: "TableDownThenAcross";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description Output representation for field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
        };
        /**
         * @description DataLakeObject Filter Keys
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.dataorchestration.DataLakeObjectFilterKeyEnum": "ConnectionNames" | "ConnectorTypes" | "DloStatuses" | "LastRefreshStatuses";
        /**
         * AnalyticsFilter
         * @description A filter widget, with initial values, parameters, and a data source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.AnalyticsFilterWidgetRepresentation": {
            initialValues?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterInitialValuesRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.BaseFilterWidgetParametersRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description A result of creating or updating the mirrored AnalyticsPersonalOrgInfo record in a Personal Org. */
        "sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoSyncResultRepresentation": {
            /** @description The PO-side AnalyticsPersonalOrgInfo record ID that was created or updated. */
            id?: string;
            /** @description Specifies whether the record was successfully created or updated in the personal org (`true`) or not (`false`). */
            success?: boolean;
        };
        /** @description A grand-totals configuration for a visualization table. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTotalsRepresentation": {
            /** @description Specifies whether to show grand totals for columns (`true`) or not (`false`). */
            columns?: boolean;
            /** @description Specifies whether to show grand totals for rows (`true`) or not (`false`). */
            rows?: boolean;
        };
        /** @description Flow action parameters attribute input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.actions.FlowActionParameterAttributesInputRepresentation": {
            inputData?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.BaseFlowActionAttributeDataInputRepresentation"];
            /** @description Data type of the flow input attribute. */
            inputDataType?: string;
        };
        /** @description Input representation for dual axis style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationDualAxisStyleInputRepresentation": {
            synchronization?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisSynchronizationType"];
        };
        /**
         * Range
         * @description A range filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationRangeFilterInfoInputRepresentation": {
            /** @description The begin value of the range category filter. */
            beginValue?: unknown;
            /** @description The end value of the range category filter. */
            endValue?: unknown;
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFilterType"];
            /** @description Whether to include nulls in the range category filter. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filter. */
            showOnlyRelevantValues?: boolean;
        };
        /**
         * OrderedQuickTableCalcRankModified
         * @description A modified-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankModifiedInputRepresentation": {
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType"];
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /** @description Input representation for axis ticks style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAxisTicksStyleInputRepresentation": {
            majorTicks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationAxisTicksInfoInputRepresentation"];
            minorTicks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationAxisTicksInfoInputRepresentation"];
        };
        /**
         * Vizql
         * @description The VizQL layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationVizqlLayoutVisualSpecInputRepresentation": {
            /** @description The columns for the visualization. */
            columns?: string[];
            /** @description The forecasts for the visualization. */
            forecasts?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationForecastModelInputRepresentation"];
            };
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarksInputRepresentation"];
            /** @description The measure values for the visualization. */
            measureValues?: string[];
            /** @description The reference lines for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInputRepresentation"];
            };
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationVizqlStyleInputRepresentation"];
            /**
             * @description The shape of this object when `layout` is `Vizql`.
             * @enum {string}
             */
            layout: "Vizql";
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation"];
        };
        /** @description A list of notification recipients for a data alert. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertNotificationRecipientsRepresentation": {
            /** @description list of notification recipients */
            recipients?: string[];
        };
        /**
         * Table
         * @description The style for a Table-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationTableStyleInputRepresentation": {
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableFieldLabelsStyleInputRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTableStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableHeaderStyleInputRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStylesInputRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsStyleInputRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation"];
        };
        /**
         * PaneAcross
         * @description The pane-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneAcrossInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneAcross`.
             * @enum {string}
             */
            type: "PaneAcross";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description A record Access mapping for specific  UserOrGroup. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordAccessRepresentation": {
            accessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"];
            applicationDomain?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.ApplicationDomainEnum"];
            /**
             * Format: date-time
             * @description The date share was created.
             */
            createdDate?: string;
            targetRecord?: components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareTargetRecordRepresentation"];
            userOrGroup?: components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareUserOrGroupRepresentation"];
            /** @description The user/Group ID. */
            userOrGroupId?: string;
        };
        /** @description A background for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationBackgroundRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBlankBackgroundRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationGridBackgroundRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundRepresentation"];
        /**
         * @description Default style in a rendered toggle widget
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.ToggleDefaultStyleInputRepresentation": {
            /** @description Font color value on toggle widget */
            fontColor?: string;
            /** @description Text style on toggle widget */
            textStyle?: string[];
        };
        /**
         * Visualization
         * @description A Tableau Next visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationInputRepresentation": {
            dataSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationDataSourceInputRepresentation"];
            /** @description The visualization fields. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldInputRepresentation"];
            };
            /** @description The interactions of the visualization. */
            interactions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The master label. */
            label?: string;
            templateSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.AnalyticsTemplateSourceInputRepresentation"];
            view?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewInputRepresentation"];
            visualSpecification?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationVisualSpecInputRepresentation"];
            workspace?: components["schemas"]["sfdc.unified.analytics.connect.api.input.AssetReferenceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Url
         * @description A map background style defined by a URL for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundStyleUrlInputRepresentation": {
            /**
             * @description The shape of `style` when `type` is `Url`.
             * @enum {string}
             */
            type: "Url";
            /** @description The style value. */
            value?: string;
        };
        /** @description Represents a Personal Org with its owners and system-added owners. */
        "sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoRepresentation": {
            /** @description The username of the user who created the Personal Org. */
            createdBy?: string;
            /**
             * Format: date-time
             * @description The timestamp the Personal Org was created.
             */
            createdDate?: string;
            /** @description The free-form description of the Personal Org. */
            details?: string;
            /** @description The provisioning error code stamped on the Personal Org by the provisioning pipeline; null when there is no error. */
            errorCode?: string;
            /** @description The AnalyticsPersonalOrgInfo record ID of the Personal Org; null while the org is still being provisioned (no AnalyticsPersonalOrgInfo record exists yet) -- address it by signupRecordId until then. */
            id?: string;
            /** @description Specifies whether Tableau Next reuse is editable for the personal org (`true`) or not (`false`). */
            isAnalyticsReuseEditable?: boolean;
            /** @description The display name of the Personal Org. */
            name?: string;
            /** @description The usernames of the explicit owners of the Personal Org. */
            owners?: string[];
            /** @description The org ID (00D) of the Personal Org; null until the org has been provisioned. */
            personalOrgIdentifier?: string;
            /** @description The PersonalOrgInfo (signup) record ID of the Personal Org; always present. Accepted alongside ID on GET/PATCH. Retained during migration and to be retired once all consumers move to ID. */
            signupRecordId?: string;
            /** @description The provisioning status of the Personal Org. */
            status?: string;
            /** @description The usernames of the TabAdmin owners of the Personal Org (added by an automated process). */
            systemAddedOwners?: string[];
        };
        /**
         * Visualization
         * @description A set of style settings for a visualization widget in a Tableau Next dashboard, including its header background color, axis line color, and text color.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationStylesInputRepresentation": {
            /** @description Header background color of visualization widget field labels */
            headerBackgroundColor?: string;
            /** @description Line color of visualization widget axis lines */
            lineColor?: string;
            /** @description Text color of all visualization widget elements */
            textColor?: string;
            /** @description Text size of visualization widget */
            textSize?: number;
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * *
         * @description A legacy, pre-layout visual specification for a visualization, made up of columns, rows, marks, and style settings.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationVisualSpecRepresentation": {
            /** @description The columns for the visualization. */
            columns?: string[];
            /** @description The forecasts for the visualization. */
            forecasts?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationForecastModelRepresentation"];
            };
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            /** @description The marks for the visualization. */
            marks?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
            };
            /** @description The measure values for the visualization. */
            measureValues?: string[];
            mode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationModeType"];
            /** @description The reference lines for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineRepresentation"];
            };
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleRepresentation"];
            /**
             * @description The shape of `visualSpecification` when `layout` is `*`.
             * @enum {string}
             */
            layout: "*";
        };
        /**
         * Record
         * @description The parameters for a record action, including the record ID, the field to act on, and the Salesforce actions to trigger.
         */
        "sfdc.unified.analytics.connect.api.output.actions.RecordActionParametersRepresentation": {
            /** @description List of salesforce actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.RecordActionInfoRepresentation"][];
            field?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.RecordActionFieldRepresentation"];
            recordId?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.RecordActionFieldRepresentation"];
        };
        /**
         * @description Toggle widget default style representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.ToggleDefaultStyleRepresentation": {
            /** @description Font color value on toggle widget */
            fontColor?: string;
            /** @description Text style on toggle widget */
            textStyle?: string[];
        };
        /** @description A direction style for header groups in a visualization's view specification. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderGroupsDirectionStyleRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsSizingStyleRepresentation"];
        };
        /** @description Input representation for encoding styles in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation": {
            /** @description The encoding styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationPaneStyleInputRepresentation"];
            };
        };
        /**
         * @description Measure and dimension conditional formatting rule input representation for text widgets
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.ConditionalFormattingRuleInputRepresentation": {
            /** @description Array of buckets defining conditions and their corresponding styles */
            buckets?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.ConditionalFormattingBucketInputRepresentation"][];
            /** @description Token ID representing the value that content will be formatted based on */
            formatBasedOn?: string;
            formattingType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FormattingTypeEnum"];
            /** @description Unique conditional formatting rule name that doesn't conflict with any other rules in the widget */
            name?: string;
        };
        /**
         * Url
         * @description A navigation destination that opens an external URL.
         */
        "sfdc.unified.analytics.connect.api.output.actions.UrlNavigateActionDestinationRepresentation": {
            /** @description Navigate url. */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Url`.
             * @enum {string}
             */
            type?: "Url";
        };
        /**
         * Toggle
         * @description Parameters for a filter widget displayed as a toggle, including its filter option, default style, selected style, text style, and widget style.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.ToggleFilterWidgetParametersInputRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleDefaultStyleInputRepresentation"];
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterOptionInputRepresentation"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleSelectedStyleInputRepresentation"];
            textStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterWidgetStylesInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * Image
         * @description A set of style settings for an image widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetStylesRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * None
         * @description An axis-tick configuration for a visualization that displays no ticks.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationNoneAxisTicksInfoRepresentation": {
            /**
             * @description The shape of `majorTicks` when `type` is `None`.
             * @enum {string}
             */
            type: "None";
        };
        /** @description A computation method for a visualization field. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldComputeUsingRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingCellRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneAcrossRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneAcrossThenDownRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneDownRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneDownThenAcrossRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableAcrossRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableAcrossThenDownRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableDownRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableDownThenAcrossRepresentation"];
        /**
         * Line
         * @description A single reference line for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineRepresentation": {
            line?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineInfoRepresentation"];
            /** @description The field key of the reference line in the visualization. */
            fieldKey?: string;
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineScopeType"];
            /**
             * @description The shape of `referenceLines` when `type` is `Line`.
             * @enum {string}
             */
            type: "Line";
        };
        /** @description Abstract base input representation for style properties common to all visualization layout types. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationStyleInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationVizqlStyleInputRepresentation"];
        /** @description The wrapper of date dimension field. */
        "sfdc.unified.analytics.connect.api.input.VisualizationForecastDimensionFieldInputRepresentation": {
            dateDim?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastDateDimensionFieldInputRepresentation"];
        };
        /** @description Input representation for reference line label alignment in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineLabelAlignmentInputRepresentation": {
            horizontal?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineHorizontalAlignmentType"];
            vertical?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineVerticalAlignmentType"];
        };
        /** @description A payload to create or update the mirrored AnalyticsPersonalOrgInfo record in a Personal Org. */
        "sfdc.unified.analytics.connect.api.input.personalOrg.AnalyticsPersonalOrgInfoSyncInputRepresentation": {
            /** @description The free-form description of the Personal Org (copied verbatim from the Prod record). */
            details?: string;
            /** @description The developerName of the APOI record (copied verbatim from the Prod record). */
            developerName?: string;
            /** @description Specifies whether Tableau Next Analytics Reuse is editable within this Personal Org (`true`) or not editable (`false`). */
            isAnalyticsReuseEditable?: boolean;
            /** @description Specifies whether the Personal Org is marked as deleted, copied from the production record so the Personal Org copy stays in sync (`true`) or not marked as deleted (`false`). */
            isPersonalOrgDeleted?: boolean;
            /** @description The masterLabel of the APOI record (copied verbatim from the Prod record). */
            masterLabel?: string;
            /** @description The comma-separated list of 18-char production-org owner user IDs. */
            owners?: string;
            /** @description 18-char production-org user ID of the Personal Org creator (copied verbatim from the Prod record). */
            personalOrgCreatedBy?: string;
            /**
             * Format: date-time
             * @description The creation timestamp of the Personal Org (copied verbatim from the Prod record).
             */
            personalOrgCreatedDate?: string;
            /** @description The org ID (00D) of the Personal Org this record belongs to; used as the idempotency key. */
            personalOrgIdentifier?: string;
            /** @description The display name of the Personal Org. */
            personalOrgName?: string;
            /** @description The production-org user name of the Personal Org owner. */
            personalOrgOwnerUserName?: string;
            /** @description The provisioning status of the Personal Org (copied verbatim from the Prod record). */
            personalOrgStatus?: string;
            /** @description The comma-separated list of 18-char production-org user IDs added as owners by an automated process. */
            systemAddedOwners?: string;
        };
        /** @description An ad-hoc calculation for a visualization, computed from an expression with an aggregation type and display settings. */
        "sfdc.unified.analytics.connect.api.input.AdHocCalculationInputRepresentation": {
            aggregationType?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticAggregationTypeEnum"];
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDataType"];
            /** @description The decimal places for measurement calculations. */
            decimalPlace?: number;
            /** @description The ad-hoc calculation description. */
            description?: string;
            displayCategory?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDisplayCategoryType"];
            /** @description The ad-hoc calculation expression. */
            expression?: string;
            /** @description The filters applied to the calculation. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.AdhocCalculationFilterInputRepresentation"][];
            /** @description The ad-hoc calculation label. */
            label?: string;
            level?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticCalculatedFieldLevelEnum"];
            sentiment?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SentimentTypeEnum"];
            /** @description Specifies whether nulls are treated as zeros for the calculation, if it's a measurement (`true`), or not (`false`). */
            shouldTreatNullsAsZeros?: boolean;
        };
        /**
         * PaneAcrossThenDown
         * @description The pane-across-then-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneAcrossThenDownRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneAcrossThenDown`.
             * @enum {string}
             */
            type: "PaneAcrossThenDown";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description Widget common styles input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetStylesInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.image.ImageStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetStylesInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationStylesInputRepresentation"];
        /**
         * @description Toggle widget text style representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.ToggleTextStyleRepresentation": {
            /** @description Horizontal alignment */
            alignmentX?: string;
            /** @description Vertical alignment */
            alignmentY?: string;
            /** @description Font size */
            fontSize?: number;
        };
        /**
         * DashboardLayoutPage
         * @description A page within a Tableau Next dashboard layout.
         */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutPageRepresentation": {
            /** @description Specifies whether navigation is hidden on the page (`true`) or shown (`false`). */
            navigationHidden?: boolean;
            /** @description The list of widgets on the page. */
            widgets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardPageWidgetRepresentation"][];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * @description The reference line label's horizontal alignment type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineHorizontalAlignmentType": "Auto" | "Left" | "Right";
        /**
         * Flow
         * @description The parameters for a flow action, including the flow to run, its attributes, and whether to show a dialog.
         */
        "sfdc.unified.analytics.connect.api.output.actions.FlowActionParametersRepresentation": {
            /** @description Attributes of flow action parameters. */
            attributes?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.FlowActionParameterAttributesRepresentation"];
            };
            /** @description Flow name. */
            flowName?: string;
            /** @description Show dialog. */
            showDialog?: boolean;
        };
        /** @description Parameter option input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation": {
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInputParameterDataTypeEnum"];
        };
        /**
         * Range
         * @description A range, greater-than, or less-than filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationRangeFilterInfoInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationGreaterThanFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLessThanFilterInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRangeFilterInfoInputRepresentation"];
        /**
         * @description The role type of a field in a visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldRoleType": "Dimension" | "Measure";
        /**
         * Button
         * @description A set of style settings for a button widget in a Tableau Next dashboard, including its font color and text style.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation": {
            /** @description Font color of button */
            fontColor?: string;
            /** @description Text style of button */
            textStyle?: string[];
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description A visual specification for a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationVisualSpecInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationVizqlLayoutVisualSpecInputRepresentation"];
        /**
         * PercentOfTotal
         * @description A percent-of-total quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentOfTotalRepresentation": {
            /**
             * @description The shape of this object when `type` is `PercentOfTotal`.
             * @enum {string}
             */
            type: "PercentOfTotal";
        };
        /**
         * @description The marks to label type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarksToLabelType": "All" | "LineEnds";
        /**
         * GreaterThan
         * @description A greater-than filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationGreaterThanFilterInfoInputRepresentation": {
            /** @description The begin value of the range category filter. */
            beginValue?: unknown;
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFilterType"];
            /** @description Whether to include nulls in the range category filter. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filter. */
            showOnlyRelevantValues?: boolean;
        };
        /**
         * @description Followed asset ref input representation in unified analytics.
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.follow.FollowedAssetRefInputRepresentation": {
            assetsOrderBy?: components["schemas"]["sfdc.unified.analytics.connect.api.resource.follow.OrderBy"];
            followedAssetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            /** @description Follower ID */
            followerId?: string;
            /** @description Limit parameter value */
            limit?: number;
            /** @description Offset parameter value */
            offset?: number;
            sortOrder?: components["schemas"]["sfdc.unified.analytics.connect.api.resource.follow.SortOrder"];
        };
        /** @description A comparison between two Tableau Next assets. */
        "sfdc.unified.analytics.connect.api.input.assetsCompare.AnalyticsAssetsCompareInputRepresentation": {
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.assetsBrowse.AnalyticsAssetsBrowseAssetTypeEnum"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.assetsCompare.AssetCompareRefInputRepresentation"];
            target?: components["schemas"]["sfdc.unified.analytics.connect.api.input.assetsCompare.AssetCompareRefInputRepresentation"];
        };
        /** @description AnalyticsLibrary Image reference representation */
        "sfdc.unified.analytics.connect.api.output.analyticsLibrary.AnalyticsLibraryImageRepresentation": {
            /**
             * Format: url
             * @description Url path to retrieve image
             */
            url?: string;
        };
        /**
         * Url
         * @description A URL-based map background style for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundStyleUrlRepresentation": {
            /**
             * @description The shape of `style` when `type` is `Url`.
             * @enum {string}
             */
            type: "Url";
            /** @description The style value. */
            value?: string;
        };
        /** @description A value definition for a visualization reference line. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineInfoRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineComputationInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineValueInfoRepresentation"];
        /**
         * LineEnds
         * @description A style for labeling the ends of lines in a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationLineEndsMarksToLabelStyleRepresentation": {
            /** @description Whether to label the end of the line. */
            labelEnd?: boolean;
            /** @description Whether to label the start of the line. */
            labelStart?: boolean;
            /**
             * @description The shape of `marksToLabel` when `type` is `LineEnds`.
             * @enum {string}
             */
            type: "LineEnds";
        };
        /**
         * MovingSum
         * @description A moving-sum quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingSumRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingSum`.
             * @enum {string}
             */
            type: "MovingSum";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description Represents a filter value for filter actions in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.actions.FilterActionFilterRepresentation": {
            /** @description Token name for the filter */
            tokenName?: string;
        };
        /** @description Input representation for reference line format in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineFormatInputRepresentation": {
            /** @description The color of the reference line. */
            color?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineStyleType"];
        };
        /** @description Output representation for reference line style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineStyleRepresentation": {
            /** @description Color to fill above the line when the reference line is of type line. */
            fillAboveColor?: string;
            /** @description Color to fill below the line when the reference line is of type line. */
            fillBelowColor?: string;
            /** @description Color to fill between the lines when the reference line is of type band. */
            fillColor?: string;
            /** @description The visibility of the reference line in the visualization. */
            isVisible?: boolean;
            labelAlignment?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineLabelAlignmentRepresentation"];
            lineFormat?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineFormatRepresentation"];
        };
        /** @description A forecast model for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationForecastModelRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHoltWintersForecastRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRidgeRegressionForecastRepresentation"];
        /** @description Input representation for a visualization stylesheet. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation": {
            /** @description Ordered list of style rules. */
            rules?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleRuleInputRepresentation"][];
        };
        /** @description Represents the forecast 'from' date in a visualization context. */
        "sfdc.unified.analytics.connect.api.input.VisualizationForecastFromInputRepresentation": {
            predefinedDate?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastPredefinedDateType"];
        };
        /** @description A reference line for a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceBandInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineInputRepresentation"];
        /**
         * @description The data type of a visualization field.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDataType": "Boolean" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percentage" | "PhoneNumber" | "Text" | "Url";
        /** @description Input representation for a single stylesheet rule. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleRuleInputRepresentation": {
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleScopeInputRepresentation"];
            selector?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStylableElementType"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockInputRepresentation"];
        };
        /**
         * Discrete
         * @description A discrete color assignment for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.DiscreteColorAssignmentInputRepresentation": {
            /** @description The mapping of data values to colors. */
            customColors?: components["schemas"]["sfdc.unified.analytics.connect.api.input.DataValueToColorStringInputRepresentation"][];
            palette?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationPaletteInputRepresentation"];
            /**
             * @description The shape of `colors` when `type` is `Discrete`.
             * @enum {string}
             */
            type: "Discrete";
        };
        /** @description Represents the forecast 'from' date in a visualization context. */
        "sfdc.unified.analytics.connect.api.output.VisualizationForecastFromRepresentation": {
            predefinedDate?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastPredefinedDateType"];
        };
        /**
         * @description The kind of operator applied on filters in the view.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.FilterOperatorType": "Between" | "Contains" | "ContainsIgnoreCase" | "CurrentFiscalQuarter" | "CurrentFiscalQuarterToDate" | "CurrentFiscalYear" | "CurrentFiscalYearToDate" | "CurrentMonth" | "CurrentMonthToDate" | "CurrentQuarter" | "CurrentQuarterToDate" | "CurrentWeek" | "CurrentYear" | "CurrentYearToDate" | "DoesNotEndWith" | "DoesNotEndWithIgnoreCase" | "DoesNotEquals" | "DoesNotEqualsIgnoreCase" | "DoesNotStartWith" | "DoesNotStartWithIgnoreCase" | "EndsWidth" | "EndsWithIgnoreCase" | "Equals" | "EqualsIgnoreCase" | "GreaterThan" | "GreaterThanOrEqualTo" | "In" | "IsEmpty" | "IsNotEmpty" | "IsNotNull" | "IsNull" | "LastNDays" | "LastNHours" | "LessThan" | "LessThanOrEqualTo" | "NextFiscalQuarter" | "NextFiscalYear" | "NextMonth" | "NextNDays" | "NextQuarter" | "NextWeek" | "NextYear" | "NotContains" | "NotContainsIgnoreCase" | "NotIn" | "NotInValues" | "PreviousFiscalQuarter" | "PreviousFiscalQuarterToDate" | "PreviousFiscalYear" | "PreviousFiscalYearToDate" | "PreviousMonth" | "PreviousMonthToDate" | "PreviousQuarter" | "PreviousQuarterToDate" | "PreviousWeek" | "PreviousYear" | "PreviousYearToDate" | "StartsWith" | "StartsWithIgnoreCase" | "Tomorrow" | "Values" | "Yesterday";
        /**
         * AnalyticsImage
         * @description An image widget for a Tableau Next dashboard, sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.image.AnalyticsImageWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.image.ImageWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * Summary
         * @description A set of configuration parameters for a summary widget in a Tableau Next dashboard, including its generation specification and filter source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetParametersRepresentation": {
            /** @description Generation specification for the summary widget */
            generationSpec?: unknown;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.WidgetSummaryTypeEnum"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetStylesRepresentation"];
        };
        /** @description A tick configuration for a visualization axis. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationAxisTicksInfoRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAutoAxisTicksInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFixedAxisTicksInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationNoneAxisTicksInfoRepresentation"];
        /** @description A quick table calculation for a visualization field. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldQuickTableCalcInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMinInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingSumInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcPercentileInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankDenseInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankModifiedInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankUniqueInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcDifferenceInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcPercentDifferenceInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcPercentOfTotalInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningAvgInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningMaxInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningMinInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningSumInputRepresentation"];
        /** @description The source asset for an analytics template. */
        "sfdc.unified.analytics.connect.api.input.AnalyticsTemplateSourceInputRepresentation": {
            /** @description The template source asset name. */
            assetName?: string;
            /** @description The template source name. */
            name?: string;
        };
        /** @description A base object containing the ID, name, label, and description for a Tableau Next analytics asset. */
        "sfdc.unified.analytics.connect.api.input.BaseAnalyticsInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.AssetReferenceInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationDataSourceInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutPageInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardPageWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationItemInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetLabelStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceInputRepresentation"];
        /** @description Radial layout specific input representation for mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialMarkStylesInputRepresentation": {
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
        };
        /** @description Button widget icon symbol input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetIconInputRepresentation": {
            /** @description Button icon name */
            name?: string;
            /** @description Button icon position */
            position?: string;
        };
        /** @description A set of background image settings for a dashboard in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.common.BackgroundParametersRepresentation": {
            /** @description The horizontal alignment of the background image. */
            alignmentX?: string;
            /** @description The vertical alignment of the background image. */
            alignmentY?: string;
            imageScale?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ImageScaleTypeEnum"];
            /** @description The background image opacity (0-100). */
            opacity?: number;
        };
        /** @description A text value in a visualization tooltip. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationTooltipTextValueRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBasicTextValueRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldTokenTextValueRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationPropertyTokenTextValueRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationSdmFieldTokenTextValueRepresentation"];
        /** @description An operand for a data alert condition, specified as a literal value with an explicit data type. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertRawValueRepresentation": {
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDataTypeEnum"];
            /** @description Raw value */
            value?: string;
        };
        /** @description A dashboard custom view specification. */
        "sfdc.unified.analytics.connect.api.input.DashboardCustomViewSpecInputRepresentation": {
            /** @description The value is required. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.CustomViewFilterInputRepresentation"][];
            /** @description The value is required. */
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.CustomViewParameterInputRepresentation"][];
            /** @description The value is required. */
            selections?: components["schemas"]["sfdc.unified.analytics.connect.api.input.CustomViewSelectionInputRepresentation"][];
        };
        /**
         * Difference
         * @description A difference quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcDifferenceInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `Difference`.
             * @enum {string}
             */
            type: "Difference";
        };
        /**
         * Parameter
         * @description The parameters for a parameter action, including the value to set and its source field and object.
         */
        "sfdc.unified.analytics.connect.api.input.actions.ParameterActionParametersInputRepresentation": {
            /** @description Parameter value */
            parameter?: unknown;
            /** @description Source field API name */
            sourceFieldAPIName?: string;
            /** @description Source object API name */
            sourceObjectAPIName?: string;
        };
        /** @description A unique count of followers. */
        "sfdc.unified.analytics.connect.api.output.follow.UniqueFollowerCountRepresentation": {
            /** @description The unique count of followers. */
            uniqueFollowerCount?: number;
        };
        /** @description A weekly schedule for a data alert that fires on selected days of the week. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertWeeklyScheduleInputRepresentation": {
            /** @description days of the week to receive data alerts */
            daysOfWeek?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDayEnum"][];
        };
        /** @description A dashboard custom view filter selection. */
        "sfdc.unified.analytics.connect.api.output.CustomViewFilterRepresentation": {
            details?: components["schemas"]["sfdc.unified.analytics.connect.api.output.FilterDetailsRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DataSourceRepresentation"];
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
        };
        /**
         * @description Collection of Followed Asset Refs
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRefCollectionRepresentation": {
            /** @description List of followed assets being returned */
            followedAssetRefs?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRefRepresentation"][];
        };
        /**
         * AnalyticsMetric
         * @description A metric widget for a Tableau Next dashboard, sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.metric.AnalyticsMetricWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetParametersRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description A no-op receiver for a data alert, meaning notifications are not delivered anywhere. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertNoOpReceiversInputRepresentation": Record<string, never>;
        /**
         * Toggle
         * @description Parameters for a filter widget displayed as a toggle, including its filter option, default style, selected style, text style, and widget style.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.ToggleFilterWidgetParametersRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleDefaultStyleRepresentation"];
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterOptionRepresentation"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleSelectedStyleRepresentation"];
            textStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterWidgetStylesRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Input representation for common style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationCommonStyleInputRepresentation": {
            format?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationDataFormatInputRepresentation"];
        };
        /** @description A digest configuration for a subscription. */
        "sfdc.unified.analytics.connect.api.input.subscription.SubscriptionDigestConfigInputRepresentation": {
            /** @description Specifies whether the subscription digest is enabled (`true`) or not (`false`). */
            isEnabled?: boolean;
            scheduleType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectSubscriptionScheduleTypeEnum"];
        };
        /** @description Output representation for padding properties. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockPaddingRepresentation": {
            /** @description Bottom padding. */
            bottom?: number;
            /** @description Left padding. */
            left?: number;
            /** @description Right padding. */
            right?: number;
            /** @description Top padding. */
            top?: number;
        };
        /** @description Representation for table header styles in visualization with groups support. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTableHeaderStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsDirectionStyleRepresentation"];
            /** @description The field header styles for the visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderStyleRepresentation"];
            };
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderGroupsDirectionStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsDirectionStyleRepresentation"];
        };
        /**
         * AnalyticsWidgetDynamicToken
         * @description A dynamic token for a Tableau Next dashboard widget, resolved from a data source, with its type and resolution status.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation": {
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            /** @description The specification of the dynamic token. */
            tokenSpec?: unknown;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsDynamicTokenTypeEnum"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * ListParameter
         * @description A text style for a list parameter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation": {
            /** @description Font color as a hex string */
            fontColor?: string;
            /** @description Font size in pixels */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting) */
            textStyle?: string[];
        };
        /** @description The style for the group direction of view headers in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderGroupsDirectionStyleInputRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsSizingStyleInputRepresentation"];
        };
        /**
         * VisualizationFieldToken
         * @description A visualization field token text value in a tooltip text sequence.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldTokenTextValueInputRepresentation": {
            /** @description The field key identifying the visualization field. */
            fieldKey?: string;
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTextStylePropertiesInputRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `VisualizationFieldToken`.
             * @enum {string}
             */
            type: "VisualizationFieldToken";
        };
        /** @description A style configuration for headers in a visualization view. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecStyleRepresentation": {
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeadersStyleRepresentation"];
        };
        /** @description A visualization filter. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFilterRepresentation": {
            /** @description The field key for the filter. */
            fieldKey?: string;
            /** @description The list of field keys for the filter. */
            fieldKeys?: string[];
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterRepresentation"];
            /** @description The filters information for the visualization. */
            filterInfos?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationFilterInfoRepresentation"][];
            /** @description Specifies whether to include all values when the filter has no selections (`true`) or not (`false`). */
            includeAllValues?: boolean;
            /** @description Specifies whether the filter is a context filter (`true`) or not (`false`). */
            isContext?: boolean;
        };
        /**
         * @description The type of an SDM field token in a tooltip text sequence.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSdmFieldTokenType": "Parameter";
        /**
         * HoltWinters
         * @description A Holt-Winters forecast model for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationHoltWintersForecastRepresentation": {
            /** @description Specifies the confidence level when bounds are requested. Defaults to 95, and can be customized to 90 or 99. */
            confidenceLevel?: number;
            /** @description The attribute dimension field. */
            dimensionFields?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastDimensionFieldRepresentation"][];
            /** @description Replace null values in actual data with zeroes. */
            fillNullsWithZero?: boolean;
            /**
             * @description The shape of `forecasts` when `forecastModel` is `HoltWinters`.
             * @enum {string}
             */
            forecastModel: "HoltWinters";
            from?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastFromRepresentation"];
            /** @description Number of periods at the end of the data to ignore. */
            ignoreLastPeriods?: number;
            /** @description Whether to include bounds (blue shade area) for forecast. */
            includeBounds?: boolean;
            /** @description The attribute measure Field Key. */
            measureFieldKey?: string;
            to?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastToRepresentation"];
        };
        /** @description Represents dashboard style representation in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardStyleRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.BackgroundParametersRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardStyleWidgetStyleRepresentation"];
        };
        /** @description Input representation for text layout properties. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockTextInputRepresentation": {
            halign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextHorizontalAlignmentType"];
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
            valign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextVerticalAlignmentType"];
            /** @description Whether text wraps to multiple lines. */
            wrap?: boolean;
        };
        /** @description Single Slack recipient for Data alerts. Contains user or group Id and type. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertSlackRecipientInputRepresentation": {
            /** @description group or user Id */
            recipient?: string;
            recipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.SlackRecipientTypeEnum"];
        };
        /**
         * MovingMax
         * @description A moving-max quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingMax`.
             * @enum {string}
             */
            type: "MovingMax";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description The collection of dependent-asset results, one per queried asset. */
        "sfdc.unified.analytics.dependents.connect.api.output.AssetDependentCollectionRepresentation": {
            /** @description The one result per queried asset that could be resolved. */
            results?: components["schemas"]["sfdc.unified.analytics.dependents.connect.api.output.AssetDependentResultRepresentation"][];
        };
        /** @description Output representation for axis styles in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAxisStylesRepresentation": {
            /** @description The axis styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisStyleRepresentation"];
            };
        };
        /**
         * Alphabetic
         * @description An alphabetic sort for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationAlphabeticSortInputRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            /**
             * @description The shape of `fields` when `type` is `Alphabetic`.
             * @enum {string}
             */
            type: "Alphabetic";
        };
        /**
         * @description The null filter info type for the filters in the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNullsFilterType": "All" | "NonNull" | "Null";
        /** @description A set of measure criteria for a unified filter. */
        "sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterMeasureCriteriaRepresentation": {
            unifiedFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterRepresentation"];
        };
        /** @description A collection of Followed Assets. */
        "sfdc.unified.analytics.connect.api.output.follow.FollowedAssetCollectionRepresentation": {
            /** @description The list of followed assets being returned. */
            followedAssets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRepresentation"][];
        };
        /** @description Output representation for mark label style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkLabelStyleRepresentation": {
            /** @description Whether labels can overlap. */
            canOverlapLabels?: boolean;
            marksToLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationMarksToLabelStyleRepresentation"];
            /** @description Whether to show mark labels. */
            showMarkLabels?: boolean;
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
        };
        /**
         * Xy
         * @description An XY-coordinate map position for a visualization, defined by latitude/Y and longitude/X field references.
         */
        "sfdc.unified.analytics.connect.api.output.XYMapPositionalRepresentation": {
            latitudeOrY?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MapFieldReferenceRepresentation"];
            longitudeOrX?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MapFieldReferenceRepresentation"];
            /**
             * @description The shape of `positional` when `type` is `Xy`.
             * @enum {string}
             */
            type: "Xy";
        };
        /**
         * FilterWidget
         * @description Styles for a filter widget.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.FilterWidgetStylesInputRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * SemanticModel
         * @description A semantic-model data source referenced by a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationSemanticModelDataSourceRepresentation": {
            semanticModel?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticModelOutputRepresentation"];
            /**
             * @description The shape of `dataSource` when `type` is `SemanticModel`.
             * @enum {string}
             */
            type: "SemanticModel";
        };
        /** @description A list of email recipients for a data alert. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertEmailRecipientsRepresentation": {
            /** @description list of Email recipients */
            recipients?: string[];
        };
        /** @description The color assignment for a visualization, either continuous or discrete. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationColorAssignmentInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.ContinuousColorAssignmentInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.DiscreteColorAssignmentInputRepresentation"];
        /**
         * Static
         * @description A flow action variable with a fixed, static value.
         */
        "sfdc.unified.analytics.connect.api.input.actions.StaticFlowActionAttributeDataInputRepresentation": {
            /** @description Static Input attribute value */
            value?: string;
            inputType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectFlowInputTypeEnum"];
        };
        /**
         * Input
         * @description A set of configuration parameters for an input parameter widget in a Tableau Next dashboard, including its parameter name, value source, and label visibility.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetParametersInputRepresentation": {
            /** @description Show or hide parameter widget label. */
            isLabelHidden?: boolean;
            /** @description Parameter Name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation"];
            /** @description Source for values used in input, it can be used for eg: autocomplete */
            valueSource?: unknown;
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Represents widget common styles representation in Tableau Next. */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardStyleWidgetStyleRepresentation": {
            /** @description The back ground color. */
            backgroundColor?: string;
            /** @description The border color. */
            borderColor?: string;
            /** @description The border edges. */
            borderEdges?: string[];
            /** @description The border radius. */
            borderRadius?: number;
            /** @description The border width. */
            borderWidth?: number;
        };
        /**
         * @description Represents Lightning Component source representation in unified analytics
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningComponentSourceRepresentation": {
            /**
             * Format: Id
             * @description Lightning Component Bundle ID
             */
            id?: string;
            /** @description Lightning Component source label */
            label?: string;
            /** @description Lightning Component source name */
            name?: string;
            /** @description Lightning Component source namespace */
            namespace?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardDataSourceTypeEnum"];
        };
        /** @description Represents widget common styles representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetStylesRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetStylesRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetStylesRepresentation"];
        /**
         * @description Toggle widget selected style representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.ToggleSelectedStyleRepresentation": {
            /** @description Background color */
            backgroundColor?: string;
            /** @description Font color */
            fontColor?: string;
            /** @description Text style */
            textStyle?: string[];
        };
        /** @description Output representation for title style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation": {
            /** @description Whether the title of the visualization should be visible. */
            isVisible?: boolean;
            /** @description The title of the visualization. */
            titleText?: string;
        };
        /**
         * Dynamic
         * @description A dynamically resolved flow action variable that references a field on another widget.
         */
        "sfdc.unified.analytics.connect.api.output.actions.DynamicFlowActionAttributeDataRepresentation": {
            selectionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectDynamicFlowSelectionTypeEnum"];
            /** @description widget field of the widget where dynamic input variable would be referred to */
            widgetField?: string;
            /** @description widget id of the widget where dynamic input variable would be referred to */
            widgetId?: string;
            inputType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectFlowInputTypeEnum"];
        };
        /**
         * Difference
         * @description A difference quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcDifferenceRepresentation": {
            /**
             * @description The shape of this object when `type` is `Difference`.
             * @enum {string}
             */
            type: "Difference";
        };
        /**
         * Page
         * @description A navigation destination that targets a specific page within the current dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.actions.PageNavigateActionDestinationRepresentation": {
            /** @description Navigate to target */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Page`.
             * @enum {string}
             */
            type?: "Page";
        };
        /** @description A label for a reference line in a visualization. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineLabelInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineComputationLabelInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineCustomLabelInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineNoneLabelInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineValueLabelInputRepresentation"];
        /**
         * @description Measure and dimension conditional formatting bucket input representation for text widgets
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.ConditionalFormattingBucketInputRepresentation": {
            attributes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetContentAttributeInputRepresentation"];
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConditionalFormattingOperatorEnum"];
            /** @description The value(s) to compare against */
            value?: unknown[];
        };
        /**
         * Flow
         * @description The Flow layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFlowLayoutVisualSpecInputRepresentation": {
            /** @description The levels for the flow layout visualization. */
            levels?: string[];
            /** @description The link for the flow layout visualization. */
            link?: string;
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowMarksInputRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowStyleInputRepresentation"];
            /**
             * @description The shape of this object when `layout` is `Flow`.
             * @enum {string}
             */
            layout: "Flow";
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation"];
        };
        /**
         * Summary
         * @description A set of configuration parameters for a summary widget in a Tableau Next dashboard, including its generation specification and filter source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetParametersInputRepresentation": {
            /** @description Generation specification for the summary widget */
            generationSpec?: unknown;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.WidgetSummaryTypeEnum"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetStylesInputRepresentation"];
        };
        /** @description A simple quick table calculation for a visualization field. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldSimpleQuickTableCalcRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcDifferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentDifferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentOfTotalRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningAvgRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMaxRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMinRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningSumRepresentation"];
        /**
         * RunningMin
         * @description A running-min quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMinRepresentation": {
            /**
             * @description The shape of this object when `type` is `RunningMin`.
             * @enum {string}
             */
            type: "RunningMin";
        };
        /** @description An operand for a data alert condition, based on the value of a specified metric. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertMetricValueRepresentation": {
            /** @description fact key */
            factKey?: string;
            /** @description filter context */
            filterContext?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation"][];
            insightType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.InsightTypeEnum"];
            /** @description metric or sub-metric Id */
            metricId?: string;
            /** @description Id or API name of the semantic data model */
            modelApiNameOrId?: string;
            /** @description additional metric params */
            params?: {
                [key: string]: string;
            };
            timeContext?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation"];
        };
        /** @description A header entry for a custom view mark selection — captures a single selected dimension/measure value plus any partitioning context. */
        "sfdc.unified.analytics.connect.api.output.MarkSelectionHeaderRepresentation": {
            fieldId?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MarkSelectionFieldRepresentation"];
            /** @description The field IDs that partition this header's selection scope. */
            partitionFieldIds?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MarkSelectionFieldRepresentation"][];
            /** @description The values of the partitioning fields aligned by index with partitionFieldIds. */
            partitionValues?: unknown[];
            /** @description The selected value for the field (string, number, or boolean). */
            value?: unknown;
        };
        /** @description A field in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldInputRepresentation": {
            adHocCalc?: components["schemas"]["sfdc.unified.analytics.connect.api.input.AdHocCalculationInputRepresentation"];
            computeUsing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldComputeUsingInputRepresentation"];
            displayCategory?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDisplayCategoryType"];
            /** @description The name of the field. */
            fieldName?: string;
            function?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldFunctionType"];
            /** @description The hierarchy level of the field. */
            hierarchyLevel?: number;
            /** @description The hierarchy name of the field. */
            hierarchyName?: string;
            /** @description The label of the field. */
            label?: string;
            /** @description The fieldKey of the visualization field used as the latitude or Y coordinate. */
            latitudeOrY?: string;
            /** @description The fieldKey of the visualization field used as the longitude or X coordinate. */
            longitudeOrX?: string;
            /** @description The name of the object. */
            objectName?: string;
            /** @description The position name of the field. */
            positionName?: string;
            positional?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseMapPositionalInputRepresentation"];
            quickTableCalc?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldQuickTableCalcInputRepresentation"];
            role?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldRoleType"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldType"];
        };
        /**
         * @description The view type of a widget
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum": "Input" | "InputCard" | "List" | "ListCard" | "Toggle";
        /**
         * TableDownThenAcross
         * @description The table-down-then-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableDownThenAcrossRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableDownThenAcross`.
             * @enum {string}
             */
            type: "TableDownThenAcross";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * @description Follower type.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowerTypeEnum": "Group" | "User";
        /** @description An input object specifying the asset to clone and clone options. */
        "sfdc.unified.analytics.clone.connect.api.input.AnalyticsAssetCloneInputRepresentation": {
            includeDependencies?: components["schemas"]["sfdc.unified.analytics.clone.connect.api.input.IncludeDependenciesRepresentation"];
            /** @description Required. The ID of the asset to clone. */
            sourceAssetId: string;
            /** @description Required. The type of the asset to clone. */
            sourceAssetType: string;
            /** @description The ID of the workspace where the cloned asset will be created. */
            targetWorkspaceId?: string;
        };
        /** @description Input representation for radial field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialFieldLabelsStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            rings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            slices?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
        };
        /** @description Identifies a visualization widget to download, by its dashboard, custom view, and widget ID. */
        "sfdc.unified.analytics.connect.api.input.download.DownloadVisualizationWidgetAssetInputRepresentation": {
            /** @description Custom View ID of the dashboard */
            customViewId?: string;
            /** @description API name for the dashboard */
            dashboardName?: string;
            /** @description ID of a widget within a dashboard */
            widgetId?: string;
        };
        /** @description Input representation for header mark specification in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkInputRepresentation": {
            /** @description The encoding properties of the header mark. */
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkEncodingInputRepresentation"][];
            /** @description Whether this header mark spec was automatically generated. */
            isAutomatic?: boolean;
            stack?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStackInputRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkType"];
        };
        /** @description Input representation for border/outline properties. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockBorderInputRepresentation": {
            /**
             * Format: double
             * @description Border corner radius.
             */
            radius?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleLineStyleType"];
            /**
             * Format: double
             * @description Border width.
             */
            width?: number;
        };
        /** @description Output representation for tooltip styles shared across all tooltip types in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation": {
            container?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipContainerStyleRepresentation"];
            /** @description Whether the tooltip is visible. */
            isVisible?: boolean;
        };
        /** @description A dashboard custom config (e.g. query cache enabled and staleness). */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardCustomConfigInputRepresentation": {
            /** @description Specifies whether the dashboard uses Hyper query caching (`true`) or not (`false`). */
            queryCacheEnabled?: boolean;
            /** @description The how much staleness allowed for query cache (e.g. 5min, 10min, 20min). */
            queryCacheStaleness?: string;
        };
        /** @description The style for view headers in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeadersStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderColumnsDirectionStyleInputRepresentation"];
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderGroupsDirectionStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderRowsDirectionStyleInputRepresentation"];
        };
        /**
         * @description The mode of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationModeType": "Table" | "Visualization";
        /**
         * ListCard
         * @description A set of configuration parameters for a list-card parameter widget in a Tableau Next dashboard, used when the view type is list card.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ListCardParameterWidgetParametersInputRepresentation": {
            /** @description Show or hide parameter widget label. */
            isLabelHidden?: boolean;
            /** @description Parameter Name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * BaseParameter
         * @description A set of configuration parameters for a parameter widget in a Tableau Next dashboard, including its parameter option and view type.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.BaseParameterWidgetParametersInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputCardParameterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListCardParameterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ToggleParameterWidgetParametersInputRepresentation"];
        /** @description An ordered quick table calculation for a visualization field, computed according to a configurable sort order. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldOrderedQuickTableCalcInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcPercentileInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankDenseInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankModifiedInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankUniqueInputRepresentation"];
        /**
         * Cell
         * @description The cell computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingCellRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `Cell`.
             * @enum {string}
             */
            type: "Cell";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description The sizing style for header columns in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsSizingStyleInputRepresentation": {
            /** @description The height for each field in the header columns. */
            fieldHeight?: {
                [key: string]: number;
            };
            /**
             * Format: double
             * @description The height for the index column.
             */
            indexHeight?: number;
            /**
             * Format: double
             * @description The width of the header columns.
             */
            width?: number;
        };
        /** @description A set of details for a custom view selection, including its axes, data source, headers, marks, and nodes. */
        "sfdc.unified.analytics.connect.api.output.CustomViewSelectionDetailsRepresentation": {
            /** @description The axes information for the marks data. */
            axes?: unknown[];
            /** @description The name of the data source. */
            dataSource?: string;
            /** @description The headers information for the marks data. */
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MarkSelectionHeaderRepresentation"][];
            /** @description The array of mark selections with field information and values. */
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MarkSelectionRepresentation"][];
            /** @description The node information for the mark selection (cluster/tree style selections). */
            nodes?: unknown[];
        };
        /**
         * Metric
         * @description A set of configuration parameters for a metric widget in a Tableau Next dashboard, including its metric option and filter source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetParametersRepresentation": {
            metricOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.MetricOptionRepresentation"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetStylesRepresentation"];
        };
        /** @description Output representation for dual axis style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationDualAxisStyleRepresentation": {
            synchronization?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisSynchronizationType"];
        };
        /** @description A data connection asset in data orchestration, including its connector type and the number of dependent assets. */
        "sfdc.unified.analytics.connect.api.output.dataorchestration.DataConnectionAssetOutputRepresentation": {
            /** @description Connector type */
            connectorType?: string;
            /** @description Count of assets that depend on this connection */
            dependentAssetCount?: number;
            /**
             * Format: date-time
             * @description Last modified date
             */
            lastModified?: string;
        };
        /** @description Update record share input item representation */
        "sfdc.unified.analytics.connect.api.input.share.UpdateSetupRecordAccessItemInputRepresentation": {
            accessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"];
            /** @description Id of the User/Group */
            userOrGroupId?: string;
        };
        /**
         * OrderedQuickTableCalcRankDense
         * @description A dense-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankDenseInputRepresentation": {
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType"];
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * @description The axis ticks type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisTicksType": "Auto" | "Fixed" | "None";
        /** @description Representation of a filterOption. */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.FilterOptionRepresentation": {
            /** @description Data type of the field name being filtered */
            dataType?: string;
            /** @description The specific field within the data object that this filter widget will filter on */
            fieldName?: string;
            /** @description The name of the table or view that this filter widget is associated with */
            objectName?: string;
            selectionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterSelectionTypeEnum"];
        };
        /** @description Data alert content that delivers a generated Beacon Report, guided by a set of generation instructions. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertBeaconReportContentRepresentation": {
            /** @description Extensible JSON document of LLM instructions used to generate the Beacon Report */
            skillInstruction?: string;
        };
        /** @description The tick style for a visualization axis, either automatic, fixed, or none. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationAxisTicksInfoInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAutoAxisTicksInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFixedAxisTicksInfoInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationNoneAxisTicksInfoInputRepresentation"];
        /** @description The style for a visualization view. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecStyleInputRepresentation": {
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeadersStyleInputRepresentation"];
        };
        /**
         * @description List of assets in Marketplace listings
         *
         *     _Available April 2026 and later._
         */
        "sfdc.analyticsdashboard.connect.api.output.MarketplaceListingCollectionRepresentation": {
            /** @description List of marketplace listings */
            marketplaceListings?: components["schemas"]["sfdc.analyticsdashboard.connect.api.output.MarketplaceListingDetailRepresentation"][];
            /** @description The total amount of results */
            totalCount?: number;
        };
        /** @description Common text style input representation for list widget label or value */
        "sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetTextStylesInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation"];
        /**
         * @description The type of asset
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.analyticsdashboard.connect.api.enums.MarketplaceAssetTypeEnum": "DominoTemplate";
        /**
         * @description The reference line label's vertical alignment type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineVerticalAlignmentType": "Auto" | "Bottom" | "Top";
        /** @description A moving quick table calculation for a visualization field, computed over a range of preceding and following values. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationFieldMovingCalculationQuickTableCalcInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMinInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingSumInputRepresentation"];
        /**
         * @description The function applied to a visualization field.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldFunctionType": "Attr" | "Avg" | "Count" | "CountD" | "DatePartDay" | "DatePartHour" | "DatePartMinute" | "DatePartMonth" | "DatePartQuarter" | "DatePartSecond" | "DatePartWeek" | "DatePartWeekDay" | "DatePartYear" | "DateTruncDay" | "DateTruncHour" | "DateTruncMinute" | "DateTruncMonth" | "DateTruncQuarter" | "DateTruncSecond" | "DateTruncWeek" | "DateTruncYear" | "FiscalDatePartMonth" | "FiscalDatePartQuarter" | "FiscalDatePartWeek" | "FiscalDatePartYear" | "FiscalDateTruncMonth" | "FiscalDateTruncQuarter" | "FiscalDateTruncWeek" | "FiscalDateTruncYear" | "Max" | "Mdy" | "Median" | "Min" | "My" | "Stdev" | "Stdevp" | "Sum" | "UserAgg" | "Var" | "Varp";
        /** @description The position of a map element, either geocoded or by X/Y coordinates. */
        "sfdc.unified.analytics.connect.api.input.BaseMapPositionalInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.GeocodedMapPositionalInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.XYMapPositionalInputRepresentation"];
        /** @description Input representation for a single field's BAN (big number) style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldBanStyleInputRepresentation": {
            fieldLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            format?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationDataFormatInputRepresentation"];
        };
        /**
         * @description The text direction type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType": "Auto" | "Horizontal" | "VerticalDown" | "VerticalUp";
        /**
         * AnalyticsText
         * @description A text widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.AnalyticsTextWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetParametersInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * BaseVisualization
         * @description A Tableau Next visualization, along with its data source, permissions, and workspace.
         */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShallowRepresentation"];
        /**
         * RelativeDate
         * @description A relative-date filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRelativeDateFilterInfoRepresentation": {
            /** @description The anchor filter value to a relative date. */
            anchorRelativeDate?: string;
            beginPeriod?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRelativeDateFilterPeriodRepresentation"];
            endPeriod?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRelativeDateFilterPeriodRepresentation"];
            /** @description Whether to include null values. */
            includeNulls?: boolean;
            /** @description Whether the value uses the standard fiscal calendar (false if custom). */
            isFiscal?: boolean;
            /**
             * @description The shape of `filterInfos` when `type` is `RelativeDate`.
             * @enum {string}
             */
            type: "RelativeDate";
        };
        /** @description A list of Microsoft Teams recipients for a data alert, each with a recipient type. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertMsTeamsRecipientsRepresentation": {
            /** @description list of Microsoft Teams recipients with their types */
            recipients?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertMsTeamsRecipientRepresentation"][];
        };
        /** @description Output representation for header rows direction style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsDirectionStyleRepresentation": {
            /** @description Whether repeated cells should be merged for the visualization. */
            mergeRepeatedCells?: boolean;
            /** @description Whether the index should be shown for the visualization. */
            showIndex?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsSizingStyleRepresentation"];
        };
        /**
         * @description The generation of the package.
         * @enum {string}
         */
        "sfdc.analyticsdashboard.connect.api.enums.PackageGenerationEnum": "FirstGeneration" | "SecondGeneration";
        /** @description Forecast interval representation. */
        "sfdc.unified.analytics.connect.api.input.VisualizationForecastIntervalInputRepresentation": {
            timeUnit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastTimeUnitType"];
            /** @description The attribute for value. */
            value?: number;
        };
        /** @description A template source. */
        "sfdc.unified.analytics.connect.api.output.AnalyticsTemplateSourceRepresentation": {
            /** @description The template source asset name. */
            assetName?: string;
            /** @description The template source name. */
            name?: string | null;
        };
        /** @description Output representation for axis ticks style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAxisTicksStyleRepresentation": {
            majorTicks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationAxisTicksInfoRepresentation"];
            minorTicks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationAxisTicksInfoRepresentation"];
        };
        /**
         * Geocoded
         * @description A geocoded map position for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.GeocodedMapPositionalRepresentation": {
            geocoded?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MapFieldReferenceRepresentation"];
            /**
             * @description The shape of `positional` when `type` is `Geocoded`.
             * @enum {string}
             */
            type: "Geocoded";
        };
        /**
         * Custom
         * @description A custom-text label for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineCustomLabelRepresentation": {
            /** @description The reference line label text. */
            labelText?: string;
            /**
             * @description The shape of `label` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /**
         * @description The style fit type of the visualization's vizql visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationVizqlStyleFitType": "Entire" | "Standard";
        /**
         * All
         * @description A style for labeling all marks in a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationAllMarksToLabelStyleRepresentation": {
            /**
             * @description The shape of `marksToLabel` when `type` is `All`.
             * @enum {string}
             */
            type: "All";
        };
        /**
         * List
         * @description A set of configuration parameters for a list parameter widget in a Tableau Next dashboard, including its parameter name and label visibility.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetParametersRepresentation": {
            /** @description property that shows or hides the label on a parameter widget */
            isLabelHidden?: boolean;
            /** @description parameter name parameter value for the parameter widget */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * @description The type of recipient for a record share.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.share.SetupObjectRecipientTypeEnum": "Group" | "User";
        /**
         * In
         * @description An inclusion filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationInFilterInfoInputRepresentation": {
            /** @description Whether the filter is a custom filter. */
            isCustom?: boolean;
            /** @description Whether the filter should exclude the values. */
            isExcludes?: boolean;
            /** @description Whether the use all the values in the filter. */
            useAll?: boolean;
            /** @description The values for the filter. */
            values?: unknown[];
            /**
             * @description The shape of `filterInfos` when `type` is `In`.
             * @enum {string}
             */
            type: "In";
        };
        /** @description A label for a visualization reference line. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationReferenceLineLabelRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineComputationLabelRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineCustomLabelRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineNoneLabelRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineValueLabelRepresentation"];
        /**
         * OrderedQuickTableCalcRank
         * @description A rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankInputRepresentation": {
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType"];
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * @description DataTransform Filter Keys
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.dataorchestration.DataTransformFilterKeyEnum": "Frequencies" | "LastRunStatuses" | "LastRunTimeRange" | "TransformStatuses";
        /** @description A setup Record Share Target Record Representation. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordShareTargetRecordRepresentation": {
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The date the record was created.
             */
            createdDate?: string;
            /** @description The developer name of the record. */
            developerName?: string;
            /** @description The master label of the record. */
            label?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The date the record was last updated.
             */
            lastModifiedDate?: string;
            /** @description The ID of the record. */
            recordId?: string;
        };
        /** @description Identifies a Tableau Next dashboard to download, by its API name and an optional custom view. */
        "sfdc.unified.analytics.connect.api.input.download.DownloadDashboardAssetInputRepresentation": {
            /** @description Custom view ID */
            customViewId?: string;
            /** @description Custom view ID */
            dashboardName?: string;
        };
        /**
         * @description The type of asset being shared.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.share.SetupObjectTypeEnum": "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "SemanticModel";
        /** @description Target input for a metric details navigate action destination */
        "sfdc.unified.analytics.connect.api.input.actions.MetricDetailsNavigateActionTargetInput": {
            /** @description Token name that references the metric */
            tokenName?: string;
        };
        /** @description Radial layout specific output representation for mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialMarkStylesRepresentation": {
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
        };
        /**
         * @description Metric Badge
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.download.MetricBadgeRepresentation": {
            /** @description Color of badge in RGB format e.g. rgb(248, 26, 92), which may be user-defined in the case of goals */
            backgroundColor?: string;
            /** @description Text color of label inside of badge in RGB format e.g. rgb(248, 26, 92), which may be user-defined in the case of goals */
            color?: string;
            /** @description Label displayed inside of badge - this is either trend sentiment (High, Low, Expected) or user-defined goal name */
            label?: string;
        };
        /** @description Identifies a submetric to download, by its semantic data model ID, capture mode, and time range. */
        "sfdc.unified.analytics.connect.api.input.download.DownloadSubmetricAssetInputRepresentation": {
            captureMode?: components["schemas"]["shared.analytics.platform.api.enums.TuaSubMetricCaptureMode"];
            /**
             * Format: Id
             * @description Semantic data model ID
             */
            sdmId?: string;
            /** @description Time Range */
            timeRange?: string;
        };
        /** @description Output representation for date info in axis ticks of a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAxisTicksDateInfoRepresentation": {
            /** @description Whether to show only date axis boundary ticks. */
            showOnlyDateBoundary?: boolean;
            unit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisTicksDateUnitType"];
        };
        /** @description Specifies the field key for the date dimension used in the forecast visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationForecastDateDimensionFieldInputRepresentation": {
            /** @description This key is used to identify and map the date dimension. */
            fieldKey?: string;
            granularity?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastGranularityType"];
        };
        /**
         * PaneAcrossThenDown
         * @description The pane-across-then-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneAcrossThenDownInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneAcrossThenDown`.
             * @enum {string}
             */
            type: "PaneAcrossThenDown";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * @description Different summary types of a Summary Widget.
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.WidgetSummaryTypeEnum": "InsightSummary";
        /** @description Input representation for pane style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationPaneStyleInputRepresentation": {
            colors?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationColorAssignmentInputRepresentation"];
            defaults?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationCommonStyleInputRepresentation"];
            /** @description Whether the size range is automatic. */
            isAutomaticSize?: boolean;
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkSizeRangeInputRepresentation"];
        };
        /** @description Input representation for tooltip container style. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTooltipContainerStyleInputRepresentation": {
            /** @description The background color of the tooltip container. */
            color?: string;
            /** @description The transparency of the tooltip container (0-100). */
            transparency?: number;
        };
        /** @description Output representation for standalone line properties. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockLineRepresentation": {
            /**
             * Format: double
             * @description Line smoothness (0 = sharp corners, 1 = fully smoothed).
             */
            smoothness?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleLineStyleType"];
            /**
             * Format: double
             * @description Line width.
             */
            width?: number;
        };
        /** @description Input representation for mark encoding in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkEncodingInputRepresentation": {
            /** @description The reference to the field to which the mark is applied. */
            fieldKey?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkEncodingType"];
        };
        /** @description Input representation for field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsCommonStyleInputRepresentation"];
        };
        /**
         * @description The encoding type of a header mark in the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkEncodingType": "Color" | "Label" | "Tooltip";
        /**
         * DownloadVisualizationAsset
         * @description A downloaded Tableau Next visualization.
         */
        "sfdc.unified.analytics.connect.api.output.download.DownloadVisualizationAssetRepresentation": {
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * AnalyticsFilter
         * @description A filter widget, with initial values, parameters, and a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.AnalyticsFilterWidgetInputRepresentation": {
            initialValues?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterInitialValuesInputRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.BaseFilterWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Output representation for common line style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationLineCommonStyleRepresentation": {
            /** @description The color for the line. */
            color?: string;
        };
        /**
         * Map
         * @description A map background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundRepresentation": {
            domain?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundDomainRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationMapBackgroundStyleRepresentation"];
            /** @description The map background style name. */
            styleName?: string;
            /** @description The map background style url. */
            styleUrl?: string;
            /**
             * @description The shape of `background` when `type` is `Map`.
             * @enum {string}
             */
            type: "Map";
        };
        /**
         * Field
         * @description A sort of a visualization by a specified field.
         */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationByFieldSortInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldSortInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationNestedSortInputRepresentation"];
        /**
         * @description Different subscription schedule types.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectSubscriptionScheduleTypeEnum": "Daily" | "Weekly";
        /** @description A sizing style for header rows in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsSizingStyleRepresentation": {
            /** @description The width for each field in the header rows. */
            fieldWidth?: {
                [key: string]: number;
            };
            /**
             * Format: double
             * @description The height of the header rows.
             */
            height?: number;
            /**
             * Format: double
             * @description The width for the index row.
             */
            indexWidth?: number;
        };
        /** @description Input representation for common font style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation": {
            /** @description The color for the font. */
            color?: string;
            /** @description The size for the font. */
            size?: number;
        };
        /** @description Input representation for header styles in table visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTableHeaderStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsDirectionStyleInputRepresentation"];
            /** @description The field header styles for the visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderStyleInputRepresentation"];
            };
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderGroupsDirectionStyleInputRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsDirectionStyleInputRepresentation"];
        };
        /**
         * @description The type of the dashboard bundle assets supported.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.DashboardBundleAssetTypeEnum": "Dashboard" | "DashboardView" | "SemanticModel" | "Visualization";
        /** @description Input representation for mark size style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkSizeStyleInputRepresentation": {
            /** @description Whether the size value is automatic. */
            isAutomatic?: boolean;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkSizeType"];
            /** @description The size value. */
            value?: number;
        };
        /** @description Which marks to label in a visualization, either all marks or line ends. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationMarksToLabelStyleInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAllMarksToLabelStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineEndsMarkToLabelStyleInputRepresentation"];
        /**
         * Image
         * @description A set of configuration parameters for an image widget in a Tableau Next dashboard, including its alignment, alternative text, scaling, and opacity.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.image.ImageWidgetParametersInputRepresentation": {
            /** @description Horizontal alignment of the image */
            alignmentX?: string;
            /** @description Vertical alignment of the image */
            alignmentY?: string;
            /** @description Alternative text for the image */
            altText?: string;
            imageScale?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ImageScaleTypeEnum"];
            /** @description Image opacity (0-100) */
            opacity?: number;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.image.ImageStylesInputRepresentation"];
        };
        /** @description A weekly schedule for a data alert that fires on selected days of the week. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertWeeklyScheduleRepresentation": {
            /** @description Days of the week for the schedule */
            daysOfWeek?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDayEnum"][];
        };
        /** @description A sort by a specific field, used in a table visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationByFieldSortRepresentation": {
            /** @description The field to apply the sort by. */
            byField?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /** @description A represent follower and asset mapping. */
        "sfdc.unified.analytics.connect.api.output.follow.FollowerAssetRepresentation": {
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date.
             */
            createdDate?: string;
            /** @description The followed asset ID. */
            followedAssetId?: string;
            followedAssetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            followedTimeRange?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation"];
            /** @description The follower ID. */
            followerId?: string;
            followerType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowerTypeEnum"];
        };
        /**
         * @description The type of widget on a dashboard.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum": "Button" | "Container" | "Extension" | "Filter" | "Image" | "Metric" | "Navigation" | "Parameter" | "Summary" | "Text" | "Visualization";
        /**
         * Rank
         * @description A rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankRepresentation": {
            /**
             * @description The shape of this object when `type` is `Rank`.
             * @enum {string}
             */
            type: "Rank";
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * TableAcross
         * @description The table-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableAcrossInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableAcross`.
             * @enum {string}
             */
            type: "TableAcross";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * AnalyticsContainer
         * @description A container widget for a Tableau Next dashboard, with a background sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.container.AnalyticsContainerWidgetRepresentation": {
            backgroundSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * Button
         * @description A set of configuration parameters for a button widget in a Tableau Next dashboard, including its text, alignment, and font size.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetParametersInputRepresentation": {
            /** @description Button text alignmentX */
            alignmentX?: string;
            /** @description Button text alignmentY */
            alignmentY?: string;
            /** @description Button text font size */
            fontSize?: number;
            hoverStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"];
            symbol?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetIconInputRepresentation"];
            /** @description Button text value */
            text?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation"];
        };
        /**
         * Workspace
         * @description A Tableau Next workspace.
         */
        "sfdc.unified.analytics.connect.api.input.workspace.WorkspaceInputRepresentation": {
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Flow
         * @description The style for a Flow-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFlowStyleInputRepresentation": {
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowFieldLabelsStyleInputRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowMarkStylesInputRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation"];
        };
        /**
         * Navigate
         * @description The parameters for a navigation action, including the destination, an optional field and label, and whether to carry over the current dashboard state.
         */
        "sfdc.unified.analytics.connect.api.input.actions.NavigateActionParametersInputRepresentation": {
            destination?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.BaseNavigateActionDestinationInputRepresentation"];
            /** @description Field */
            field?: string;
            /** @description Whether to include current dashboard state during navigation */
            includeState?: boolean;
            /** @description Label */
            label?: string;
        };
        /**
         * @description The mark type of the visualization header.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkType": "Bar" | "Text";
        /**
         * @description The encoding type of a mark in the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkEncodingType": "Angle" | "Color" | "Detail" | "Label" | "Range" | "Size" | "Tooltip";
        /** @description A field, operator, and value definition for a filter. */
        "sfdc.unified.analytics.connect.api.output.FilterDetailsRepresentation": {
            /** @description The filter field name. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterOperatorType"];
            /** @description The filter values. */
            values?: unknown;
        };
        /**
         * AnalyticsWidget
         * @description A widget for a Tableau Next dashboard, including its actions and dynamic tokens.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.AnalyticsButtonWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.AnalyticsContainerWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.AnalyticsFilterWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.image.AnalyticsImageWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningCompWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.AnalyticsMetricWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.AnalyticsNavigationWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.AnalyticsParameterWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.summary.AnalyticsSummaryWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.AnalyticsTextWidgetInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.visualization.AnalyticsVisualizationWidgetInputRepresentation"];
        /**
         * PaneAcross
         * @description The pane-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneAcrossRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneAcross`.
             * @enum {string}
             */
            type: "PaneAcross";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * @description The type of the dashboard data source.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.DashboardDataSourceTypeEnum": "Image" | "LightningWebComponent" | "SemanticModel" | "Visualization";
        /** @description Output representation for border/outline properties. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockBorderRepresentation": {
            /**
             * Format: double
             * @description Border corner radius.
             */
            radius?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleLineStyleType"];
            /**
             * Format: double
             * @description Border width.
             */
            width?: number;
        };
        /** @description Output representation for common font style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFontCommonStyleRepresentation": {
            /** @description The color for the font. */
            color?: string;
            /** @description The size for the font. */
            size?: number;
        };
        /**
         * @description Text widget parameters definition input representation in unified analytics
         *
         *     _Updated April 2026: added `rules`._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetContentParameterInputRepresentation": {
            attributes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetContentAttributeInputRepresentation"];
            /** @description Inserted text or token object in text widget */
            insert?: unknown;
            /**
             * @description List of CF rule names set for this content block
             *
             *     _Available April 2026 and later._
             */
            rules?: string[];
        };
        /** @description Output representation for line style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation": {
            axisLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineCommonStyleRepresentation"];
            fieldLabelDividerLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineCommonStyleRepresentation"];
            separatorLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineCommonStyleRepresentation"];
            zeroLine?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineCommonStyleRepresentation"];
        };
        /**
         * List
         * @description Parameters for a filter widget displayed as a list, including its filter option, label visibility, and title, value, and widget styles.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetParametersRepresentation": {
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterOptionRepresentation"];
            /** @description property that shows or hides the label on a filter widget */
            isLabelHidden?: boolean;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterWidgetStylesRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * Radial
         * @description A radial-layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialLayoutVisualSpecRepresentation": {
            /** @description The BAN (big number) fields for the radial visualization. */
            ban?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialMarksRepresentation"];
            /** @description The measure value fields for the radial visualization. */
            measureValues?: string[];
            /** @description The rings fields for the radial visualization. */
            rings?: string[];
            /** @description The slices fields for the radial visualization. */
            slices?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialStyleRepresentation"];
            layout: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLayoutType"];
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleSheetRepresentation"];
        };
        /**
         * Visualization
         * @description A set of style settings for a visualization widget in a Tableau Next dashboard, including its header background color, axis line color, and text color.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetStylesRepresentation": {
            /** @description Header background color of visualization widget field labels */
            headerBackgroundColor?: string;
            /** @description Line color of visualization widget axis lines */
            lineColor?: string;
            /** @description Text color of all visualization widget elements */
            textColor?: string;
            /** @description Text size of visualization widget */
            textSize?: number;
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description An operand for a data alert condition, specified as a literal value with an explicit data type. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertRawValueInputRepresentation": {
            dataType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDataTypeEnum"];
            /** @description raw value of the operand */
            value?: string;
        };
        /** @description Output representation for mark size range in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkSizeRangeRepresentation": {
            /** @description Whether the size is automatic (defaults to true). */
            isAutomatic?: boolean;
            /** @description The maximum value for the size range. */
            max?: number;
            /** @description The minimum value for the size range. */
            min?: number;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkSizeType"];
        };
        /** @description Input representation for mark style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation": {
            color?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkColorStyleInputRepresentation"];
            connector?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkConnectorStyleInputRepresentation"];
            /** @description Whether the mark opacity is managed automatically by the system. */
            isAutomaticOpacity?: boolean;
            /** @description Whether the size style is automatic. */
            isAutomaticSize?: boolean;
            /** @description Whether the marks are centered along their stacking axis. */
            isStackingAxisCentered?: boolean;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkLabelStyleInputRepresentation"];
            /** @description The opacity of the mark, as a percentage value from 0 (transparent) to 100 (opaque). */
            opacity?: number;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkRangeStyleInputRepresentation"];
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkSizeStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipMarkStyleInputRepresentation"];
        };
        /** @description A unified filter. */
        "sfdc.unified.analytics.connect.api.input.common.UnifiedFilterInputRepresentation": {
            /** @description The field name parameter value. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            /** @description The values parameter value. */
            values?: unknown[];
        };
        /**
         * DashboardPageWidget
         * @description The grid placement of a widget instance on a Tableau Next dashboard page.
         */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardPageWidgetRepresentation": {
            /** @description The width of the widget. */
            colspan?: number;
            /** @description The column index of the widget. */
            column?: number;
            /** @description The row index of the widget. */
            row?: number;
            /** @description The height of the widget. */
            rowspan?: number;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * Input
         * @description A set of configuration parameters for an input parameter widget in a Tableau Next dashboard, including its parameter name, value source, and label visibility.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetParametersRepresentation": {
            /** @description property that shows or hides the label on a parameter widget */
            isLabelHidden?: boolean;
            /** @description parameter name parameter value for the parameter widget */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation"];
            /** @description Source for values used in input, it can be used for eg: autocomplete */
            valueSource?: unknown;
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Input representation for background domain range in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationBackgroundDomainRangeInputRepresentation": {
            /**
             * Format: double
             * @description The maximum value of the domain.
             */
            max?: number;
            /**
             * Format: double
             * @description The minimum value of the domain.
             */
            min?: number;
        };
        /**
         * AnlytLightningComp
         * @description A Lightning component widget for a Tableau Next dashboard, either a standard or custom component.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningCompWidgetRepresentation": {
            /** @description Type of Lightning Component (Standard or Custom) */
            componentType?: string;
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningCompWidgetParametersRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningComponentSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description The range style for a visualization axis, either automatic or custom. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationAxisRangeStyleInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAutoAxisRangeStyleInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationCustomAxisRangeStyleInputRepresentation"];
        /** @description Receive Filter Source Input Representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation": {
            filterMode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectReceiveFilterModeEnum"];
            /** @description The list of publishers for this subscriber */
            publishers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.FilterPublisherInputRepresentation"][];
            /** @description Widgets Parameter value */
            widgetIds?: string[];
        };
        /**
         * Dynamic
         * @description A dynamically resolved flow action variable that references a field on another widget.
         */
        "sfdc.unified.analytics.connect.api.input.actions.DynamicFlowActionAttributeDataInputRepresentation": {
            selectionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectDynamicFlowSelectionTypeEnum"];
            /** @description Dynamic Input attribute referred widget field */
            widgetField?: string;
            /** @description Dynamic Input attribute referred widgetId */
            widgetId?: string;
            inputType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectFlowInputTypeEnum"];
        };
        /** @description A unified filter. */
        "sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterInputRepresentation": {
            /** @description The list of fields for the unified filter. */
            fields?: components["schemas"]["sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterFieldInputRepresentation"][];
            /** @description Specifies whether null values are included in the filter results: for the In operator, `true` includes null values and `false` leaves the behavior undefined; for the NotIn operator, `false` includes null values and `true` leaves the behavior undefined. */
            includeNulls?: boolean;
            measureCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterMeasureCriteriaInputRepresentation"];
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            topBottomCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterTopBottomCriteriaInputRepresentation"];
            /** @description The values for the unified filter. */
            values?: unknown[];
        };
        /**
         * Static
         * @description A flow action variable with a fixed, static value.
         */
        "sfdc.unified.analytics.connect.api.output.actions.StaticFlowActionAttributeDataRepresentation": {
            /** @description Static input value */
            value?: string;
            inputType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectFlowInputTypeEnum"];
        };
        /** @description Input representation for mark range style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkRangeStyleInputRepresentation": {
            /** @description Whether the range is reversed. */
            reverse?: boolean;
        };
        /**
         * Continuous
         * @description A continuous color assignment for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.ContinuousColorAssignmentRepresentation": {
            palette?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ContinuousPaletteRepresentation"];
            /**
             * @description The shape of `colors` when `type` is `Continuous`.
             * @enum {string}
             */
            type: "Continuous";
        };
        /**
         * Radial
         * @description A style for a radial-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialStyleRepresentation": {
            axis?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisStylesRepresentation"];
            ban?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBanStyleRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialFieldLabelsStyleRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialHeadersStyleRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRadialMarkStylesRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation"];
        };
        /** @description A filter for a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFilterInputRepresentation": {
            /** @description The field key for the filter. */
            fieldKey?: string;
            /** @description The list of field keys for the filter. */
            fieldKeys?: string[];
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterInputRepresentation"];
            /** @description The filters information for the visualization. */
            filterInfos?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationFilterInfoInputRepresentation"][];
            /** @description Specifies whether all values are included when the filter has no selections (`true`) or not included (`false`). */
            includeAllValues?: boolean;
            /** @description Specifies whether the filter is a context filter (`true`) or not a context filter (`false`). */
            isContext?: boolean;
        };
        /** @description A unified filter field. */
        "sfdc.unified.analytics.connect.api.output.UnifiedSemanticFilterFieldRepresentation": {
            /** @description The expression. */
            expression?: string;
            /** @description The model field reference. */
            model?: string;
        };
        /**
         * ButtonWidget
         * @description A set of style settings for a button widget in a Tableau Next dashboard, including its font color and text style.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetStylesInputRepresentation": {
            /** @description Button text color value */
            fontColor?: string;
            /** @description Button text style value */
            textStyle?: string[];
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * @description The scale type for an image widget.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ImageScaleTypeEnum": "Fill" | "FitToHeight" | "FitToWidth" | "Original";
        /** @description Representation for a filter publisher */
        "sfdc.unified.analytics.connect.api.output.FilterPublisherRepresentation": {
            /** @description Field name that the widget is publishing a message for. Can be optional when widgetId above is provided, which means that all actions on that widget will be passed and no specific data source information is needed. */
            fieldName?: string;
            /** @description Object name that the widget is publishing a message for. Can be optional when widgetId above is provided, which means that all actions on that widget will be passed and no specific data source information is needed. */
            objectName?: string;
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The widget ID of the publisher */
            widgetId?: string;
        };
        /** @description The layout specification for a visualization, including its legends and stylesheet. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationLayoutVisualSpecInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFlowLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableLayoutVisualSpecInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationVizqlLayoutVisualSpecInputRepresentation"];
        /** @description Output representation for reference line label alignment in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineLabelAlignmentRepresentation": {
            horizontal?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineHorizontalAlignmentType"];
            vertical?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineVerticalAlignmentType"];
        };
        /**
         * AnalyticsText
         * @description A text widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.AnalyticsTextWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Output representation for encoding styles in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation": {
            /** @description The encoding styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationPaneStyleRepresentation"];
            };
        };
        /**
         * Value
         * @description A fixed value source for a reference line in a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceLineValueInfoInputRepresentation": {
            /** @description The value of the reference line. */
            value?: unknown;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineLabelInputRepresentation"];
            /**
             * @description The shape of `line` when `valueType` is `Value`.
             * @enum {string}
             */
            valueType: "Value";
        };
        /**
         * Dashboard
         * @description A request to create or update a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardInputRepresentation": {
            backgroundSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            customConfig?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardCustomConfigInputRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date for the dashboard.
             */
            lastModifiedDate?: string;
            /** @description The list of layouts in the dashboard. */
            layouts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardLayoutInputRepresentation"][];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardStyleInputRepresentation"];
            templateSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.AnalyticsTemplateSourceInputRepresentation"];
            /** @description The map of widgets in the dashboard. */
            widgets?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetInputRepresentation"];
            };
            /** @description The ID or API name of the workspace from which this dashboard originates. */
            workspaceIdOrApiName?: string;
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * @description Lightning Component source input representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningComponentSourceInputRepresentation": {
            /** @description Lightning Component Bundle ID */
            id?: string;
            /** @description Lightning Component source label */
            label?: string;
            /** @description Lightning Component source name */
            name?: string;
            /** @description Lightning Component source namespace */
            namespace?: string;
        };
        /** @description Output representation for header columns direction style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsDirectionStyleRepresentation": {
            /** @description Whether repeated cells should be merged for the visualization. */
            mergeRepeatedCells?: boolean;
            /** @description Whether the index should be shown for the visualization. */
            showIndex?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsSizingStyleRepresentation"];
        };
        /**
         * Workspace
         * @description A Tableau Next workspace.
         */
        "sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation": {
            /** @description The number of assets in this workspace. */
            assetsCount?: number | null;
            /** @description The key to use for caching the workspace output. */
            cacheableKey?: string;
            permissions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.PermissionsRepresentation"];
            /**
             * Format: url
             * @description The URL to this workspace.
             */
            url?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /**
         * @description The type of asset returned by an assets browse request.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.assetsBrowse.AnalyticsAssetsBrowseAssetTypeEnum": "AnalyticsDashboard" | "AnalyticsVisualization" | "AnalyticsWorkspace" | "InternalDataConnector" | "MktCalculatedInsightObject" | "MktDataConnection" | "MktDataLakeObject" | "MktDataModelObject" | "MktDataTransformSetup" | "SemanticDefinition" | "SemanticModel";
        /** @description A setup Record Share Error. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordShareErrorRepresentation": {
            /** @description The setup record share error code. */
            errorCode?: string;
            /** @description The setup record share error message. */
            errorMessage?: string;
            /** @description The setup record share userOrGroup ID. */
            userOrGroupId?: string;
        };
        /** @description An ordered quick table calculation for a visualization field, computed according to a configurable sort order. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldOrderedQuickTableCalcRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcPercentileRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankDenseRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankModifiedRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankUniqueRepresentation"];
        /**
         * @description Representation for unified filter field
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterFieldRepresentation": {
            /** @description The expression */
            expression?: string;
            /** @description The model field reference */
            model?: string;
        };
        /** @description Forecast interval representation. */
        "sfdc.unified.analytics.connect.api.output.VisualizationForecastIntervalRepresentation": {
            timeUnit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastTimeUnitType"];
            /** @description The attribute for value. */
            value?: number;
        };
        /**
         * @description The display category of a visualization field.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDisplayCategoryType": "Continuous" | "Discrete";
        /** @description A resolved reference to the queried asset. */
        "sfdc.unified.analytics.dependents.connect.api.output.AssetReferenceRepresentation": {
            /** @description The API (developer) name of the asset. */
            assetApiName?: string;
            /** @description The record ID of the asset. */
            assetId?: string;
            /** @description The display label of the asset. */
            assetLabel?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
        };
        /** @description A dashboard custom view mark selection. */
        "sfdc.unified.analytics.connect.api.input.CustomViewSelectionInputRepresentation": {
            /** @description The tODO-details is a blob for which structure is not final yet. */
            details?: unknown;
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.DataSourceInputRepresentation"];
        };
        /** @description A moving quick table calculation for a visualization field, computed over a range of preceding and following values. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldMovingCalculationQuickTableCalcRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMinRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingSumRepresentation"];
        /** @description Input representation for mark connector style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkConnectorStyleInputRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkConnectorType"];
        };
        /**
         * @description The background type of the visualization.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationBackgroundType": "Blank" | "Grid" | "Map";
        /** @description Input representation for a style block. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockInputRepresentation": {
            /** @description Background color (hex). */
            backgroundColor?: string;
            border?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockBorderInputRepresentation"];
            /** @description The foreground color in hex format, used for text, lines, and borders, and as the fallback mark color when no other paint is specified. */
            color?: string;
            font?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockFontInputRepresentation"];
            line?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockLineInputRepresentation"];
            /**
             * Format: double
             * @description Opacity value from 0 to 1.
             */
            opacity?: number;
            padding?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockPaddingInputRepresentation"];
            text?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockTextInputRepresentation"];
            visibility?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleVisibilityType"];
        };
        /**
         * ListParameter
         * @description A text style for a list parameter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ListParameterWidgetTextStyleInputRepresentation": {
            /** @description Font color as a hex string. */
            fontColor?: string;
            /** @description Font size in pixels. */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting). */
            textStyle?: string[];
        };
        /** @description Output representation for radial headers style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialHeadersStyleRepresentation": {
            /** @description The field header styles for the radial visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderStyleRepresentation"];
            };
        };
        /**
         * Toggle
         * @description A set of configuration parameters for a toggle parameter widget in a Tableau Next dashboard, used when the view type is toggle.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ToggleParameterWidgetParametersRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleDefaultStyleRepresentation"];
            /** @description Parameter name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleSelectedStyleRepresentation"];
            textStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.ToggleTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /**
         * InputParameter
         * @description A text style for an input parameter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.InputParameterWidgetTextStyleInputRepresentation": {
            /** @description Font color as a hex string. */
            fontColor?: string;
            /** @description Font size in pixels. */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting). */
            textStyle?: string[];
        };
        /**
         * AnalyticsMetric
         * @description A metric widget for a Tableau Next dashboard, sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.metric.AnalyticsMetricWidgetInputRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Map layout specific output representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapMarksRepresentation": {
            /** @description The mark specifications per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
            };
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
        };
        /** @description Representation for a relative date filter period. */
        "sfdc.unified.analytics.connect.api.output.VisualizationRelativeDateFilterPeriodRepresentation": {
            unit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationRelativeDateFilterPeriodUnitType"];
            /** @description The value offset of the period. */
            value?: number;
        };
        /** @description Input representation for text style properties in a tooltip text value. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTextStylePropertiesInputRepresentation": {
            /** @description Whether the text is bold. */
            bold?: boolean;
            /** @description The text color. */
            color?: string;
            /** @description The font family. */
            family?: string;
            horizontalAlign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextHorizontalAlignmentType"];
            /** @description Whether the text is italic. */
            italic?: boolean;
            /** @description The font size in points (10-128). */
            size?: number;
            /** @description Whether the text is underlined. */
            underline?: boolean;
        };
        /**
         * @description Input representation for unified filter field
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterFieldInputRepresentation": {
            /** @description The expression */
            expression?: string;
            /** @description The model field reference */
            model?: string;
        };
        /**
         * @description Followed Asset
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRefRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.SemanticSubMetricAssetRefRepresentation"];
        /** @description A quick table calculation for a visualization field. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldQuickTableCalcRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMinRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingSumRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcPercentileRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankDenseRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankModifiedRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankUniqueRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcDifferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentDifferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentOfTotalRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningAvgRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMaxRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningMinRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcRunningSumRepresentation"];
        /**
         * TableAcrossThenDown
         * @description The table-across-then-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingTableAcrossThenDownRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableAcrossThenDown`.
             * @enum {string}
             */
            type: "TableAcrossThenDown";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description Input representation for banding application style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationBandingApplicationStyleInputRepresentation": {
            /** @description The banding level for the banding application. */
            level?: number;
            /** @description The banding size for the banding application. */
            size?: number;
        };
        /** @description Input representation for font styling properties. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockFontInputRepresentation": {
            /** @description Font family name. */
            family?: string;
            /** @description Whether text is italic. */
            italic?: boolean;
            /** @description Font size in pixels. */
            size?: number;
            /** @description Whether text is underlined. */
            underline?: boolean;
            weight?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFontWeightType"];
        };
        /**
         * @description Selected style in a rendered toggle widget
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.ToggleSelectedStyleInputRepresentation": {
            /** @description Background color on a selected button on a toggle widget. */
            backgroundColor?: string;
            /** @description Text color value on a selected button on a toggle widget */
            fontColor?: string;
            /** @description Text style on a selected button on a toggle widget */
            textStyle?: string[];
        };
        /**
         * @description Connection Enrichment Representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.dataorchestration.DataOrchestrationConnectionEnrichmentRepresentation": {
            /** @description Connector type */
            connectorType?: string;
            /** @description Connection developer name */
            developerName?: string;
            /** @description Connection ID */
            id?: string;
            /** @description Whether the connection is present in any workspace */
            isTabNextAsset?: boolean;
            /** @description Connection master label */
            masterLabel?: string;
        };
        /**
         * PaneDownThenAcross
         * @description The pane-down-then-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldComputeUsingPaneDownThenAcrossRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneDownThenAcross`.
             * @enum {string}
             */
            type: "PaneDownThenAcross";
            /** @description Specifies whether to use the ORDER BY clause for extra mark fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description Output representation for text style properties in a tooltip text value. */
        "sfdc.unified.analytics.connect.api.output.VisualizationTextStylePropertiesRepresentation": {
            /** @description Whether the text is bold. */
            bold?: boolean;
            /** @description The text color. */
            color?: string;
            /** @description The font family. */
            family?: string;
            horizontalAlign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextHorizontalAlignmentType"];
            /** @description Whether the text is italic. */
            italic?: boolean;
            /** @description The font size in points (10-128). */
            size?: number;
            /** @description Whether the text is underlined. */
            underline?: boolean;
        };
        /** @description A collection of Tableau Next dashboards. */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardCollectionRepresentation": {
            /** @description The list of dashboards being returned. */
            dashboards?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation"][];
        };
        /**
         * Field
         * @description A sort by a specific field for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSortRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortType"];
            /** @description The field to apply the sort by. */
            byField?: string;
        };
        /** @description Map field reference output representation. */
        "sfdc.unified.analytics.connect.api.output.MapFieldReferenceRepresentation": {
            /** @description The field name. */
            fieldName?: string;
            /** @description The object name. */
            objectName?: string;
        };
        /** @description Represents a single Microsoft Teams recipient for a data alert */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertMsTeamsRecipientRepresentation": {
            /** @description Microsoft Teams recipient id */
            recipient?: string;
            recipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.MsTeamsRecipientTypeEnum"];
        };
        /** @description Represents flow action input variable representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.actions.BaseFlowActionAttributeDataRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.DynamicFlowActionAttributeDataRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.StaticFlowActionAttributeDataRepresentation"];
        /** @description Input representation for shading style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation": {
            /** @description The background color for the shading. */
            backgroundColor?: string;
            banding?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBandingStyleInputRepresentation"];
        };
        /**
         * @description The type of interaction event.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectInteractionEventTypeEnum": "Click" | "Select";
        /**
         * MovingMin
         * @description A moving-min quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMinInputRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingMin`.
             * @enum {string}
             */
            type: "MovingMin";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description Filter Publisher Input Representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.FilterPublisherInputRepresentation": {
            /** @description Field name that the widget is publishing a message for. Can be optional when widgetId above is provided, which means that all actions on that widget will be passed and no specific data source information is needed. */
            fieldName?: string;
            /** @description Object name that the widget is publishing a message for. Can be optional when widgetId above is provided, which means that all actions on that widget will be passed and no specific data source information is needed. */
            objectName?: string;
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The widget ID of the publisher */
            widgetId?: string;
        };
        /** @description Input representation for title style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation": {
            /** @description Whether the title of the visualization should be visible. */
            isVisible?: boolean;
            /** @description The title of the visualization. */
            titleText?: string;
        };
        /** @description Update record share input representation */
        "sfdc.unified.analytics.connect.api.input.share.UpdateSetupRecordAccessInputRepresentation": {
            /** @description List of records shares */
            updateSetupRecordAccessItems?: components["schemas"]["sfdc.unified.analytics.connect.api.input.share.UpdateSetupRecordAccessItemInputRepresentation"][];
        };
        /** @description Input representation for standalone line properties. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockLineInputRepresentation": {
            /**
             * Format: double
             * @description Line smoothness (0 = sharp corners, 1 = fully smoothed).
             */
            smoothness?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleLineStyleType"];
            /**
             * Format: double
             * @description Line width.
             */
            width?: number;
        };
        /** @description A direction style for header columns in a visualization's view specification. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderColumnsDirectionStyleRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderColumnsSizingStyleRepresentation"];
        };
        /**
         * Text
         * @description A plain text value in a tooltip text sequence for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationBasicTextValueInputRepresentation": {
            /** @description The plain text string. */
            value?: string;
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTextStylePropertiesInputRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `Text`.
             * @enum {string}
             */
            type: "Text";
        };
        /** @description The measure criteria for a unified filter. */
        "sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterMeasureCriteriaInputRepresentation": {
            unifiedFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.UnifiedSemanticFilterInputRepresentation"];
        };
        /**
         * Map
         * @description The style for a map-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapStyleInputRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationBackgroundInputRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldLabelsStyleInputRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapMarkStylesInputRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation"];
        };
        /**
         * List
         * @description Parameters for a filter widget displayed as a list, including its filter option, label visibility, and title, value, and widget styles.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetParametersInputRepresentation": {
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterOptionInputRepresentation"];
            /** @description Show or hide filter widget label. */
            isLabelHidden?: boolean;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterWidgetStylesInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Output representation for text layout properties. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockTextRepresentation": {
            halign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextHorizontalAlignmentType"];
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
            valign?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextVerticalAlignmentType"];
            /** @description Whether text wraps to multiple lines. */
            wrap?: boolean;
        };
        /** @description Representation of a parameter widget initialValues. */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterInitialValuesRepresentation": {
            /** @description The parameter selection details */
            details?: unknown;
        };
        /**
         * FollowedAsset
         * @description An asset that a user or group follows, including its type and the time range of interest.
         */
        "sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.SemanticSubMetricAssetRepresentation"];
        /**
         * MetricDetails
         * @description A navigation destination that opens the details page for a metric in Tableau Next.
         */
        "sfdc.unified.analytics.connect.api.output.actions.MetricDetailsNavigateActionDestinationRepresentation": {
            target?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.MetricDetailsNavigateActionTarget"];
            /**
             * @description The shape of `destination` when `type` is `MetricDetails`.
             * @enum {string}
             */
            type?: "MetricDetails";
        };
        /**
         * Range
         * @description A range filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRangeFilterInfoRepresentation": {
            /** @description The begin value of the range category filters. */
            beginValue?: unknown;
            /** @description The end value of the range category filters. */
            endValue?: unknown;
            /**
             * @description The shape of this object when `type` is `Range`.
             * @enum {string}
             */
            type: "Range";
            /** @description Whether to include nulls in the range category filters. */
            includeNulls?: boolean;
            /** @description Whether to show only relevant values in the range category filters. */
            showOnlyRelevantValues?: boolean;
        };
        /** @description Representation of a field for an action. */
        "sfdc.unified.analytics.connect.api.input.actions.RecordActionFieldInputRepresentation": {
            /** @description Fieldkey of the field. */
            fieldKey?: string;
        };
        /**
         * @description Filter details output representation.
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.FilterDetailsRepresentation": {
            /** @description Filter field name. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterOperatorType"];
            /** @description Filter values. */
            values?: unknown;
        };
        /** @description Input representation for mark-specific tooltip style. */
        "sfdc.unified.analytics.connect.api.input.VisualizationTooltipMarkStyleInputRepresentation": {
            /** @description Custom text sequence for the tooltip. */
            customText?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationTooltipTextValueInputRepresentation"][];
            /** @description Whether to show actions in the tooltip. */
            showActions?: boolean;
        };
        /**
         * MetricWidget
         * @description A set of style settings for a metric widget in a Tableau Next dashboard, including its text color.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetStylesInputRepresentation": {
            /** @description Text color of all metric widget elements */
            textColor?: string;
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * OrderedQuickTableCalcPercentile
         * @description A percentile quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcPercentileInputRepresentation": {
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType"];
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * @description The type of application domain.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.share.ApplicationDomainEnum": "DataCloud" | "Tableau";
        /**
         * Field
         * @description A sort by field for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationByFieldSortRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSortRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationNestedSortRepresentation"];
        /**
         * Custom
         * @description A custom axis range style for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationCustomAxisRangeStyleInputRepresentation": {
            end?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisCustomRangeExtentInputRepresentation"];
            start?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisCustomRangeExtentInputRepresentation"];
            /**
             * @description The shape of `range` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /**
         * @description Datastream Enrichment Representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.dataorchestration.DataOrchestrationDatastreamEnrichmentRepresentation": {
            /** @description Last refresh status */
            lastRefreshStatus?: string;
            /** @description Last refresh time (ISO 8601 format) */
            lastRefreshTime?: string;
            /** @description Stream type */
            streamType?: string;
        };
        /**
         * @description Shared Record Input Item Representation
         *
         *     _Updated April 2026: added `accessTypeFilter`, `filterByRecipientType`, `recipientSearchTerm`._
         */
        "sfdc.unified.analytics.connect.api.input.share.SetupRecordShareInputRepresentation": {
            /**
             * @description Access Type Filter
             *
             *     _Available April 2026 and later._
             */
            accessTypeFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"][];
            /**
             * @description Recipients Type Filter
             *
             *     _Available April 2026 and later._
             */
            filterByRecipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectRecipientTypeEnum"][];
            /** @description Limit parameter value */
            limit?: number;
            /** @description Offset parameter value */
            offset?: number;
            orderBy?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupRecordShareOrderByEnum"];
            /**
             * @description Recipient search term
             *
             *     _Available April 2026 and later._
             */
            recipientSearchTerm?: string;
            /** @description Id of the record */
            recordId?: string;
            /** @description Sort Order value, default is descending */
            sortOrder?: string;
            /** @description Id of the User/Group */
            userOrGroupId?: string;
        };
        /** @description Output representation for common style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationCommonStyleRepresentation": {
            format?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDataFormatRepresentation"];
        };
        /** @description Output representation for flow mark styles in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFlowMarkStylesRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
            };
            links?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
            nodes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStyleRepresentation"];
        };
        /**
         * AssetReference
         * @description An asset reference.
         */
        "sfdc.unified.analytics.connect.api.output.AssetReferenceRepresentation": {
            /**
             * Format: url
             * @description The URL of the asset.
             */
            url?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * MovingSum
         * @description A moving-sum quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingSumInputRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingSum`.
             * @enum {string}
             */
            type: "MovingSum";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /**
         * InputCard
         * @description A set of configuration parameters for an input-card parameter widget in a Tableau Next dashboard, including its parameter name, value source, and label visibility.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.InputCardParameterWidgetParametersRepresentation": {
            /** @description property that shows or hides the label on a parameter widget */
            isLabelHidden?: boolean;
            /** @description parameter name parameter value for the parameter widget */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation"];
            /** @description Source for values used in input, it can be used for eg: autocomplete */
            valueSource?: unknown;
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterOptionRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Input representation for common banding style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationBandingCommonStyleInputRepresentation": {
            application?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBandingApplicationStyleInputRepresentation"];
            /** @description The color for the banding common style. */
            color?: string;
        };
        /**
         * @description The axis range type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisStyleRangeType": "Auto" | "Custom";
        /** @description Represents parameters of a record action. */
        "sfdc.unified.analytics.connect.api.output.actions.RecordActionFieldRepresentation": {
            /** @description Represents visualization field key */
            fieldKey?: string;
        };
        /**
         * RunningMax
         * @description A running-max quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningMaxInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `RunningMax`.
             * @enum {string}
             */
            type: "RunningMax";
        };
        /** @description A range style for a visualization axis. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationAxisRangeStyleRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAutoAxisRangeStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationCustomAxisRangeStyleRepresentation"];
        /** @description Represents widget common parameter representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetParametersRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.BaseFilterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningCompWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.metric.MetricWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.BaseParameterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.summary.SummaryWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetParametersRepresentation"];
        /**
         * Toggle
         * @description A set of configuration parameters for a toggle parameter widget in a Tableau Next dashboard, used when the view type is toggle.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ToggleParameterWidgetParametersInputRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleDefaultStyleInputRepresentation"];
            /** @description Parameter Name */
            parameterName?: string;
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleSelectedStyleInputRepresentation"];
            textStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.ToggleTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterWidgetStylesInputRepresentation"];
            parameterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterOptionInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description The wrapper of date dimension field. */
        "sfdc.unified.analytics.connect.api.output.VisualizationForecastDimensionFieldRepresentation": {
            dateDim?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationForecastDateDimensionFieldRepresentation"];
        };
        /** @description A list of Slack recipients for a data alert, each with a recipient type. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertSlackRecipientsInputRepresentation": {
            /** @description list of Slack recipients with their types */
            recipients?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertSlackRecipientInputRepresentation"][];
        };
        /**
         * @description Enum for different data types supported.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDataTypeEnum": "Boolean" | "Number" | "Percent" | "Text";
        /** @description A name-and-value pair for a custom view parameter. */
        "sfdc.unified.analytics.connect.api.output.CustomViewParameterDetailsRepresentation": {
            /** @description The name of the parameter. */
            name?: string;
            /** @description The value of the parameter. */
            value?: string;
        };
        /** @description Output representation for custom range extent in a visualization axis. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAxisCustomRangeExtentRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisStyleRangeType"];
            /** @description Value for start/end in the custom axis range. */
            value?: unknown;
        };
        /** @description Text widget parameters definition input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetContentAttributeInputRepresentation": {
            /** @description Align attribute of text widget */
            align?: string;
            /** @description Background attribute of text widget */
            background?: string;
            /** @description Bold of the text widget */
            bold?: boolean;
            /** @description Color of the text widget */
            color?: string;
            /** @description Italic attribute of text widget */
            italic?: boolean;
            /** @description Link attribute of text widget */
            link?: string;
            /** @description List type attribute of text widget (e.g. bullet, ordered) */
            list?: string;
            /** @description Size of the text widget */
            size?: string;
            /** @description Strike attribute of text widget */
            strike?: boolean;
            /** @description Underline attribute of text widget */
            underline?: boolean;
        };
        /**
         * MetricDetails
         * @description A navigation destination that opens the details page for a metric in Tableau Next.
         */
        "sfdc.unified.analytics.connect.api.input.actions.MetricDetailsNavigateActionDestinationInputRepresentation": {
            target?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.MetricDetailsNavigateActionTargetInput"];
            /**
             * @description The shape of `destination` when `type` is `MetricDetails`.
             * @enum {string}
             */
            type?: "MetricDetails";
        };
        /** @description A visualization field. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldRepresentation": {
            adHocCalc?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AdHocCalculationRepresentation"];
            computeUsing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldComputeUsingRepresentation"];
            displayCategory?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldDisplayCategoryType"];
            /** @description The semantic name of the field. */
            fieldName?: string;
            function?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldFunctionType"];
            /** @description The hierarchy level of the field. */
            hierarchyLevel?: number;
            /** @description The hierarchy name of the field. */
            hierarchyName?: string;
            /**
             * Format: Id
             * @description The ID of the visualization field.
             */
            id?: string;
            /** @description The label of the field. */
            label?: string;
            /** @description The fieldKey of the visualization field used as the latitude or Y coordinate. */
            latitudeOrY?: string;
            /** @description The fieldKey of the visualization field used as the longitude or X coordinate. */
            longitudeOrX?: string;
            /** @description The semantic name of the object. */
            objectName?: string;
            /** @description The position name of the map position field. */
            positionName?: string;
            positional?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseMapPositionalRepresentation"];
            quickTableCalc?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationFieldQuickTableCalcRepresentation"];
            role?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldRoleType"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldType"];
        };
        /**
         * @description Enum for measure conditional formatting operator types.
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConditionalFormattingOperatorEnum": "Between" | "Equals" | "GreaterThan" | "GreaterThanOrEqualTo" | "LessThan" | "LessThanOrEqualTo";
        /**
         * PaneDownThenAcross
         * @description The pane-down-then-across computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingPaneDownThenAcrossInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `PaneDownThenAcross`.
             * @enum {string}
             */
            type: "PaneDownThenAcross";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /**
         * AnalyticsUser
         * @description A Tableau Next user.
         */
        "sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation": {
            /** @description The user's alias. */
            alias?: string | null;
            /** @description Specifies whether the user is active (`true`) or not (`false`). */
            isActive?: boolean | null;
            /**
             * Format: url
             * @description The Chatter profile photo of the user.
             */
            profilePhotoUrl?: string | null;
            /** @description The username of the user. */
            username?: string | null;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /** @description A forecast for a visualization, computed using a Holt-Winters or ridge regression model. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationForecastModelInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHoltWintersForecastInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRidgeRegressionForecastInputRepresentation"];
        /**
         * Filter
         * @description The parameters for a filter action, including the filter to apply and its source field and object.
         */
        "sfdc.unified.analytics.connect.api.input.actions.FilterActionParametersInputRepresentation": {
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.FilterActionFilterInputRepresentation"];
            /** @description Source field API name */
            sourceFieldAPIName?: string;
            /** @description Source object API name */
            sourceObjectAPIName?: string;
        };
        /** @description Representation for legends in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationLegendRepresentation": {
            /** @description Whether the legend is visible. */
            isVisible?: boolean;
            position?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLegendPositionType"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLegendTitleRepresentation"];
        };
        /**
         * @description Input representation for unified filter
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterInputRepresentation": {
            /** @description The list of fields for the unified filter */
            fields?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterFieldInputRepresentation"][];
            /** @description For In operator: set to true if values include null, otherwise undefined. For NotIn operator: set to false if values include null, otherwise undefined. */
            includeNulls?: boolean;
            measureCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterMeasureCriteriaInputRepresentation"];
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            topBottomCriteria?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterTopBottomCriteriaInputRepresentation"];
            /** @description The values for the unified filter */
            values?: unknown[];
        };
        /**
         * DashboardPageWidget
         * @description The grid placement of a widget instance on a Tableau Next dashboard page.
         */
        "sfdc.unified.analytics.connect.api.input.dashboard.DashboardPageWidgetInputRepresentation": {
            /** @description The colspan. */
            colspan?: number;
            /** @description The column. */
            column?: number;
            /** @description The row. */
            row?: number;
            /** @description The rowspan. */
            rowspan?: number;
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * @description Details of a marketplace listing
         *
         *     _Available April 2026 and later._
         */
        "sfdc.analyticsdashboard.connect.api.output.MarketplaceListingDetailRepresentation": {
            /** @description The ID of asset */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.analyticsdashboard.connect.api.enums.MarketplaceAssetTypeEnum"];
            /** @description The version of the asset */
            assetVersion?: string;
            /** @description The ID of marketplace listings */
            id?: string;
        };
        /** @description The details of a filter. */
        "sfdc.unified.analytics.connect.api.input.FilterDetailsInputRepresentation": {
            /** @description The filter field name. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterOperatorType"];
            /** @description The filter values. */
            values?: unknown;
        };
        /**
         * @description The position type of the legend.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLegendPositionType": "Bottom" | "Left" | "Right" | "Top";
        /**
         * @description Input representation for unified filter top/bottom criteria
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.common.filters.UnifiedSemanticFilterTopBottomCriteriaInputRepresentation": {
            /** @description The expression to order by for top/bottom determination */
            expression?: string;
            /** @description Whether this is a top or bottom filter */
            isTop?: boolean;
            nullValuesPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.common.filters.ConnectUnifiedSemanticFilterNullValuesPositionType"];
            /** @description The limit for top/bottom filtering */
            topBottomLimit?: number;
        };
        /**
         * Nested
         * @description A nested sort by field for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationNestedSortRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortType"];
            /** @description The field to apply the sort by. */
            byField?: string;
        };
        /**
         * Map
         * @description A style for a map-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapStyleRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationBackgroundRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsStyleRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMapMarkStylesRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation"];
        };
        /** @description A sort for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationSortRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAlphabeticSortRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldSortRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationNestedSortRepresentation"];
        /**
         * Table
         * @description A style for a table-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationTableStyleRepresentation": {
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableFieldLabelsStyleRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTableStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTableHeaderStyleRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStylesRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation"];
        };
        /** @description Input representation for radial headers style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialHeadersStyleInputRepresentation": {
            /** @description The field header styles for the radial visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderStyleInputRepresentation"];
            };
        };
        /**
         * Dashboard
         * @description A navigation destination that targets a specific dashboard page in Tableau Next.
         */
        "sfdc.unified.analytics.connect.api.output.actions.DashboardNavigateActionDestinationRepresentation": {
            /** @description PageName */
            pageName?: string;
            /** @description Navigate to target */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Dashboard`.
             * @enum {string}
             */
            type?: "Dashboard";
        };
        /** @description Representation for a parameter publisher */
        "sfdc.unified.analytics.connect.api.output.ParameterPublisherRepresentation": {
            /** @description The parameter name published by this widget */
            parameterName?: string;
            /** @description The widget ID of the parameter publisher */
            widgetId?: string;
        };
        /**
         * MovingMin
         * @description A moving-min quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingMinRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingMin`.
             * @enum {string}
             */
            type: "MovingMin";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /**
         * Nested
         * @description A nested sort for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationNestedSortInputRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortType"];
            /** @description The field to apply the sort by. */
            byField?: string;
        };
        /**
         * Map
         * @description A map background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundInputRepresentation": {
            domain?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundDomainInputRepresentation"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationMapBackgroundStyleInputRepresentation"];
            /** @description The map background style name. */
            styleName?: string;
            /** @description The map background style url. */
            styleUrl?: string;
            /**
             * @description The shape of `background` when `type` is `Map`.
             * @enum {string}
             */
            type: "Map";
        };
        /**
         * Table
         * @description The Table layout visual specification for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationTableLayoutVisualSpecInputRepresentation": {
            /** @description The groups for the visualization. */
            groups?: string[];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarksInputRepresentation"];
            /** @description The rows for the visualization. */
            rows?: string[];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTableStyleInputRepresentation"];
            /**
             * @description The shape of this object when `layout` is `Table`.
             * @enum {string}
             */
            layout: "Table";
            /** @description The legends for the visualization. */
            legends?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLegendInputRepresentation"];
            };
            stylesheet?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationStyleSheetInputRepresentation"];
        };
        /** @description Data alert content generated as a brief from one or more semantic data models, guided by a set of generation instructions. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertBriefContentRepresentation": {
            /** @description Ids or API names of the semantic data models used to generate the brief */
            modelApiNameOrIdList?: string[];
            /** @description Extensible JSON document of LLM instructions used to generate the brief */
            skillInstruction?: string;
        };
        /** @description Output representation for BAN (big number) font style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFontBanStyleRepresentation": {
            /** @description The color for the BAN font. */
            color?: string;
        };
        /** @description Widget parameter input representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetParametersInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.button.ButtonWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.container.ContainerWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.BaseFilterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.image.ImageWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningCompWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.navigation.NavigationWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.parameter.BaseParameterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.summary.SummaryWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationWidgetParametersInputRepresentation"];
        /**
         * Field
         * @description A sort by field for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSortInputRepresentation": {
            /** @description The field key for the sort. */
            fieldKey?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortType"];
            /** @description The field to apply the sort by. */
            byField?: string;
        };
        /** @description Output representation for header style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderStyleRepresentation": {
            defaults?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationCommonStyleRepresentation"];
            /** @description The hidden values for the header. */
            hiddenValues?: string[];
            /** @description Whether the header is visible. */
            isVisible?: boolean;
            /** @description Whether to show missing values. */
            showMissingValues?: boolean;
            textDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationTextDirectionType"];
        };
        /**
         * AnalyticsImage
         * @description An image widget for a Tableau Next dashboard, sourced from a data source.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.image.AnalyticsImageWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetParametersRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.WidgetDataSourceRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * AnalyticsWidgetDynamicToken
         * @description A dynamic token for a Tableau Next dashboard widget, resolved from a data source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation": {
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation"];
            /** @description The specification of the dynamic token. */
            tokenSpec?: {
                [key: string]: Record<string, never>;
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsDynamicTokenTypeEnum"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Text
         * @description A set of style settings for a text widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetStylesRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /**
         * @description The line or border dash style type for the visualization stylesheet.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleLineStyleType": "Dashed" | "Dotted" | "Solid";
        /**
         * VisualizationDataSource
         * @description A data source for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationDataSourceInputRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationDataSourceType"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /** @description Flow layout specific input representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFlowMarksInputRepresentation": {
            /** @description The mark specifications per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
            };
            links?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
            nodes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
        };
        /**
         * @description Text style in a rendered toggle widget
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.ToggleTextStyleInputRepresentation": {
            /** @description AlignmentX on a toggle widget */
            alignmentX?: string;
            /** @description AlignmentY on a toggle widget */
            alignmentY?: string;
            /** @description Font size on a toggle widget */
            fontSize?: number;
        };
        /**
         * @description Represents a measure and dimension conditional formatting bucket for text widgets
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.ConditionalFormattingBucketRepresentation": {
            attributes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetContentAttributeRepresentation"];
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConditionalFormattingOperatorEnum"];
            /** @description The value(s) to compare against */
            value?: unknown[];
        };
        /** @description A list of Slack recipients for a data alert, each with a recipient type. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertSlackRecipientsRepresentation": {
            /** @description list of Slack recipients with their types */
            recipients?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertSlackRecipientRepresentation"][];
        };
        /** @description An input object specifying the assets whose dependents should be listed. */
        "sfdc.unified.analytics.dependents.connect.api.input.AssetDependentsQueryInputRepresentation": {
            /** @description Required. The assets whose dependents should be listed. */
            assets: components["schemas"]["sfdc.unified.analytics.dependents.connect.api.input.AssetReferenceInputRepresentation"][];
        };
        /**
         * PropertyToken
         * @description A property token text value in a tooltip text sequence for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationPropertyTokenTextValueInputRepresentation": {
            tokenType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationPropertyTokenType"];
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTextStylePropertiesInputRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `PropertyToken`.
             * @enum {string}
             */
            type: "PropertyToken";
        };
        /** @description An access grant for a record, specifying the user or group and access type. */
        "sfdc.unified.analytics.connect.api.input.share.SetupRecordAccessItemInputRepresentation": {
            accessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"];
            applicationDomain?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.ApplicationDomainEnum"];
            setupObjectType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectTypeEnum"];
            /** @description The ID of the User/Group. */
            userOrGroupId?: string;
        };
        /**
         * MovingMax
         * @description A moving-max quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldMovingCalculationQuickTableCalcMovingMaxInputRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingMax`.
             * @enum {string}
             */
            type: "MovingMax";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description A list of Microsoft Teams recipients for a data alert, each with a recipient type. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertMsTeamsRecipientsInputRepresentation": {
            /** @description list of Microsoft Teams recipients with their types */
            recipients?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertMsTeamsRecipientInputRepresentation"][];
        };
        /** @description A dashboard custom view selection. */
        "sfdc.unified.analytics.connect.api.output.CustomViewSelectionRepresentation": {
            details?: components["schemas"]["sfdc.unified.analytics.connect.api.output.CustomViewSelectionDetailsRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DataSourceRepresentation"];
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
        };
        /**
         * @description Different navigate action types.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectNavigateActionDestinationTypeEnum": "Dashboard" | "MetricDetails" | "Page" | "Url";
        /**
         * RunningAvg
         * @description A running-average quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningAvgInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `RunningAvg`.
             * @enum {string}
             */
            type: "RunningAvg";
        };
        /**
         * @description The relative date filter period unit type of the visualization's view specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationRelativeDateFilterPeriodUnitType": "Day" | "Hour" | "Minute" | "Month" | "Quarter" | "Week" | "Year";
        /** @description Represents the forecast or 'to' date in a visualization context. */
        "sfdc.unified.analytics.connect.api.input.VisualizationForecastToInputRepresentation": {
            forecastInterval?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationForecastIntervalInputRepresentation"];
        };
        /**
         * RankModified
         * @description A modified-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankModifiedRepresentation": {
            /**
             * @description The shape of this object when `type` is `RankModified`.
             * @enum {string}
             */
            type: "RankModified";
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /** @description Representation of a initialValues. */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.FilterInitialValuesRepresentation": {
            details?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.FilterDetailsRepresentation"];
        };
        /**
         * @description The computation method for a table calculation on a visualization field.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldTableCalcComputeUsingType": "Cell" | "PaneAcross" | "PaneAcrossThenDown" | "PaneDown" | "PaneDownThenAcross" | "TableAcross" | "TableAcrossThenDown" | "TableDown" | "TableDownThenAcross";
        /**
         * TextWidget
         * @description A set of style settings for a text widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.text.TextWidgetStylesInputRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description A dashboard saved views collection. */
        "sfdc.unified.analytics.connect.api.output.DashboardCustomViewCollectionRepresentation": {
            /** @description The list of saved views. */
            customViews?: components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"][];
        };
        /** @description A collection of record access mapping. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordAccessCollectionRepresentation": {
            /** @description The access Type filter. */
            filterByAccessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"][];
            /** @description The recipient type filters applied. */
            filterByRecipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectRecipientTypeEnum"][];
            /** @description The user or group ID filter. */
            filterByUserOrGroupId?: string;
            /** @description The result limit. */
            limit?: number;
            /** @description The result offset. */
            offset?: number;
            orderBy?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupRecordShareOrderByEnum"];
            /** @description The total count of owners for the record. */
            ownerCount?: number;
            /** @description The list of shares being returned for a record. */
            recordAccessMappings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordAccessRepresentation"][];
            /** @description The ID for record. */
            recordId?: string;
            /** @description The sort order (ASC/DESC). */
            sortOrder?: string;
        };
        /** @description Common text style representation for list widget label or value */
        "sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetTextStylesRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetTextStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.parameter.ListParameterWidgetTextStyleRepresentation"];
        /**
         * AnalyticsButton
         * @description A button widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.button.AnalyticsButtonWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * ListFilter
         * @description A text style for a list filter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation": {
            /** @description Font color as a hex string. */
            fontColor?: string;
            /** @description Font size in pixels. */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting). */
            textStyle?: string[];
        };
        /** @description Output representation for mark size style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkSizeStyleRepresentation": {
            /** @description Whether the size value is automatic. */
            isAutomatic?: boolean;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationMarkSizeType"];
            /** @description The size value. */
            value?: number;
        };
        /**
         * RunningSum
         * @description A running-sum quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcRunningSumInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `RunningSum`.
             * @enum {string}
             */
            type: "RunningSum";
        };
        /**
         * @description The type of asset that can be added to a workspace.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum": "AnalyticsDashboard" | "AnalyticsVisualization" | "Flexipage" | "MktCalculatedInsightObject" | "MktDataConnection" | "MktDataLakeObject" | "MktDataModelObject" | "MktDataTransformSetup" | "SemanticModel";
        /** @description Representation for header mark encoding in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkEncodingRepresentation": {
            /** @description The reference to the field to which the header mark encoding is applied. */
            fieldKey?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkEncodingType"];
        };
        /**
         * NavigationWidgetLabelStyle
         * @description A label style for a navigation widget, including its alignment and font size.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetLabelStyleRepresentation": {
            /** @description Horizontal alignment */
            alignmentX?: string;
            /** @description Vertical alignment */
            alignmentY?: string;
            /** @description Font size */
            fontSize?: number;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * Band
         * @description A reference band for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationReferenceBandInputRepresentation": {
            endLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInfoInputRepresentation"];
            startLine?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationReferenceLineInfoInputRepresentation"];
            /** @description The field key of the reference line in the visualization. */
            fieldKey?: string;
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineScopeType"];
            /**
             * @description The shape of `referenceLines` when `type` is `Band`.
             * @enum {string}
             */
            type: "Band";
        };
        /**
         * None
         * @description A hidden label for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineNoneLabelRepresentation": {
            /**
             * @description The shape of `label` when `type` is `None`.
             * @enum {string}
             */
            type: "None";
        };
        /**
         * PropertyToken
         * @description A property-token text value in a visualization tooltip.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationPropertyTokenTextValueRepresentation": {
            tokenType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationPropertyTokenType"];
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTextStylePropertiesRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `PropertyToken`.
             * @enum {string}
             */
            type: "PropertyToken";
        };
        /** @description A generic data source. */
        "sfdc.unified.analytics.connect.api.output.DataSourceRepresentation": {
            /** @description The ID of the data source. */
            id?: string;
            /** @description The label of the data source. */
            label?: string;
            /** @description The name of the data source. */
            name?: string;
        };
        /**
         * SdmFieldToken
         * @description An SDM-field-token text value in a visualization tooltip.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationSdmFieldTokenTextValueRepresentation": {
            /** @description The API name of the SDM field. */
            apiName?: string;
            tokenType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSdmFieldTokenType"];
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTextStylePropertiesRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `SdmFieldToken`.
             * @enum {string}
             */
            type: "SdmFieldToken";
        };
        /** @description Input representation for BAN (big number) style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationBanStyleInputRepresentation": {
            /** @description The BAN style per field, keyed by field key. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFieldBanStyleInputRepresentation"];
            };
        };
        /**
         * PercentOfTotal
         * @description A percent-of-total quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldSimpleQuickTableCalcPercentOfTotalInputRepresentation": {
            /**
             * @description The shape of `quickTableCalc` when `type` is `PercentOfTotal`.
             * @enum {string}
             */
            type: "PercentOfTotal";
        };
        /**
         * Text
         * @description A plain-text value in a visualization tooltip.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationBasicTextValueRepresentation": {
            /** @description The plain text string. */
            value?: string;
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTextStylePropertiesRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `Text`.
             * @enum {string}
             */
            type: "Text";
        };
        /**
         * @description Supported sort
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.resource.follow.SortOrder": "Asc" | "Desc";
        /** @description A single component installed as part of a package version. */
        "sfdc.analyticsdashboard.connect.api.output.PackageComponentRepresentation": {
            /** @description The ID of the component. */
            componentId?: string;
            /** @description The type of the component (e.g. DominoTemplate, DataKit). */
            componentType?: string;
        };
        /** @description A set of background image settings for a dashboard in Tableau Next. */
        "sfdc.unified.analytics.connect.api.input.common.BackgroundParametersInputRepresentation": {
            /** @description The horizontal alignment of the background image. */
            alignmentX?: string;
            /** @description The vertical alignment of the background image. */
            alignmentY?: string;
            imageScale?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ImageScaleTypeEnum"];
            /** @description The background image opacity (0-100). */
            opacity?: number;
        };
        /**
         * Radial
         * @description The style for a Radial-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialStyleInputRepresentation": {
            axis?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisStylesInputRepresentation"];
            ban?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBanStyleInputRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationEncodingStylesInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialFieldLabelsStyleInputRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialHeadersStyleInputRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationLineStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationRadialMarkStylesInputRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationShadingStyleInputRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTitleStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipStyleInputRepresentation"];
        };
        /**
         * Vizql
         * @description A set of style settings for a VizQL visualization, covering its axis, fonts, headers, shading, and titles.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationVizqlStyleRepresentation": {
            axis?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisStylesRepresentation"];
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsStyleRepresentation"];
            fit?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationVizqlStyleFitType"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAllHeadersStyleRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStylesRepresentation"];
            /** @description The reference line styles for the visualization. */
            referenceLines?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineStyleRepresentation"];
            };
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            /** @description Whether to show data placeholder. */
            showDataPlaceholder?: boolean;
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTotalsStyleRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation"];
        };
        /**
         * Interaction
         * @description An interaction that triggers an action, such as a navigation or filter, in response to an event on a Tableau Next widget.
         */
        "sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation": {
            actionType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInteractionTypeEnum"];
            /** @description The action asset ID. */
            assetId?: string;
            eventType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectInteractionEventTypeEnum"];
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.BaseInteractionParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /** @description A base set of parameters for an interaction action in Tableau Next. */
        "sfdc.unified.analytics.connect.api.input.actions.BaseInteractionParametersInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.FilterActionParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.FlowActionParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.NavigateActionParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.ParameterActionParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.RecordActionParametersInputRepresentation"];
        /**
         * @description The date unit type in axis ticks of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationAxisTicksDateUnitType": "Day" | "Hour" | "Minutes" | "Month" | "Quarter" | "Seconds" | "Week" | "Year";
        /** @description A group of visualization filters combined with filter logic. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFilterGroupRepresentation": {
            /** @description The filter logic expression (e.g. "1 AND 2" or "1 OR 2"). */
            filterLogic?: string;
            /** @description The list of filters in this group. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFilterRepresentation"][];
        };
        /**
         * Grid
         * @description A grid background for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationGridBackgroundRepresentation": {
            domain?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationGridBackgroundDomainRepresentation"];
            /**
             * @description The shape of `background` when `type` is `Grid`.
             * @enum {string}
             */
            type: "Grid";
        };
        /** @description A permissions of the user on an asset. */
        "sfdc.unified.analytics.connect.api.output.PermissionsRepresentation": {
            /** @description Specifies whether the user can delete the asset (`true`) or not (`false`). */
            delete?: boolean;
            /** @description Specifies whether the user can edit the asset (`true`) or not (`false`). */
            edit?: boolean;
            /** @description Specifies whether the user can share the asset (`true`) or not (`false`). */
            share?: boolean;
            /** @description Specifies whether the user can view the asset (`true`) or not (`false`). */
            view?: boolean;
        };
        /** @description An individual mark representation with field information and values. */
        "sfdc.unified.analytics.connect.api.output.MarkSelectionRepresentation": {
            /** @description The array of field IDs with metadata. */
            fieldIds?: components["schemas"]["sfdc.unified.analytics.connect.api.output.MarkSelectionFieldRepresentation"][];
            /** @description The array of values corresponding to the field selections. */
            values?: unknown[];
        };
        /** @description The style for the row direction of view headers in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecHeaderRowsDirectionStyleInputRepresentation": {
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsSizingStyleInputRepresentation"];
        };
        /** @description A no-op receiver for a data alert, meaning notifications are not delivered anywhere. */
        "sfdc.unified.analytics.connect.api.output.dataAlert.DataAlertNoOpReceiversRepresentation": Record<string, never>;
        /**
         * @description The ID of marketplace listings
         *
         *     _Available April 2026 and later._
         */
        "sfdc.analyticsdashboard.connect.api.output.MarketplaceListingRepresentation": {
            /** @description The ID of marketplace listings */
            id?: string;
        };
        /**
         * TypedAssetReference
         * @description A typed reference to an asset in a Tableau Next workspace.
         */
        "sfdc.unified.analytics.connect.api.output.workspace.TypedAssetReferenceRepresentation": {
            /** @description The asset API developer name. */
            assetDevName?: string;
            /** @description The asset in the workspace. */
            assetId?: string;
            /** @description The asset label name. */
            assetLabel?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectWorkspaceAssetTypeEnum"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
        };
        /** @description Identifies an ephemeral, unsaved Tableau Next visualization to download, by its answer artifacts and visualization metadata. */
        "sfdc.unified.analytics.connect.api.input.download.DownloadEphemeralVisualizationAssetInputRepresentation": {
            /** @description Answer artifacts JSON for the ephemeral visualization */
            answerArtifacts?: string;
            /** @description Visualization metadata JSON for the ephemeral visualization */
            visualizationMetadata?: string;
        };
        /** @description A data source referenced by a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferencedDataSourceRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationSemanticModelDataSourceRepresentation"];
        /** @description A subMetric Info Representation. */
        "sfdc.unified.analytics.connect.api.output.follow.SubMetricInfoOutputRepresentation": {
            goal?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticGoalOutputRepresentation"];
            /** @description Specifies whether the sub-metric is followed (`true`) or not (`false`). */
            isFollowed?: boolean;
            metric?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.metrics.SemanticMetricOutputRepresentation"];
            subMetric?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticSubMetricOutputRepresentation"];
        };
        /** @description Identifies a Tableau Next visualization to download, by its API name and capture mode. */
        "sfdc.unified.analytics.connect.api.input.download.DownloadVisualizationAssetInputRepresentation": {
            /** @description Access token for API calls (required for HeadlessCapture and HtmlBundleCapture modes). POC only - will be replaced with proper authentication. */
            accessToken?: string;
            /** @description API name for the visualization */
            visualizationName?: string;
            vizCaptureMode?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.VizCaptureModeEnum"];
        };
        /** @description Input representation for all headers style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAllHeadersStyleInputRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsDirectionStyleInputRepresentation"];
            /** @description The field header styles for the visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderStyleInputRepresentation"];
            };
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsDirectionStyleInputRepresentation"];
        };
        /**
         * Navigation
         * @description A set of configuration parameters for a navigation widget in a Tableau Next dashboard, including its navigation items, view type, and label styles.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetParametersRepresentation": {
            defaultStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"];
            labelStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetLabelStyleRepresentation"];
            /** @description Navigation items (overrides only) */
            navigationItems?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationItemRepresentation"][];
            selectedStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"];
            /** @description View type of the navigation widget */
            viewType?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"];
        };
        /**
         * Url
         * @description A navigation destination that opens an external URL.
         */
        "sfdc.unified.analytics.connect.api.input.actions.UrlNavigateActionDestinationInputRepresentation": {
            /** @description Destination target */
            target?: string;
            /**
             * @description The shape of `destination` when `type` is `Url`.
             * @enum {string}
             */
            type?: "Url";
        };
        /** @description Parameter Publisher Input Representation in unified analytics */
        "sfdc.unified.analytics.connect.api.input.ParameterPublisherInputRepresentation": {
            /** @description The parameter name published by this widget */
            parameterName?: string;
            /** @description The widget ID of the parameter publisher */
            widgetId?: string;
        };
        /** @description Input representation for mark color style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkColorStyleInputRepresentation": {
            /** @description The color for a mark. */
            color?: string;
        };
        /**
         * Visualization
         * @description A set of configuration parameters for a visualization widget in a Tableau Next dashboard, including its legend position and shared state.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetParametersRepresentation": {
            legendPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLegendPositionType"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            /** @description ShareState in visualizationWidgetParameter */
            shareState?: boolean;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.visualization.VisualizationWidgetStylesRepresentation"];
        };
        /** @description Output representation for shading style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation": {
            /** @description The background color for the shading. */
            backgroundColor?: string;
            banding?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBandingStyleRepresentation"];
        };
        /** @description A user. */
        "sfdc.unified.analytics.connect.api.output.AnalyticsAssetOwnerRepresentation": {
            /** @description The user ID. */
            id?: string;
            /** @description The user's name. */
            name?: string;
        };
        /**
         * Button
         * @description A set of configuration parameters for a button widget in a Tableau Next dashboard, including its text, alignment, and font size.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetParametersRepresentation": {
            /** @description Button text alignmentX */
            alignmentX?: string;
            /** @description Button text alignmentY */
            alignmentY?: string;
            /** @description Button font size */
            fontSize?: number;
            hoverStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"];
            symbol?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetIconRepresentation"];
            /** @description Text value of button */
            text?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.button.ButtonWidgetStylesRepresentation"];
        };
        /**
         * @description The type of the dashboard saved view.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.DashboardCustomViewType": "Private" | "Public";
        /** @description The specification for a visualization view. */
        "sfdc.unified.analytics.connect.api.input.VisualizationViewSpecInputRepresentation": {
            /** @description The advanced dimension filters (no filter logic supported). */
            advancedDimensionFilters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterInputRepresentation"][];
            aggregateFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterGroupInputRepresentation"];
            contextFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterGroupInputRepresentation"];
            filter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterGroupInputRepresentation"];
            /** @description The filter information for the visualization. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterInputRepresentation"][];
            grandTotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsInputRepresentation"];
            sortOrders?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationSortOrdersInputRepresentation"];
            /** @description The sort information for the visualization. */
            sorts?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationSortInputRepresentation"][];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationViewSpecStyleInputRepresentation"];
            subtotals?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTotalsInputRepresentation"];
            tableCalcFilter?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterGroupInputRepresentation"];
        };
        /**
         * @description Type of a Slack recipient for a data alert
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.input.dataAlert.SlackRecipientTypeEnum": "SalesforceUser";
        /** @description Output representation for banding style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationBandingStyleRepresentation": {
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBandingCommonStyleRepresentation"];
        };
        /** @description A preview of a dashboard template in the analytics library, including its badge and preview images. */
        "sfdc.unified.analytics.connect.api.output.analyticsLibrary.AnalyticsLibraryTemplateRepresentation": {
            /** @description The badge icon configured for template */
            templateBadge?: string;
            /** @description The preview images configured for the template */
            templatePreviews?: string[];
        };
        /** @description A data source for a dashboard widget. */
        "sfdc.unified.analytics.connect.api.input.widgets.WidgetDataSourceInputRepresentation": {
            /** @description The database record ID of the asset. */
            id?: string;
            /** @description The name of the data source that this filter widget is associated with. */
            name?: string;
        };
        /**
         * PercentDifference
         * @description A percent-difference quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldSimpleQuickTableCalcPercentDifferenceRepresentation": {
            /**
             * @description The shape of this object when `type` is `PercentDifference`.
             * @enum {string}
             */
            type: "PercentDifference";
        };
        /** @description Representation for mark stack in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationMarkStackRepresentation": {
            /** @description Whether the mark stack should be applied by default. */
            isAutomatic?: boolean;
            /** @description Whether the mark stack should be stacked. */
            isStacked?: boolean;
        };
        /**
         * Record
         * @description The parameters for a record action, including the record ID, the field to act on, and the Salesforce actions to trigger.
         */
        "sfdc.unified.analytics.connect.api.input.actions.RecordActionParametersInputRepresentation": {
            /** @description List of actions that are triggered. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.RecordActionInfoInputRepresentation"][];
            field?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.RecordActionFieldInputRepresentation"];
            recordId?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.RecordActionFieldInputRepresentation"];
        };
        /**
         * @description Enum for input parameter data types
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectInputParameterDataTypeEnum": "Boolean" | "Date" | "Number" | "Percentage" | "Text";
        /**
         * @description Enum for position type in visualization
         *
         *     _Available April 2026 and later._
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.visualization.visualSpec.ConnectVisualizationPositionType": "End" | "Start";
        /** @description A schedule for a data alert that fires every N minutes, where N is the configured minute-level frequency. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertEveryNMinutesScheduleInputRepresentation": {
            /** @description run the evaluation every n minutes */
            minuteLevelFrequency?: number;
        };
        /** @description Metadata of a filter applied to a download asset */
        "sfdc.unified.analytics.connect.api.output.download.DownloadFilterRepresentation": {
            field?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadFilterFieldRepresentation"];
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadFilterOperatorRepresentation"];
            /** @description filter value(s) for this filter */
            value?: string;
        };
        /**
         * VisualizationFieldToken
         * @description A field-token text value in a visualization tooltip.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldTokenTextValueRepresentation": {
            /** @description The field key identifying the visualization field. */
            fieldKey?: string;
            properties?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTextStylePropertiesRepresentation"];
            /**
             * @description The shape of `customText` when `type` is `VisualizationFieldToken`.
             * @enum {string}
             */
            type: "VisualizationFieldToken";
        };
        /** @description Output representation for axis style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationAxisStyleRepresentation": {
            dualAxis?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDualAxisStyleRepresentation"];
            /** @description Whether the axis is visible. */
            isVisible?: boolean;
            /** @description Whether the zero line is visible. */
            isZeroLineVisible?: boolean;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationAxisRangeStyleRepresentation"];
            scale?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationCommonStyleRepresentation"];
            ticks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationAxisTicksStyleRepresentation"];
            /** @description The title text for the axis. */
            titleText?: string;
        };
        /**
         * Parameter
         * @description A set of style settings for a parameter widget in a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.ParameterWidgetStylesRepresentation": {
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description A sort by field in a table. */
        "sfdc.unified.analytics.connect.api.input.VisualizationByFieldSortInputRepresentation": {
            /** @description The field to apply the sort by. */
            byField?: string;
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * Custom
         * @description A custom color palette for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.CustomPaletteRepresentation": {
            /** @description The list of colors in the palette. */
            colors?: string[];
            /**
             * @description The shape of `palette` when `type` is `Custom`.
             * @enum {string}
             */
            type: "Custom";
        };
        /** @description A representation of Tableau marketplace's listing installation response. */
        "sfdc.unified.analytics.connect.api.output.marketplace.TableauMarketplaceListingInstallationResponse": {
            /** @description The ID of the package installation request. */
            packageInstallRequestID?: string;
            /** @description Specifies whether the package installation request succeeded (`true`) or not (`false`). */
            success?: boolean;
        };
        /**
         * WildCard
         * @description A wildcard filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationWildCardFilterInfoInputRepresentation": {
            /** @description Whether to include all values when the wild card filter is empty. */
            includeAllValuesWhenEmpty?: boolean;
            /** @description Whether the wild card filter is an exclude filter. */
            isExcludes?: boolean;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationWildCardFilterOperatorType"];
            /** @description The value of the wild card filter. */
            value?: string;
            /**
             * @description The shape of `filterInfos` when `type` is `WildCard`.
             * @enum {string}
             */
            type: "WildCard";
        };
        /**
         * Flow
         * @description The parameters for a flow action, including the flow to run, its input variables, and whether to show a dialog.
         */
        "sfdc.unified.analytics.connect.api.input.actions.FlowActionParametersInputRepresentation": {
            /** @description Map of flow action input variables. */
            attributes?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.FlowActionParameterAttributesInputRepresentation"];
            };
            /** @description Flow Name */
            flowName?: string;
            /** @description Show Dialog */
            showDialog?: boolean;
        };
        /** @description Input representation for header mark style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkStyleInputRepresentation": {
            color?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkColorStyleInputRepresentation"];
            connector?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkConnectorStyleInputRepresentation"];
            /** @description Whether the mark opacity is managed automatically by the system. */
            isAutomaticOpacity?: boolean;
            /** @description Whether the size style is automatic. */
            isAutomaticSize?: boolean;
            /** @description Whether the marks are centered along their stacking axis. */
            isStackingAxisCentered?: boolean;
            label?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkLabelStyleInputRepresentation"];
            /** @description The opacity of the mark, as a percentage value from 0 (transparent) to 100 (opaque). */
            opacity?: number;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkRangeStyleInputRepresentation"];
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkSizeStyleInputRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationTooltipMarkStyleInputRepresentation"];
        };
        /**
         * Image
         * @description A set of configuration parameters for an image widget in a Tableau Next dashboard, including its alignment, alternative text, scaling, and opacity.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetParametersRepresentation": {
            /** @description Horizontal alignment of the image (left, center, right) */
            alignmentX?: string;
            /** @description Vertical alignment of the image (top, center, bottom) */
            alignmentY?: string;
            /** @description Alternative text for the image */
            altText?: string;
            imageScale?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ImageScaleTypeEnum"];
            /** @description Image opacity in percentage */
            opacity?: number;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.image.ImageWidgetStylesRepresentation"];
        };
        /** @description A group of visualization filters with filter logic. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFilterGroupInputRepresentation": {
            /** @description The filter logic expression (e.g. "1 AND 2" or "1 OR 2"). */
            filterLogic?: string;
            /** @description The list of filters in this group. */
            filters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFilterInputRepresentation"][];
        };
        /**
         * @description The type of a property token in a tooltip text sequence.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationPropertyTokenType": "DataRefreshTime" | "SdmName" | "VisualizationName" | "VisualizationTitle" | "WorkspaceName";
        /** @description A representation of Tableau marketplace's listing installation progress. */
        "sfdc.unified.analytics.connect.api.output.marketplace.TableauMarketplaceListingInstallationProgressResponse": {
            /** @description The errors while installing the package. */
            errors?: string[];
            /** @description The ID of the package installation request. */
            id?: string;
            /** @description The latest Status of Package installation request. */
            status?: string;
        };
        /** @description Represents a dependent asset that was cloned or added as a reference. */
        "sfdc.unified.analytics.clone.connect.api.output.DependencyResultRepresentation": {
            /** @description The ID of the dependent asset. */
            assetId?: string;
            /** @description The type of the dependent asset. */
            assetType?: string;
            /** @description The developer name of the dependent asset. */
            developerName?: string;
            /** @description The label of the dependent asset. */
            label?: string;
        };
        /**
         * OrderedQuickTableCalcRankUnique
         * @description A unique-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldOrderedQuickTableCalcRankUniqueInputRepresentation": {
            type: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFieldQuickTableCalcType"];
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /**
         * @description Results of Users Query from the production org queried from the personal org
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.usersQuery.AnalyticsUsersFromProdOrgQueryResultsRepresentation": {
            /** @description The content of the page. */
            items?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"][];
            /** @description The offset of the next page. */
            nextOffset?: number;
            /** @description The query key to help in caching the results. */
            queryKey?: string;
            /** @description The size of the page. */
            size?: number;
        };
        /**
         * Name
         * @description A named map background style for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationMapBackgroundStyleNameRepresentation": {
            /**
             * @description The shape of `style` when `type` is `Name`.
             * @enum {string}
             */
            type: "Name";
            /** @description The style value. */
            value?: string;
        };
        /** @description Flow layout specific output representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationFlowMarksRepresentation": {
            /** @description The mark specifications per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
            };
            links?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
            nodes?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkRepresentation"];
        };
        /**
         * AnalyticsNavigation
         * @description A navigation widget for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.navigation.AnalyticsNavigationWidgetRepresentation": {
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationWidgetParametersRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            /** @description The widget actions. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            /** @description The dynamic tokens for the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.AnalyticsWidgetDynamicTokenRepresentation"];
            };
            status?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.DashboardResponseStatusEnum"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /**
         * VisualizationRepresentation
         * @description A Tableau Next visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationRepresentation": {
            /** @description The fields for the visualization. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldRepresentation"];
            };
            /** @description The visualization interactions. */
            interactions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.InteractionRepresentation"][];
            view?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewRepresentation"];
            visualSpecification?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationVisualSpecRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
            dataSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationDataSourceRepresentation"];
            permissions?: components["schemas"]["sfdc.unified.analytics.connect.api.output.PermissionsRepresentation"];
            sourceVersion?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation"];
            targetVersion?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsVersionRepresentation"];
            creationSource?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationCreationSource"];
            templateSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsTemplateSourceRepresentation"];
            workspace?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AssetReferenceRepresentation"];
        };
        /** @description The background style for a visualization map, set by name or URL. */
        "sfdc.unified.analytics.connect.api.input.BaseVisualizationMapBackgroundStyleInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundStyleNameInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundStyleUrlInputRepresentation"];
        /**
         * ListCard
         * @description Parameters for a filter widget displayed as a list card, including its filter option, label visibility, and title, value, and widget styles.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.ListCardFilterWidgetParametersInputRepresentation": {
            filterOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterOptionInputRepresentation"];
            /** @description Show or hide filter widget label. */
            isLabelHidden?: boolean;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            titleStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation"];
            valueStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetTextStyleInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.FilterWidgetStylesInputRepresentation"];
            viewType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsWidgetViewTypeEnum"];
        };
        /** @description Input representation for map background domain in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMapBackgroundDomainInputRepresentation": {
            latitude?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBackgroundDomainRangeInputRepresentation"];
            longitude?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationBackgroundDomainRangeInputRepresentation"];
        };
        /** @description A collection of shares for a record. */
        "sfdc.unified.analytics.connect.api.output.share.SetupRecordShareCollectionRepresentation": {
            /** @description The list of Failed record shares. */
            failedRecordShares?: components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareErrorRepresentation"][];
            /** @description The ID for record. */
            recordId?: string;
            setupObjectType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectTypeEnum"];
            /** @description The list of shares being returned for a record. */
            successfulRecordShares?: components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareRepresentation"][];
        };
        /**
         * AssetReference
         * @description A reference to an asset.
         */
        "sfdc.unified.analytics.connect.api.input.AssetReferenceInputRepresentation": {
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
        };
        /**
         * Computation
         * @description A computed-value label for a visualization reference line.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineComputationLabelRepresentation": {
            /**
             * @description The shape of `label` when `type` is `Computation`.
             * @enum {string}
             */
            type: "Computation";
        };
        /** @description Output representation for pane style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationPaneStyleRepresentation": {
            colors?: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationColorAssignmentRepresentation"];
            defaults?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationCommonStyleRepresentation"];
            /** @description Whether the size range is automatic. */
            isAutomaticSize?: boolean;
            size?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkSizeRangeRepresentation"];
        };
        /**
         * BaseFilter
         * @description Parameters for a filter widget, including its view type.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.BaseFilterWidgetParametersInputRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListCardFilterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ListFilterWidgetParametersInputRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.filter.ToggleFilterWidgetParametersInputRepresentation"];
        /**
         * @description The horizontal text alignment type for the visualization stylesheet.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleTextHorizontalAlignmentType": "Center" | "Left" | "Right";
        /**
         * TableDown
         * @description The table-down computation method for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFieldComputeUsingTableDownInputRepresentation": {
            /**
             * @description The shape of `computeUsing` when `type` is `TableDown`.
             * @enum {string}
             */
            type: "TableDown";
            /** @description Specifies whether to use the order-by clause for extra (marks) fields (`true`) or not (`false`). */
            useOrderByForExtraFields?: boolean;
        };
        /** @description A dashboard custom config (e.g. query cache enabled and staleness). */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardCustomConfigRepresentation": {
            /** @description Specifies whether the dashboard uses Hyper query caching (`true`) or not (`false`). */
            queryCacheEnabled?: boolean | null;
            /** @description The how much staleness allowed for query cache (e.g. 5min, 10min, 20min). */
            queryCacheStaleness?: string | null;
        };
        /** @description A collection of Follower Assets. */
        "sfdc.unified.analytics.connect.api.output.follow.FollowerAssetCollectionRepresentation": {
            /** @description The list of follower assets being returned. */
            followerAssets?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowerAssetRepresentation"][];
            /** @description The follower ID. */
            followerId?: string;
        };
        /** @description Input representation for axis style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationAxisStyleInputRepresentation": {
            dualAxis?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationDualAxisStyleInputRepresentation"];
            /** @description Whether the axis is visible. */
            isVisible?: boolean;
            /** @description Whether the zero line is visible. */
            isZeroLineVisible?: boolean;
            range?: components["schemas"]["sfdc.unified.analytics.connect.api.input.BaseVisualizationAxisRangeStyleInputRepresentation"];
            scale?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationCommonStyleInputRepresentation"];
            ticks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisTicksStyleInputRepresentation"];
            /** @description The title text for the axis. */
            titleText?: string;
        };
        /**
         * @description Share access types for a record
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum": "Commenter" | "Editor" | "Manager" | "Owner" | "Viewer";
        /**
         * VisualizationView
         * @description A visualization view.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewRepresentation": {
            /** @description Specifies whether the view is the original visualization view (`true`) or not (`false`). */
            isOriginal?: boolean;
            viewSpecification?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /** @description Represents navigate action destination representation in unified analytics. */
        "sfdc.unified.analytics.connect.api.output.actions.BaseNavigateActionDestinationRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.DashboardNavigateActionDestinationRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.MetricDetailsNavigateActionDestinationRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.PageNavigateActionDestinationRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.actions.UrlNavigateActionDestinationRepresentation"];
        /**
         * Visualization
         * @description A set of configuration parameters for a visualization widget in a Tableau Next dashboard, including its legend position and shared state.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationWidgetParametersInputRepresentation": {
            legendPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationLegendPositionType"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveParameterSourceInputRepresentation"];
            /** @description ShareState Parameter value */
            shareState?: boolean;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.visualization.VisualizationStylesInputRepresentation"];
        };
        /**
         * AnlytLightningComp
         * @description A Lightning component widget for a Tableau Next dashboard, either a standard or custom component.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningCompWidgetInputRepresentation": {
            /** @description Type of Lightning Component (Standard or Custom). */
            componentType?: string;
            parameters?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningCompWidgetParametersInputRepresentation"];
            source?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.lightning.AnlytLightningComponentSourceInputRepresentation"];
            /** @description The description. */
            description?: string;
            /** @description The master label. */
            label?: string;
            /** @description The unique developer name. */
            name?: string;
            /** @description The actions of the widget. */
            actions?: components["schemas"]["sfdc.unified.analytics.connect.api.input.actions.InteractionInputRepresentation"][];
            /** @description The map of dynamic tokens in the widget. */
            dynamicTokens?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.AnalyticsWidgetDynamicTokenInputRepresentation"];
            };
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectAnalyticsWidgetTypeEnum"];
        };
        /** @description Output representation for a style block. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockRepresentation": {
            /** @description Background color (hex). */
            backgroundColor?: string;
            border?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockBorderRepresentation"];
            /** @description The foreground color in hex format, used for text, lines, and borders, and as the fallback mark color when no other paint is specified. */
            color?: string;
            font?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockFontRepresentation"];
            line?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockLineRepresentation"];
            /**
             * Format: double
             * @description Opacity value from 0 to 1.
             */
            opacity?: number;
            padding?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockPaddingRepresentation"];
            text?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockTextRepresentation"];
            visibility?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleVisibilityType"];
        };
        /**
         * DashboardLayout
         * @description A layout for a Tableau Next dashboard.
         */
        "sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutRepresentation": {
            /** @description The number of Columns in the layout. */
            columnCount?: number;
            /** @description The maximum width of the layout in pixels. */
            maxWidth?: number;
            /** @description The list of pages in the layout. */
            pages?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutPageRepresentation"][];
            /** @description The grid row height of the layout in pixels. */
            rowHeight?: number;
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardLayoutStyleRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * Percentile
         * @description A percentile quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcPercentileRepresentation": {
            /**
             * @description The shape of this object when `type` is `Percentile`.
             * @enum {string}
             */
            type: "Percentile";
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /** @description Salesforce action data. */
        "sfdc.unified.analytics.connect.api.output.actions.RecordActionInfoRepresentation": {
            /** @description Name of the action. */
            apiName?: string;
        };
        /** @description Radial layout specific input representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationRadialMarksInputRepresentation": {
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
        };
        /**
         * Text
         * @description A set of configuration parameters for a text widget in a Tableau Next dashboard, including its content, conditional formatting rules, and vertical alignment.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetParametersRepresentation": {
            /** @description Measure and dimension conditional formatting rules for text widget */
            conditionalFormattingRules?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.ConditionalFormattingRuleRepresentation"][];
            /** @description Parameters content associated with text widget */
            content?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetContentParameterRepresentation"][];
            /**
             * Format: double
             * @description Line spacing of the text widget content. Null means Normal (browser default).
             */
            lineSpacing?: number;
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveFilterSourceRepresentation"];
            receiveParameterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.output.ReceiveParameterSourceRepresentation"];
            /** @description Tooltip associated with text widget */
            tooltip?: string;
            /** @description Vertical alignment of the text widget content. Valid values: top, center, bottom. */
            verticalAlignment?: string;
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.text.TextWidgetStylesRepresentation"];
        };
        /**
         * @description The type of filter in a visualization's view specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationFilterType": "GreaterThan" | "In" | "LessThan" | "Nulls" | "Range" | "RelativeDate" | "TopN" | "WildCard";
        /**
         * @description Filter details input representation
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.input.widgets.filter.FilterDetailsInputRepresentation": {
            /** @description Filter field name. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.FilterOperatorType"];
            /** @description Filter values. */
            values?: unknown;
        };
        /**
         * Metric
         * @description A set of configuration parameters for a metric widget in a Tableau Next dashboard, including its metric option and filter source.
         */
        "sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetParametersInputRepresentation": {
            metricOption?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.MetricOptionInputRepresentation"];
            receiveFilterSource?: components["schemas"]["sfdc.unified.analytics.connect.api.input.ReceiveFilterSourceInputRepresentation"];
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.input.widgets.metric.MetricWidgetStylesInputRepresentation"];
        };
        /** @description Output representation for reference line format in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationReferenceLineFormatRepresentation": {
            /** @description The color of the reference line. */
            color?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationReferenceLineStyleType"];
        };
        /** @description Input representation for header columns direction style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsDirectionStyleInputRepresentation": {
            /** @description Whether repeated cells should be merged for the visualization. */
            mergeRepeatedCells?: boolean;
            /** @description Whether the index should be shown for the visualization. */
            showIndex?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderColumnsSizingStyleInputRepresentation"];
        };
        /** @description Input representation for font style in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationFontStyleInputRepresentation": {
            actionableHeaders?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            axisTickLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            ban?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontBanStyleInputRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            grandTotalLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            grandTotalValues?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            legendLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            markLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            subtotalLabel?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
            subtotalValues?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationFontCommonStyleInputRepresentation"];
        };
        /**
         * RankDense
         * @description A dense-rank quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldOrderedQuickTableCalcRankDenseRepresentation": {
            /**
             * @description The shape of this object when `type` is `RankDense`.
             * @enum {string}
             */
            type: "RankDense";
            order?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationSortOrderType"];
        };
        /** @description A sort-order configuration for a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationSortOrdersRepresentation": {
            /** @description The column sort information for the table. */
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationByFieldSortRepresentation"][];
            /** @description Indicates the field level sorts. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationSortRepresentation"];
            };
            /** @description The row sort information for the table. */
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationByFieldSortRepresentation"][];
        };
        /**
         * Container
         * @description A set of style settings for a container widget in a Tableau Next dashboard, including its background.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetStylesRepresentation": {
            background?: components["schemas"]["sfdc.unified.analytics.connect.api.output.common.BackgroundParametersRepresentation"];
            /** @description Back ground color. */
            backgroundColor?: string;
            /** @description Border color. */
            borderColor?: string;
            /** @description Border edges. */
            borderEdges?: string[];
            /** @description Border radius. */
            borderRadius?: number;
            /** @description Border width. */
            borderWidth?: number;
        };
        /** @description The sizing style for header rows in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationHeaderRowsSizingStyleInputRepresentation": {
            /** @description The width for each field in the header rows. */
            fieldWidth?: {
                [key: string]: number;
            };
            /**
             * Format: double
             * @description The height of the header rows.
             */
            height?: number;
            /**
             * Format: double
             * @description The width for the index row.
             */
            indexWidth?: number;
        };
        /** @description Representation for header mark specification in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkSpecificationRepresentation": {
            /** @description The encoding properties of the header mark. */
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderMarkEncodingRepresentation"][];
            /** @description Whether this header mark spec was automatically generated. */
            isAutomatic?: boolean;
            stack?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationMarkStackRepresentation"];
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationHeaderMarkType"];
        };
        /**
         * Nulls
         * @description A null-value filter for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationNullsFilterInfoRepresentation": {
            nullType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNullsFilterType"];
            /**
             * @description The shape of `filterInfos` when `type` is `Nulls`.
             * @enum {string}
             */
            type: "Nulls";
        };
        /** @description A filter for a visualization. */
        "sfdc.unified.analytics.connect.api.output.BaseVisualizationFilterInfoRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationGreaterThanFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationInFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLessThanFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationNullsFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRangeFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRelativeDateFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTopNFilterInfoRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationWildCardFilterInfoRepresentation"];
        /** @description A filter defined by a field, an operator, and one or more values. */
        "sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation": {
            /** @description The fieldName. */
            fieldName?: string;
            operator?: components["schemas"]["sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum"];
            /** @description The values. */
            values?: unknown[];
        };
        /** @description Representation for header groups direction style in visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationHeaderGroupsDirectionStyleRepresentation": {
            /** @description Whether repeated cells should be merged for group headers in the visualization. */
            mergeRepeatedCells?: boolean;
            sizing?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationHeaderRowsSizingStyleRepresentation"];
        };
        /**
         * Flow
         * @description A style for a flow-layout visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFlowStyleRepresentation": {
            encodings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationEncodingStylesRepresentation"];
            fieldLabels?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowFieldLabelsStyleRepresentation"];
            fonts?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFontStyleRepresentation"];
            lines?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationLineStyleRepresentation"];
            marks?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFlowMarkStylesRepresentation"];
            shading?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationShadingStyleRepresentation"];
            title?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTitleStyleRepresentation"];
            tooltip?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationTooltipStyleRepresentation"];
        };
        /** @description An operand for a data alert condition, based on the value of a specified metric. */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertMetricValueInputRepresentation": {
            /** @description fact key */
            factKey?: string;
            /** @description filter context */
            filterContext?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.UnifiedFilterInputRepresentation"][];
            insightType?: components["schemas"]["sfdc.unified.analytics.connect.api.input.dataAlert.InsightTypeEnum"];
            /** @description metric or sub-metric Id */
            metricId?: string;
            /** @description Id or API name of the semantic data model */
            modelApiNameOrId?: string;
            /** @description additional metric params */
            params?: {
                [key: string]: string;
            };
            timeContext?: components["schemas"]["sfdc.unified.analytics.connect.api.input.common.UnifiedFilterInputRepresentation"];
        };
        /**
         * Auto
         * @description Automatic axis ticks for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationAutoAxisTicksInfoInputRepresentation": {
            /**
             * @description The shape of `majorTicks` when `type` is `Auto`.
             * @enum {string}
             */
            type: "Auto";
        };
        /**
         * MovingAverage
         * @description A moving-average quick table calculation for a visualization field.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationFieldMovingCalculationQuickTableCalcMovingAverageRepresentation": {
            /**
             * @description The shape of this object when `type` is `MovingAverage`.
             * @enum {string}
             */
            type: "MovingAverage";
            /** @description Next values of field quick table calc. */
            nextValues?: number;
            /** @description Previous values of field quick table calc. */
            previousValues?: number;
            /** @description Use current value of field quick table calc. */
            useCurrentValue?: boolean;
        };
        /** @description A style configuration for column, group, and row headers in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeadersStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderColumnsDirectionStyleRepresentation"];
            groups?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderGroupsDirectionStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationViewSpecHeaderRowsDirectionStyleRepresentation"];
        };
        /**
         * Fixed
         * @description Fixed axis ticks for a visualization.
         */
        "sfdc.unified.analytics.connect.api.input.VisualizationFixedAxisTicksInfoInputRepresentation": {
            dateInfo?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationAxisTicksDateInfoInputRepresentation"];
            /** @description The interval at which axis ticks are shown. */
            interval?: number;
            /** @description The origin of the axis ticks. */
            origin?: string;
            /**
             * @description The shape of `majorTicks` when `type` is `Fixed`.
             * @enum {string}
             */
            type: "Fixed";
        };
        /**
         * @description The predefined date type for the forecast model used in the visualization's visual representation.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationForecastPredefinedDateType": "LatestData";
        /**
         * @description Representation for unified filter top/bottom criteria
         *
         *     _Available April 2026 and later._
         */
        "sfdc.unified.analytics.connect.api.output.common.filters.UnifiedSemanticFilterTopBottomCriteriaRepresentation": {
            /** @description The expression to order by for top/bottom determination */
            expression?: string;
            /** @description Whether this is a top or bottom filter */
            isTop?: boolean;
            nullValuesPosition?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.common.filters.ConnectUnifiedSemanticFilterNullValuesPositionType"];
            /** @description The limit for top/bottom filtering */
            topBottomLimit?: number;
        };
        /** @description Input representation for mark styles collection in a visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarkStylesInputRepresentation": {
            /** @description The mark styles per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
            };
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkStyleInputRepresentation"];
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkStyleInputRepresentation"];
        };
        /**
         * VisualizationDataSource
         * @description A data source for a visualization.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationDataSourceRepresentation": {
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationDataSourceType"];
            /**
             * Format: url
             * @description The URL of the visualization data source.
             */
            url?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /** @description A specifies which types of dependent assets to clone. */
        "sfdc.unified.analytics.clone.connect.api.input.IncludeDependenciesRepresentation": {
            /** @description Specifies whether to clone dependent semantic models (`true`) or not (`false`). */
            semanticModel?: boolean;
            /** @description Specifies whether to clone dependent visualizations (`true`) or not (`false`). */
            visualization?: boolean;
        };
        /** @description Vizql layout specific input representation for marks in visualization. */
        "sfdc.unified.analytics.connect.api.input.VisualizationMarksInputRepresentation": {
            /** @description The mark specifications per field. */
            fields?: {
                [key: string]: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
            };
            headers?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationHeaderMarkInputRepresentation"];
            panes?: components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationMarkInputRepresentation"];
        };
        /** @description Output representation for a single stylesheet rule. */
        "sfdc.unified.analytics.connect.api.output.VisualizationStyleRuleRepresentation": {
            scope?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleScopeRepresentation"];
            selector?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStylableElementType"];
            style?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationStyleBlockRepresentation"];
        };
        /** @description An asset compare endpoint source/target reference. */
        "sfdc.unified.analytics.connect.api.input.assetsCompare.AssetCompareRefInputRepresentation": {
            /** @description The asset ID or API name. */
            assetIdOrApiName?: string;
        };
        /** @description Metadata for the field name of an applied filter */
        "sfdc.unified.analytics.connect.api.output.download.DownloadFilterFieldRepresentation": {
            /** @description filter field label */
            label?: string;
            /** @description filter field name */
            name?: string;
        };
        /**
         * InputParameter
         * @description A text style for an input parameter widget's label or value.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.parameter.InputParameterWidgetTextStyleRepresentation": {
            /** @description Font color as a hex string */
            fontColor?: string;
            /** @description Font size in pixels */
            fontSize?: number;
            /** @description Text style options (bold, italic, underline, removeFormatting) */
            textStyle?: string[];
        };
        /**
         * SemanticSubMetricAssetRefRepresentation
         * @description A reference to a followed semantic sub-metric asset, identified by model ID.
         */
        "sfdc.unified.analytics.connect.api.output.follow.SemanticSubMetricAssetRefRepresentation": {
            /**
             * Format: Id
             * @description Model ID
             */
            modelId?: string;
            /**
             * Format: Id
             * @description Asset Id
             */
            assetId?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description Created date of the asset
             */
            createdDate?: string;
            followedTimeRange?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation"];
            followerType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowerTypeEnum"];
            /**
             * Format: Id
             * @description Database record id.
             */
            id?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description Last modified date of the asset.
             */
            lastModifiedDate?: string;
            /** @description Whether to show forecast for the followed asset. Null means false. */
            shouldShowForecast?: boolean;
        };
        /** @description A collection of Followers. */
        "sfdc.unified.analytics.connect.api.output.follow.FollowerCollectionRepresentation": {
            /** @description The list of followers being returned. */
            followers?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"][];
        };
        /** @description Output representation for number format info in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationNumberFormatInfoRepresentation": {
            /** @description The number of decimal places. */
            decimalPlaces?: number;
            displayUnits?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoDisplayUnitType"];
            /** @description Whether to include the thousand separator. */
            includeThousandSeparator?: boolean;
            negativeValuesFormat?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationNumberFormatInfoNegativeValuesType"];
            /** @description The prefix value. */
            prefix?: string;
            /** @description The suffix value. */
            suffix?: string;
            type?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleNumberFormatType"];
        };
        /**
         * @description Common Data Orchestration Filter Keys
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.dataorchestration.DataOrchestrationCommonFilterKeyEnum": "Users" | "Workspaces";
        /**
         * AnlytLightningComp
         * @description A set of configuration parameters for a Lightning component widget in a Tableau Next dashboard, including its fully qualified component name and dynamic properties.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.lightning.AnlytLightningCompWidgetParametersRepresentation": {
            /** @description Fully qualified name (namespace__componentName) for Lightning Components */
            fullyQualifiedName?: string;
            /** @description Dynamic properties for the Lightning Component widget (supports String and Boolean values) */
            properties?: {
                [key: string]: Record<string, never>;
            };
            widgetStyle?: components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.container.ContainerWidgetStylesRepresentation"];
        };
        /**
         * Auto
         * @description An automatic tick configuration for a visualization axis.
         */
        "sfdc.unified.analytics.connect.api.output.VisualizationAutoAxisTicksInfoRepresentation": {
            /**
             * @description The shape of `majorTicks` when `type` is `Auto`.
             * @enum {string}
             */
            type: "Auto";
        };
        /** @description Output representation for radial field labels style in a visualization. */
        "sfdc.unified.analytics.connect.api.output.VisualizationRadialFieldLabelsStyleRepresentation": {
            columns?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            rings?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            rows?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
            slices?: components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationFieldLabelsCommonStyleRepresentation"];
        };
        /**
         * BaseFilter
         * @description Parameters for a filter widget, including its view type.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.filter.BaseFilterWidgetParametersRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListCardFilterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ListFilterWidgetParametersRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.widgets.filter.ToggleFilterWidgetParametersRepresentation"];
        /**
         * SemanticSubMetricAssetRepresentation
         * @description A followed semantic sub-metric asset, including its filters, model, and time range.
         */
        "sfdc.unified.analytics.connect.api.output.follow.SemanticSubMetricAssetRepresentation": {
            /** @description Filter logic */
            filterLogic?: string;
            /** @description List of filters */
            filters?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticFilterOutputRepresentation"][];
            /** @description Model ID */
            modelId?: string;
            /** @description Semantic metric ID */
            semanticMetricId?: string;
            timeRange?: components["schemas"]["sfdc.semantic.authoring.connect.api.output.SemanticTimeRangeOutputRepresentation"];
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
            createdBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The created date of the asset.
             */
            createdDate?: string;
            lastModifiedBy?: components["schemas"]["sfdc.unified.analytics.connect.api.output.AnalyticsUserRepresentation"];
            /**
             * Format: date-time
             * @description The last modified date of the asset.
             */
            lastModifiedDate?: string;
            assetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
            followedTimeRange?: components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UnifiedFilterRepresentation"];
        };
        /**
         * @description The style fit type of the visualization's visual specification.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.enums.ConnectVisualizationStyleFitType": "Entire" | "RowHeadersWidth" | "Standard";
        /** @description Input representation for padding properties. */
        "sfdc.unified.analytics.connect.api.input.VisualizationStyleBlockPaddingInputRepresentation": {
            /** @description Bottom padding. */
            bottom?: number;
            /** @description Left padding. */
            left?: number;
            /** @description Right padding. */
            right?: number;
            /** @description Top padding. */
            top?: number;
        };
        /**
         * BaseAnalyticsAsset
         * @description A Tableau Next asset, including its creator and last-modified details.
         */
        "sfdc.unified.analytics.connect.api.output.BaseAnalyticsAssetRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.BaseVisualizationRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadDashboardAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadSubmetricAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadVisualizationAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.download.DownloadVisualizationWidgetAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.TypedAssetReferenceRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation"];
        /** @description A map position for a visualization field. */
        "sfdc.unified.analytics.connect.api.output.BaseMapPositionalRepresentation": components["schemas"]["sfdc.unified.analytics.connect.api.output.GeocodedMapPositionalRepresentation"] | components["schemas"]["sfdc.unified.analytics.connect.api.output.XYMapPositionalRepresentation"];
        /**
         * NavigationItem
         * @description A navigation item for a navigation widget, including its visibility, order, and target.
         */
        "sfdc.unified.analytics.connect.api.output.widgets.navigation.NavigationItemRepresentation": {
            /** @description Whether the item is hidden from navigation */
            hidden?: boolean;
            /** @description Explicit position in navigation order */
            order?: number;
            /** @description Target identifier */
            target?: string;
            /** @description Type of navigation item */
            type?: string;
            /** @description The description of the asset. */
            description?: string;
            /**
             * Format: Id
             * @description The database record ID of the asset.
             */
            id?: string;
            /** @description The label of the asset. */
            label?: string;
            /** @description The name of the asset. */
            name?: string;
        };
        /**
         * @description Day of the week.
         * @enum {string}
         */
        "sfdc.unified.analytics.connect.api.input.dataAlert.DataAlertDayEnum": "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
        "core.connect.api.output.common.BatchRepresentation": Record<string, never>;
        "sfdc.app.framework.connect.api.enums.TemplateSubtypeEnum": string;
        "sfdc.semantic.authoring.connect.api.enums.SemanticAggregationTypeEnum": string;
        "sfdc.semantic.authoring.connect.api.enums.SemanticCalculatedFieldLevelEnum": string;
        "sfdc.semantic.authoring.connect.api.enums.SemanticFilterOperatorTypeEnum": string;
        "sfdc.semantic.authoring.connect.api.enums.SentimentTypeEnum": string;
        "sfdc.semantic.authoring.connect.api.input.SemanticFilterInputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.input.SemanticGoalDateRangeInputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.input.UnifiedFilterInputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.SemanticFilterOutputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.SemanticGoalOutputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.SemanticModelOutputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.SemanticSubMetricOutputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.SemanticTimeRangeOutputRepresentation": Record<string, never>;
        "sfdc.semantic.authoring.connect.api.output.metrics.SemanticMetricOutputRepresentation": Record<string, never>;
        "sfdc.unified.analytics.connect.api.enums.ConnectReceiveFilterModeEnum": string;
        "sfdc.unified.analytics.connect.api.enums.FilterSelectionTypeEnum": string;
        "sfdc.unified.analytics.connect.api.input.widgets.filter.FilterInitialValuesInputRepresentation": Record<string, never>;
        "sfdc.unified.analytics.connect.api.input.widgets.parameter.ParameterInitialValuesInputRepresentation": Record<string, never>;
        "shared.analytics.platform.api.enums.TuaSubMetricCaptureMode": Record<string, never>;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    cloneAsset: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.clone.connect.api.input.AnalyticsAssetCloneInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.clone.connect.api.output.AnalyticsAssetCloneResultRepresentation"];
                };
            };
        };
    };
    compareAssets: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.assetsCompare.AnalyticsAssetsCompareInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.assetsCompare.AnalyticsAssetsCompareOutputRepresentation"];
                };
            };
        };
    };
    getAssetDependents: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.dependents.connect.api.input.AssetDependentsQueryInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.dependents.connect.api.output.AssetDependentCollectionRepresentation"];
                };
            };
        };
    };
    getAssetInnerReference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.TypedAssetReferenceCollectionRepresentation"];
                };
            };
        };
    };
    getDashboards: {
        parameters: {
            query?: {
                limit?: number;
                minorVersion?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardCollectionRepresentation"];
                };
            };
        };
    };
    postDashboardCollection: {
        parameters: {
            query?: {
                minorVersion?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation"];
                };
            };
        };
    };
    getDashboard: {
        parameters: {
            query?: {
                minorVersion?: number;
            };
            header?: never;
            path: {
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation"];
                };
            };
        };
    };
    deleteDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    patchDashboard: {
        parameters: {
            query?: {
                minorVersion?: number;
            };
            header?: never;
            path: {
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.dashboard.DashboardInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.dashboard.DashboardRepresentation"];
                };
            };
        };
    };
    getDashboardBundle: {
        parameters: {
            query?: {
                /** @description Specifies whether to include referenced SDMs in the bundle response (`true`) or exclude them (`false`). */
                addSdm?: boolean;
                /** @description Specifies whether to include referenced visualizations in the bundle response (`true`) or exclude them (`false`). */
                addVisualization?: boolean;
                /** @description The custom view ID (if passed) to load as part of bundle. */
                customViewId?: string;
                /** @description Specifies whether to return extra API execution details in the response (`true`) or not (`false`). */
                debug?: boolean;
                /** @description Specifies whether to force a reload of the bundle instead of using cached data (`true`) or use cached data if available (`false`). */
                forceReload?: boolean;
                /** @description The dashboard height on the viewport in pixels. If passed, bundle only includes assets that display in the height. */
                height?: number;
                /** @description The minor supported for the API. */
                minorVersion?: number;
                /** @description The specific page name (GUID) of the dashboard. */
                pageName?: string;
            };
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardBundleRepresentation"];
                };
            };
        };
    };
    getViews: {
        parameters: {
            query?: {
                /** @description The collection limit. */
                limit?: number;
                /** @description The collection offset. */
                offset?: number;
                /** @description Specifies whether to return a shallow version of the collection (`true`) or the full collection (`false`). */
                shallow?: boolean;
            };
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewCollectionRepresentation"];
                };
            };
        };
    };
    saveView: {
        parameters: {
            query?: {
                /** @description The collection limit. */
                limit?: number;
                /** @description The collection offset. */
                offset?: number;
                /** @description Specifies whether to return a shallow version of the collection (`true`) or the full collection (`false`). */
                shallow?: boolean;
            };
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.DashboardCustomViewInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"];
                };
            };
        };
    };
    getDefaultView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"];
                };
            };
        };
    };
    getView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
                /** @description The ID of the custom view. */
                viewId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.DashboardCustomViewRepresentation"];
                };
            };
        };
    };
    deleteView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or name of the dashboard. */
                dashboardIdOrApiName: string;
                /** @description The ID of the custom view. */
                viewId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getUniqueFollowerCount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followedAssetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.UniqueFollowerCountRepresentation"];
                };
            };
        };
    };
    getFollowerCollection: {
        parameters: {
            query?: {
                followerId?: string;
            };
            header?: never;
            path: {
                followedAssetId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowerCollectionRepresentation"];
                };
            };
        };
    };
    getFollowedAssetRefCollection: {
        parameters: {
            query?: {
                /** @description Determines the field to sort by */
                assetsOrderBy?: components["schemas"]["sfdc.unified.analytics.connect.api.resource.follow.OrderBy"];
                /** @description Determines what asset type to select */
                followedAssetType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.follow.AnalyticsFollowedAssetTypeEnum"];
                limit?: number;
                offset?: number;
                /** @description Determines the sorting order Valid values are app, ASC and DESC. */
                sortOrder?: components["schemas"]["sfdc.unified.analytics.connect.api.resource.follow.SortOrder"];
            };
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowedAssetRefCollectionRepresentation"];
                };
            };
        };
    };
    getFollowedAssetCollection: {
        parameters: {
            query?: {
                /** @description The determines the field to sort by. */
                assetsOrderBy?: string;
            };
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowedAssetCollectionRepresentation"];
                };
            };
        };
    };
    postFollow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.follow.FollowInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowerAssetRepresentation"];
                };
            };
        };
    };
    patchFollow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followerId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.follow.UpdateFollowInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.FollowerAssetCollectionRepresentation"];
                };
            };
        };
    };
    deleteUnfollow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                followedAssetId: string;
                followerId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    postSubMetricInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.follow.SubMetricInfoInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.follow.SubMetricInfoOutputRepresentation"];
                };
            };
        };
    };
    getAnalyticsTableauMarketplaceListingInstallationTracking: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                installationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.marketplace.TableauMarketplaceListingInstallationProgressResponse"];
                };
            };
        };
    };
    getMarketplaceListings: {
        parameters: {
            query?: {
                /** @description The ID of asset to query */
                assetId?: string;
                /** @description The type of asset to query */
                assetType?: components["schemas"]["sfdc.analyticsdashboard.connect.api.enums.MarketplaceAssetTypeEnum"];
                /** @description The version of asset to query */
                assetVersion?: string;
                /** @description Collection limit */
                limit?: number;
                /** @description Collection offset */
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.analyticsdashboard.connect.api.output.MarketplaceListingCollectionRepresentation"];
                };
            };
        };
    };
    publishToMarketplace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.analyticsdashboard.connect.api.input.MarketplaceListingInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.analyticsdashboard.connect.api.output.MarketplaceListingRepresentation"];
                };
            };
        };
    };
    unpublishFromMarketplace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the Marketplace Listings */
                listingId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getAnalyticsTableauMarketplaceListing: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                listingId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.marketplace.TableauMarketplaceListingInstallationResponse"];
                };
            };
        };
    };
    getPackageComponents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the package version */
                packageVersionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.analyticsdashboard.connect.api.output.PackageComponentCollectionRepresentation"];
                };
            };
        };
    };
    postMarketplaceTemplateBuilder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.marketplaceTemplateBuilder.MarketplaceTemplateInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.marketplaceTemplateBuilder.MarketplaceTemplateOutputRepresentation"];
                };
            };
        };
    };
    postAnalyticsPersonalOrgInfoSync: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.personalOrg.AnalyticsPersonalOrgInfoSyncInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoSyncResultRepresentation"];
                };
            };
        };
    };
    getAnalyticsPersonalOrgInfoCollection: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                owner?: string;
                queryFields?: string;
                queryValue?: string;
                sortBy?: string;
                sortOrder?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoCollectionRepresentation"];
                };
            };
        };
    };
    getAnalyticsPersonalOrgInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                personalOrgInfoId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoRepresentation"];
                };
            };
        };
    };
    deleteAnalyticsPersonalOrgInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                personalOrgInfoId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    patchAnalyticsPersonalOrgInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                personalOrgInfoId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.personalOrg.AnalyticsPersonalOrgInfoUpdateInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.personalOrg.AnalyticsPersonalOrgInfoRepresentation"];
                };
            };
        };
    };
    getSetupRecordShareCollection: {
        parameters: {
            query?: {
                filterByAccessType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectAccessTypeEnum"][];
                filterByRecipientType?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.share.SetupObjectRecipientTypeEnum"][];
                limit?: number;
                offset?: number;
                orderBy?: string;
                recipientSearchTerm?: string;
                sortOrder?: string;
                userOrGroupId?: string;
            };
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordAccessCollectionRepresentation"];
                };
            };
        };
    };
    postSetupRecordShareCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.share.SetupRecordAccessInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareCollectionRepresentation"];
                };
            };
        };
    };
    deleteSetupRecordShareCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    patchSetupRecordShareCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.share.UpdateSetupRecordAccessInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.share.SetupRecordShareCollectionRepresentation"];
                };
            };
        };
    };
    deleteSetupRecordShare: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recordId: string;
                userOrGroupId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSubscriptionDigestConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                digestConfigOwner: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.subscription.SubscriptionDigestConfigOutputRepresentation"];
                };
            };
        };
    };
    patchSubscriptionDigestConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                digestConfigOwner: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.subscription.SubscriptionDigestConfigInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.subscription.SubscriptionDigestConfigOutputRepresentation"];
                };
            };
        };
    };
    getVisualizations: {
        parameters: {
            query?: {
                /** @description The collection limit. */
                limit?: number;
                /** @description The minor API version for visualization operations. */
                minorVersion?: number;
                /** @description The collection offset. */
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationCollectionRepresentation"];
                };
            };
        };
    };
    createVisualization: {
        parameters: {
            query?: {
                /** @description The minor API version for visualization operations. */
                minorVersion?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRepresentation"];
                };
            };
        };
    };
    getVisualization: {
        parameters: {
            query?: {
                /** @description The minor API version for visualization operations. */
                minorVersion?: number;
            };
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRepresentation"];
                };
            };
        };
    };
    deleteVisualization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateVisualization: {
        parameters: {
            query?: {
                /** @description The minor API version for visualization operations. */
                minorVersion?: number;
            };
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.VisualizationInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationRepresentation"];
                };
            };
        };
    };
    getVisualizationBundle: {
        parameters: {
            query?: {
                /** @description The minor API version for visualization bundle operation. */
                minorVersion?: number;
            };
            header?: never;
            path: {
                /** @description The ID or API name of the visualization. */
                visualizationIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.VisualizationBundleRepresentation"];
                };
            };
        };
    };
    getWorkspaces: {
        parameters: {
            query?: {
                lastModifiedBy?: string;
                limit?: number;
                offset?: number;
                searchTerm?: string;
                sortBy?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsAssetsQueryOrderByEnum"];
                sortDirection?: components["schemas"]["sfdc.unified.analytics.connect.api.enums.AnalyticsAssetsQuerySortDirectionEnum"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceCollectionRepresentation"];
                };
            };
        };
    };
    postWorkspaceCollection: {
        parameters: {
            query?: {
                description?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation"];
                };
            };
        };
    };
    getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation"];
                };
            };
        };
    };
    deleteWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    patchWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceRepresentation"];
                };
            };
        };
    };
    getWorkspaceAssets: {
        parameters: {
            query?: {
                assetUsageType?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetCollectionRepresentation"];
                };
            };
        };
    };
    postWorkspaceAssetCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceAssetInputRepresentation"];
            };
        };
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation"];
                };
            };
        };
    };
    batchCreateWorkspaceAsset: {
        parameters: {
            query?: {
                isBulk?: boolean;
            };
            header?: never;
            path: {
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceAssetBatchInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["core.connect.api.output.common.BatchRepresentation"];
                };
            };
        };
    };
    getWorkspaceAsset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetCollectionRepresentation"];
                };
            };
        };
    };
    postWorkspaceAsset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation"];
                };
            };
        };
    };
    deleteWorkspaceAsset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    patchWorkspaceAsset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: string;
                workspaceIdOrApiName: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.input.workspace.WorkspaceInputRepresentation"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sfdc.unified.analytics.connect.api.output.workspace.WorkspaceAssetRepresentation"];
                };
            };
        };
    };
}
