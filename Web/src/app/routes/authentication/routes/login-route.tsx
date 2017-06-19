import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { LocationDescriptorObject } from "history";
import { AuthenticationLayout } from "@app/components/authentication-layout/authentication-layout";
import { AuthenticationLoginContainer } from "@app/components/authentication/authentication-components";
import { AuthenticationLocationState } from "@app/utils/router/auth-route";

export class LoginRoute extends React.PureComponent<RouteComponentProps<{}>, {}> {
    private isLocationAuthenticationState(locationState: any): locationState is AuthenticationLocationState {
        return (locationState != null && locationState.RedirectFrom != null);
    }

    public render(): JSX.Element {
        let fromRoute: LocationDescriptorObject | undefined;

        const locationState = this.props.location.state;
        if (this.isLocationAuthenticationState(locationState)) {
            fromRoute = locationState.RedirectFrom;
        }

        return <AuthenticationLayout>
            <AuthenticationLoginContainer fromRoute={fromRoute} />
        </AuthenticationLayout>;
    }
}
