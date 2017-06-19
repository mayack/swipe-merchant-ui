import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { AuthenticationLogoutContainer } from "@app/components/authentication/authentication-components";

export class LogoutRoute extends React.PureComponent<RouteComponentProps<{}>, {}> {
    public render(): JSX.Element {
        return <AuthenticationLogoutContainer />;
    }
}
