export * from "./contracts/api-configuration";
export * from "./contracts/api-request-path";

import * as ApiClientActions from "./actions/api-client-actions";
import { ApiClientActionsCreators } from "./actions/api-client-actions-creators";

import { ApiClientBuilder } from "./handlers/api-client-builder";
export const ApiClient = new ApiClientBuilder();

export {
    ApiClientBuilder,
    ApiClientActions,
    ApiClientActionsCreators
};
