import * as React from "react";
import { Switch } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";
import { Error404Route } from "@app/routes/errors/errors-routes";

// Import interface only
import { MerchantClientsViewRouteParams } from "./merchant-clients-view-route";

export class MerchantClientsRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Clients: ClientsPaths } = AppRoutesPaths.Merchant;
        const createPath = AppRoutesPaths.Actions.Create.Path;
        const clientIdNumberParam: keyof MerchantClientsViewRouteParams = "ClientIdNumber";

        return <Switch>
            <LazyRoute
                exact
                path={ClientsPaths.Path}
                filePath={"./merchant-clients-list-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={ClientsPaths.append(createPath).Path}
                filePath={"./merchant-clients-new-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={
                    ClientsPaths
                        .append(`${ClientsPaths.getParsedName()}-:${clientIdNumberParam}`)
                        .Path
                }
                filePath={"./merchant-clients-view-route"}
                dirName={__dirname} />

            {Error404Route}
        </Switch>;
    }
}
