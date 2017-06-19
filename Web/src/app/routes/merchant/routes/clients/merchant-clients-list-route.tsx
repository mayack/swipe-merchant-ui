import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export class MerchantClientsListRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Clients: ClientsPaths } = AppRoutesPaths.Merchant;

        return <div>
            MerchantClientsListRoute: <br />
            <Link to={ClientsPaths.append("clients-1").toLocationObject()}>Start view clients</Link>&nbsp;|&nbsp;
            <Link to={ClientsPaths.append(AppRoutesPaths.Actions.Create.Path).toLocationObject()}>Create new</Link>
        </div>;
    }
}
