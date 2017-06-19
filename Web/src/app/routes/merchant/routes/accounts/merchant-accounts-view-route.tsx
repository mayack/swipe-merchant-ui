import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { BrowserHistory } from "@app/history";

export interface MerchantAccountsViewRouteParams {
    AccountIdNumber: string;
}

interface State {
    AccountId: string;
    AccountIdNumber: number;
}

type Props = RouteComponentProps<MerchantAccountsViewRouteParams>;

export class MerchantAccountsViewRoute extends React.PureComponent<Props, State> {
    public componentWillMount(): void {
        this.processParams(this.props);
    }

    public componentWillReceiveProps(nextProps: Props): void {
        this.processParams(nextProps);
    }

    private processParams(props: Props): void {
        const params = props.match.params;
        if (params == null || params.AccountIdNumber == null) {
            this.redirectToList();
            return;
        }

        const idNumber = parseInt(params.AccountIdNumber);
        if (!Number.isFinite(idNumber)) {
            this.redirectToList();
            return;
        }

        this.setState(state => {
            state.AccountId = `${AppRoutesPaths.Merchant.Accounts.getParsedName()}-${idNumber}`;
            state.AccountIdNumber = idNumber;
            return state;
        });

    }

    private redirectToList(): void {
        BrowserHistory.push(AppRoutesPaths.Merchant.Accounts.toLocationObject());
    }

    public render(): JSX.Element {
        return <div>
            MerchantAccountsViewRoute <br />
            AccountID: {this.state.AccountId} <br />
            <Link
                to={
                    AppRoutesPaths
                        .Merchant
                        .Accounts
                        .append(`${AppRoutesPaths.Merchant.Accounts.getParsedName()}-${(this.state.AccountIdNumber + 1)}`)
                        .toLocationObject()} >
                Second id
            </Link>
        </div>;
    }
}
