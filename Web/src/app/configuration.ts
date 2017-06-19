import { ApiConfiguration } from "@app/utils/api-client/api-client";

export namespace Configuration {
    export const AppContainerId: string = "app-root";

    export const Api: ApiConfiguration = {
        Hostname: "swipegateway.com",
        Path: "/api/v0.5/"
    };

    export const Authentication = {
        TokenVerificationIntervalSec: 60,
        TokenType: "Bearer"
    };
}
