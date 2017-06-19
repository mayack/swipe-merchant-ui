import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AppRoutesPaths } from "../app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";
import { Error404Route } from "../errors/errors-routes";

import { MerchantLayout } from "@app/components/merchant-layout/merchant-layout";
import { AuthRoute } from "@app/utils/router/auth-route";

export class MerchantRoutes extends Route {
    public render(): JSX.Element {
        return <AuthRoute>
            <MerchantLayout>
                <Switch>
                    <Redirect exact path={this.props.path} to={AppRoutesPaths.Merchant.Home.toLocationObject()} />

                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Timeline.Path}
                        filePath={"./routes/merchant-timeline-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Accounts.Path}
                        filePath={"./routes/accounts/merchant-accounts-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Clients.Path}
                        filePath={"./routes/clients/merchant-clients-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Products.Path}
                        filePath={"./routes/products/merchant-products-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Api.Path}
                        filePath={"./routes/api/merchant-api-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Subscriptions.Path}
                        filePath={"./routes/merchant-subscriptions-route"}
                        dirName={__dirname} />
                    <LazyRoute
                        path={AppRoutesPaths.Merchant.Invoices.Path}
                        filePath={"./routes/merchant-invoice-route"}
                        dirName={__dirname} />

                    {/* Development only */}
                    <LazyRoute
                        path={AppRoutesPaths.Dev.UiComponents.Path}
                        filePath={"./routes/dev-ui-components-routes"}
                        dirName={__dirname} />

                    {Error404Route}
                </Switch>
            </MerchantLayout>
        </AuthRoute>;
    }
}
