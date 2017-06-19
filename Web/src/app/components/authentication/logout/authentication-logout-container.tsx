import * as React from "react";
import { Container, Store } from "flux/utils";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { Redirect } from "react-router-dom";
import { IdentityStore } from "@app/stores/identity/identity-store";
import { IdentityActionsCreators } from "@app/actions/identity/identity-actions-creators";
import { OverlayLoaderView } from "@app/components/overlay-loader/overlay-loader-view";

interface State {
    Pending: boolean;
}

export class AuthenticationLogoutContainerClass extends React.PureComponent<{}, State> {
    public static getStores(): Array<Store<any>> {
        return [IdentityStore];
    }

    public static calculateState(): State {
        const { Pending, IsAuthenticated } = IdentityStore.getState();
        return {
            Pending: IsAuthenticated || Pending
        };
    }

    public componentDidMount(): void {
        if (this.state.Pending) {
            IdentityActionsCreators.IdentityLoggedOut();
        }
    }

    public render(): JSX.Element | null {
        if (this.state.Pending) {
            return <OverlayLoaderView />;
        }
        return <Redirect to={AppRoutesPaths.Authentication.Login.toLocationObject()} />;
    }
}

export const AuthenticationLogoutContainer = Container.create(AuthenticationLogoutContainerClass);
