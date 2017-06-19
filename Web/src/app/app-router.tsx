import * as React from "react";
import { Router } from "react-router-dom";
import { BrowserHistory } from "./history";
import { AppRoutes } from "./routes/app-routes";

export const AppRouter = <Router history={BrowserHistory}>
    <AppRoutes />
</Router>;
