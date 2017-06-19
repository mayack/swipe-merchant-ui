import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { BrowserHistory } from "@app/history";

export interface MerchantClientsViewRouteParams {
    ClientIdNumber: string;
}

interface State {
    ClientId: string;
    ClientIdNumber: number;
}

type Props = RouteComponentProps<MerchantClientsViewRouteParams>;

export class MerchantClientsViewRoute extends React.PureComponent<Props, State> {
    public componentWillMount(): void {
        this.processParams(this.props);
    }

    public componentWillReceiveProps(nextProps: Props): void {
        this.processParams(nextProps);
    }

    private processParams(props: Props): void {
        const params = props.match.params;
        if (params == null || params.ClientIdNumber == null) {
            this.redirectToList();
            return;
        }

        const idNumber = parseInt(params.ClientIdNumber);
        if (!Number.isFinite(idNumber)) {
            this.redirectToList();
            return;
        }

        this.setState(state => {
            state.ClientId = `${AppRoutesPaths.Merchant.Accounts.getParsedName()}-${idNumber}`;
            state.ClientIdNumber = idNumber;
            return state;
        });

    }

    private redirectToList(): void {
        BrowserHistory.push(AppRoutesPaths.Merchant.Accounts.toLocationObject());
    }

    public render(): JSX.Element {
        return <div>
            MerchantClientsViewRoute <br />
            ClientID: {this.state.ClientId} <br />
            <Link
                to={
                    AppRoutesPaths
                        .Merchant
                        .Clients
                        .append(`${AppRoutesPaths.Merchant.Clients.getParsedName()}-${(this.state.ClientIdNumber + 1)}`)
                        .toLocationObject()} >
                Second id
            </Link>
        </div>;
    }
}
