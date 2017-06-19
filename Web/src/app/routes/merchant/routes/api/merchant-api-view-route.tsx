import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export class MerchantApiViewRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return <div>
            MerchantApiViewRoute
            <hr />
            <Link to={AppRoutesPaths.Merchant.ApiHooks.append(AppRoutesPaths.Actions.Create.Path).Path}>
                Create hook
            </Link>
            &nbsp;|&nbsp;
            <Link to={AppRoutesPaths.Merchant.ApiKeys.append(AppRoutesPaths.Actions.Create.Path).Path}>
                Create key
            </Link>
        </div>;
    }
}
