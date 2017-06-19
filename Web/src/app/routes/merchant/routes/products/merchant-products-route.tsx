import * as React from "react";
import { Switch } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { LazyRoute } from "@app/utils/router/lazy-route";
import { Error404Route } from "@app/routes/errors/errors-routes";

// Import interface only
import { MerchantProductsViewRouteParams } from "./merchant-products-view-route";

export class MerchantProductsRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        const { Products: ProductsPaths } = AppRoutesPaths.Merchant;
        const createPath = AppRoutesPaths.Actions.Create.Path;
        const productIdParam: keyof MerchantProductsViewRouteParams = "ProductIdNumber";
        return <Switch>
            <LazyRoute
                exact
                path={ProductsPaths.Path}
                filePath={"./merchant-products-list-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={ProductsPaths.append(createPath).Path}
                filePath={"./merchant-products-new-route"}
                dirName={__dirname} />

            <LazyRoute
                exact
                path={
                    ProductsPaths
                        .append(`${ProductsPaths.getParsedName()}-:${productIdParam}`)
                        .Path
                }
                filePath={"./merchant-products-view-route"}
                dirName={__dirname} />

            {Error404Route}
        </Switch>;
    }
}
