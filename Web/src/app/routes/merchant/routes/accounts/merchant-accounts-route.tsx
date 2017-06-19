import * as React from "react";
import { Switch } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";
import { Error404Route } from "@app/routes/errors/errors-routes";

// Import interface only
import { MerchantAccountsViewRouteParams } from "./merchant-accounts-view-route";

export class MerchantAccountsRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Accounts: AccountsPaths } = AppRoutesPaths.Merchant;
        const createPath = AppRoutesPaths.Actions.Create.Path;
        const accountIdNumberParam: keyof MerchantAccountsViewRouteParams = "AccountIdNumber";

        return <Switch>
            <LazyRoute
                exact
                path={AccountsPaths.Path}
                filePath={"./merchant-accounts-list-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={AccountsPaths.append(createPath).Path}
                filePath={"./merchant-accounts-new-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={
                    AccountsPaths
                        .append(`${AccountsPaths.getParsedName()}-:${accountIdNumberParam}`)
                        .Path
                }
                filePath={"./merchant-accounts-view-route"}
                dirName={__dirname} />

            {Error404Route}
        </Switch>;
    }
}
