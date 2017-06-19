import { ApiSenderBuilder } from "./api-sender-builder";
import { ActionEmitter } from "@app/utils/actions-emitter/action-emitter";
import * as ApiClientActions from "../actions/api-client-actions";
import { ApiConfiguration } from "../contracts/api-configuration";

export class ApiClientBuilder extends ApiSenderBuilder {
    constructor() {
        super();
        ActionEmitter.addListener<ApiClientActions.SetApiConfigurationAction>(
            ApiClientActions.SetApiConfigurationAction,
            this.onSetConfiguration
        );
        ActionEmitter.addListener<ApiClientActions.SetApiAuthTokenAction>(
            ApiClientActions.SetApiAuthTokenAction,
            this.onSetAuthToken
        );
        ActionEmitter.addListener<ApiClientActions.CleanApiAuthTokenAction>(
            ApiClientActions.CleanApiAuthTokenAction,
            this.onCleanAuthToken
        );
        ActionEmitter.addListener<ApiClientActions.PauseApiQueuesAction>(
            ApiClientActions.PauseApiQueuesAction,
            this.onPauseApiQueques
        );
        ActionEmitter.addListener<ApiClientActions.ResumeApiQueuesAction>(
            ApiClientActions.ResumeApiQueuesAction,
            this.onResumeApiQueques
        );
    }

    protected Configuration: ApiConfiguration | undefined;
    protected AuthToken: string | undefined;
    protected QueuesPaused: boolean = false;

    private onSetConfiguration = (action: ApiClientActions.SetApiConfigurationAction): void => {
        this.Configuration = action.Configuration;
    }

    private onSetAuthToken = (action: ApiClientActions.SetApiAuthTokenAction): void => {
        this.AuthToken = action.AuthToken;
    }

    private onCleanAuthToken = (): void => {
        this.AuthToken = undefined;
    }

    private onPauseApiQueques = (): void => {
        this.QueuesPaused = true;
    }

    private onResumeApiQueques = (): void => {
        this.QueuesPaused = false;
    }
}
