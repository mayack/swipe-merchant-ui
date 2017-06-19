import * as React from "react";

import { LazyRoute } from "@app/utils/router/lazy-route";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export const AuthenticationRoutes = [
    <LazyRoute
        key="logout-route"
        path={AppRoutesPaths.Authentication.Logout.Path}
        filePath={"./routes/logout-route"}
        dirName={__dirname} />,
    <LazyRoute
        key="login-route"
        path={AppRoutesPaths.Authentication.Login.Path}
        filePath={"./routes/login-route"}
        dirName={__dirname} />,
    <LazyRoute
        key="signup-route"
        path={AppRoutesPaths.Authentication.SignUp.Path}
        filePath={"./routes/sign-up-route"}
        dirName={__dirname} />
];
