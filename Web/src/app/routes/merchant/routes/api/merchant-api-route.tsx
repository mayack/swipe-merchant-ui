import * as React from "react";
import { Switch } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";
import { Error404Route } from "@app/routes/errors/errors-routes";

export class MerchantApiRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Merchant } = AppRoutesPaths;
        const createPath = AppRoutesPaths.Actions.Create.Path;

        return <Switch>
            <LazyRoute
                exact
                path={Merchant.Api.Path}
                filePath={"./merchant-api-view-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={Merchant.ApiHooks.append(createPath).Path}
                filePath={"./merchant-api-hooks-new-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={Merchant.ApiKeys.append(createPath).Path}
                filePath={"./merchant-api-keys-new-route"}
                dirName={__dirname} />

            {Error404Route}
        </Switch>;
    }
}
