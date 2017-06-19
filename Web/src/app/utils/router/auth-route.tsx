import * as React from "react";
import * as PropTypes from "prop-types";
import { RouteProps, Redirect, RouterChildContext } from "react-router-dom";
import { Container, Store } from "flux/utils";
import { IdentityStore } from "@app/stores/identity/identity-store";
import { OverlayLoaderView } from "@app/components/overlay-loader/overlay-loader-view";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { LocationDescriptorObject } from "history";
import { ContextTypes } from "@app/utils/router/context-types-type";

interface Props extends RouteProps {
    children: JSX.Element | null;
}

interface State {
    IsPending: boolean;
    IsAuthenticated: boolean;
}

export interface AuthenticationLocationState {
    RedirectFrom: LocationDescriptorObject;
}

export class AuthRouteClass extends React.Component<Props, State> {
    public static contextTypes: ContextTypes<RouterChildContext<{}>> = {
        router: PropTypes.object.isRequired
    };

    public context: RouterChildContext<{}>;

    public static getStores(): Array<Store<any>> {
        return [IdentityStore];
    }

    public static calculateState(): State {
        const { IsAuthenticated, Pending } = IdentityStore.getState();
        return {
            IsPending: Pending,
            IsAuthenticated: IsAuthenticated
        };
    }

    private componentAlreadyMounted: boolean = false;

    public componentDidMount(): void {
        this.componentAlreadyMounted = true;
    }

    public componentWillUnmount(): void {
        this.componentAlreadyMounted = false;
    }

    public render(): JSX.Element | null {
        if (!this.componentAlreadyMounted && this.state.IsPending) {
            return <OverlayLoaderView />;
        } else if (this.state.IsAuthenticated) {
            return this.props.children;
        } else {
            const locationState: AuthenticationLocationState = {
                RedirectFrom: this.props.location || this.context.router.route.location
            };
            return <Redirect to={AppRoutesPaths.Authentication.Login.toLocationObject({ state: locationState })} />;
        }
    }

}

export const AuthRoute = Container.create(AuthRouteClass, { withProps: true, pure: false });
