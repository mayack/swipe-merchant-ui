import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";
import { AuthenticationLayout } from "@app/components/authentication-layout/authentication-layout";

export class SignUpRoute extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return <AuthenticationLayout>
            <h1>SignUp route.</h1>
            <Link to={{ pathname: AppRoutesPaths.Authentication.Login.Path }}>Go to Login</Link>
        </AuthenticationLayout>;
    }
}
