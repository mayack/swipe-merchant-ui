import { ActionEmitter } from "@app/utils/actions-emitter/action-emitter";

import { ApiConfiguration } from "../api-client";
import * as ApiClientActions from "./api-client-actions";

export namespace ApiClientActionsCreators {
    export function SetConfiguration(configuration: ApiConfiguration): void {
        ActionEmitter.emit(new ApiClientActions.SetApiConfigurationAction(configuration));
    }

    export function SetApiAuthToken(authToken: string): void {
        ActionEmitter.emit(new ApiClientActions.SetApiAuthTokenAction(authToken));
    }

    export function CleanApiAuthToken(): void {
        ActionEmitter.emit(new ApiClientActions.CleanApiAuthTokenAction());
    }

    export function SetPending(): void {
        ActionEmitter.emit(new ApiClientActions.CleanApiAuthTokenAction());
    }

    export function ResumeApiQueues(): void {
        ActionEmitter.emit(new ApiClientActions.ResumeApiQueuesAction());
    }

    export function PauseApiQueues(): void {
        ActionEmitter.emit(new ApiClientActions.PauseApiQueuesAction());
    }
}
