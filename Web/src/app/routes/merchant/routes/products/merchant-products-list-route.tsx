import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

export class MerchantProductsListRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Products: ProductsPaths } = AppRoutesPaths.Merchant;

        return <div>
            MerchantProductsListRoute: <br />
            <Link to={ProductsPaths.append("products-1").toLocationObject()}>Start view products</Link>&nbsp;|&nbsp;
            <Link to={ProductsPaths.append(AppRoutesPaths.Actions.Create.Path).toLocationObject()}>Create new</Link>
        </div>;
    }
}
