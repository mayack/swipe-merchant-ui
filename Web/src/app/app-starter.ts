import * as ReactDOM from "react-dom";
import { AppRouter } from "./app-router";
import { Configuration } from "./configuration";
import { ApiClientActionsCreators } from "./utils/api-client/api-client";
import { IdentityStore } from "./stores/identity/identity-store";

class AppStarter {
    constructor() {
        ApiClientActionsCreators.SetConfiguration(Configuration.Api);

        IdentityStore.addListener(() => {
            const { Token, Pending } = IdentityStore.getState();
            if (Pending) {
                ApiClientActionsCreators.PauseApiQueues();
            } else {
                ApiClientActionsCreators.ResumeApiQueues();
            }

            if (Token != null) {
                ApiClientActionsCreators.SetApiAuthToken(Token.AccessToken);
            } else {
                ApiClientActionsCreators.CleanApiAuthToken();
            }
        });

        const container = this.loadContainer(Configuration.AppContainerId);
        ReactDOM.render(AppRouter, container);
    }

    private loadContainer(containerId: string): HTMLElement {
        const container = document.getElementById(containerId);
        if (container == null) {
            throw new Error(`AppStarter: HTML document doesn't have container with specified id "${containerId}" from configuration. ` +
                `Check "src/app/configuration.ts" or "src/index.html" files.`);
        }
        return container;
    }
}

new AppStarter();
