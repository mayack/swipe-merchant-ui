import * as React from "react";
import { Switch, Redirect } from "react-router-dom";

import { AppRoutesPaths } from "./app-routes-paths";

import { AuthenticationRoutes } from "./authentication/authentication-routes";
import { ErrorsRoutes, Error404Route } from "./errors/errors-routes";
import { MerchantRoutes } from "./merchant/merchant-routes";

export class AppRoutes extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <Switch>
            <Redirect path="/" to={AppRoutesPaths.Home.Path} exact />
            {AuthenticationRoutes}
            <ErrorsRoutes path={AppRoutesPaths.Error.toString()} />
            <MerchantRoutes path={AppRoutesPaths.Merchant.toString()} />
            {Error404Route}
        </Switch>;
    }
}
