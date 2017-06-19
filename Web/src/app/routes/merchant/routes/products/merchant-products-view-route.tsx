import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { BrowserHistory } from "@app/history";

export interface MerchantProductsViewRouteParams {
    ProductIdNumber: string;
}

interface State {
    ProductId: string;
    ProductIdNumber: number;
}

type Props = RouteComponentProps<MerchantProductsViewRouteParams>;

export class MerchantProductsViewRoute extends React.PureComponent<Props, State> {
    public componentWillMount(): void {
        this.processParams(this.props);
    }

    public componentWillReceiveProps(nextProps: Props): void {
        this.processParams(nextProps);
    }

    private processParams(props: Props): void {
        const params = props.match.params;
        if (params == null || params.ProductIdNumber == null) {
            this.redirectToList();
            return;
        }

        const idNumber = parseInt(params.ProductIdNumber);
        if (!Number.isFinite(idNumber)) {
            this.redirectToList();
            return;
        }

        this.setState(state => {
            state.ProductId = `${AppRoutesPaths.Merchant.Products.getParsedName()}-${idNumber}`;
            state.ProductIdNumber = idNumber;
            return state;
        });

    }

    private redirectToList(): void {
        BrowserHistory.push(AppRoutesPaths.Merchant.Products.toLocationObject());
    }

    public render(): JSX.Element {
        return <div>
            MerchantProductsViewRoute <br />
            ProductsID: {this.state.ProductId} <br />
            <Link
                to={
                    AppRoutesPaths
                        .Merchant
                        .Products
                        .append(`${AppRoutesPaths.Merchant.Products.getParsedName()}-${(this.state.ProductIdNumber + 1)}`)
                        .toLocationObject()} >
                Second id
            </Link>
        </div>;
    }
}
