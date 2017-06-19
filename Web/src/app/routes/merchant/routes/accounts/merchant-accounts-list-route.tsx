import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export class MerchantAccountsListRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Accounts: AccountsPaths } = AppRoutesPaths.Merchant;

        return <div>
            MerchantAccountsListRoute: <br />
            <Link to={AccountsPaths.append("accounts-1").toLocationObject()}>Start view accounts</Link>&nbsp;|&nbsp;
            <Link to={AccountsPaths.append(AppRoutesPaths.Actions.Create.Path).toLocationObject()}>Create new</Link>
        </div>;
    }
}
