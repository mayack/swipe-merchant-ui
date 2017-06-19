import * as React from "react";
import { Container, Store } from "flux/utils";
import { Redirect } from "react-router-dom";
import { LocationDescriptorObject } from "history";

import { IdentityStore } from "@app/stores/identity/identity-store";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { AuthenticationLoginCView } from "./authentication-login-cview";

interface Props {
    fromRoute?: LocationDescriptorObject;
}

interface State {
    IsAuthenticated: boolean;
}

export class AuthenticationLoginContainerClass extends React.PureComponent<Props, State> {
    public static getStores(): Array<Store<any>> {
        return [IdentityStore];
    }

    public static calculateState(): State {
        return {
            IsAuthenticated: IdentityStore.getState().IsAuthenticated
        };
    }

    public render(): JSX.Element | null {
        if (this.state.IsAuthenticated) {
            return <Redirect to={this.props.fromRoute || AppRoutesPaths.Merchant.toLocationObject()} />;
        }
        return <AuthenticationLoginCView />;
    }
}

export const AuthenticationLoginContainer = Container.create(AuthenticationLoginContainerClass, { withProps: true, pure: true });
