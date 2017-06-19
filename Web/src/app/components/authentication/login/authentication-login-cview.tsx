import * as React from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";
import { SwipeClient } from "@app/utils/swipe-client/swipe-client";
import { IdentityActionsCreators } from "@app/actions/identity/identity-actions-creators";
import { AppRoutesPaths } from "@app/routes/app-routes-paths";

import { FormOnSubmitCallback } from "simplr-forms-dom/contracts";
import { Form, Text, Submit, Password } from "simplr-forms-dom";
import { Configuration } from "@app/configuration";

export class AuthenticationLoginCView extends React.PureComponent<{}, {}> {
    private async makeLogin(username: string, password: string): Promise<void> {
        try {
            const responseDetails = await SwipeClient.Authentication.Login({
                username: username,
                password: password
            });

            IdentityActionsCreators.IdentityLoggedIn(username, {
                AccessToken: responseDetails.token,
                ExpiresAt: moment().add(Configuration.Authentication.TokenVerificationIntervalSec, "minutes").toISOString(),
                TokenType: Configuration.Authentication.TokenType
            });
        } catch (error) {
            console.error(error);
            let errorMessage: string;
            if (Array.isArray(error)) {
                errorMessage = error[0];
            } else {
                errorMessage = `Login failed.`;
            }
            alert(errorMessage);
        }
    }

    private onSubmit: FormOnSubmitCallback = (event, store) => {
        const loginData = store.ToObject<{ username: string, password: string }>();
        this.makeLogin(loginData.username, loginData.password);
    }

    public render(): JSX.Element {
        return <div>
            <h1>Login route.</h1>
            <Form onSubmit={this.onSubmit}>
                <Text name="username" />
                <Password name="password" />
                <Submit>
                    Login
                </Submit>
            </Form>
            <hr />
            <Link to={{ pathname: AppRoutesPaths.Authentication.SignUp.Path }}>Sign Up</Link>
        </div>;
    }
}
