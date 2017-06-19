import { ApiConfiguration } from "@app/utils/api-client/api-client";

export class SetApiConfigurationAction {
    constructor(private configuration: ApiConfiguration) { }

    public get Configuration(): ApiConfiguration {
        return this.configuration;
    }
}

export class SetApiAuthTokenAction {
    constructor(private authToken: string) { }

    public get AuthToken(): string {
        return this.authToken;
    }
}

export class CleanApiAuthTokenAction { }

export class PauseApiQueuesAction { }

export class ResumeApiQueuesAction { }
