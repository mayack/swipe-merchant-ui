import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoutesPaths } from "../app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";

export const Error404Route = <LazyRoute filePath={"./routes/error-404-route"} dirName={__dirname} />;

export class ErrorsRoutes extends Route {
    public render(): JSX.Element {
        return <Route path={this.props.path}>
            <Switch>
                <LazyRoute path={AppRoutesPaths.Error.Error404.Path} filePath={"./routes/error-404-route"} dirName={__dirname} />
                <LazyRoute path={AppRoutesPaths.Error.Error403.Path} filePath={"./routes/error-403-route"} dirName={__dirname} />
                {Error404Route}
            </Switch>
        </Route>;
    }
}
