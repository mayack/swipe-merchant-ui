import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export class AppSideBarMenuView extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return <div>
            <Link to={AppRoutesPaths.Merchant.Timeline.toLocationObject()}>Timeline</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Invoices.toLocationObject()}>Invoices</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Subscriptions.toLocationObject()}>Subscriptions</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Accounts.toLocationObject()}>Accounts</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Clients.toLocationObject()}>Clients</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Products.toLocationObject()}>Products</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Merchant.Api.toLocationObject()}>Api</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Dev.UiComponents.toLocationObject()}>UI Components</Link>&nbsp;|&nbsp;
             <Link to={AppRoutesPaths.Authentication.Logout.toLocationObject()}>Logout</Link>&nbsp;|&nbsp;
            <hr />
        </div>;
    }
}
