import { ApiClientBuilder } from "@app/utils/api-client/api-client";

export abstract class ClientApiBase {
    constructor(protected ApiClient: ApiClientBuilder) { }
}
