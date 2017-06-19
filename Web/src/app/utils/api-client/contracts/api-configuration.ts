import { ApiRequestQueryParams } from "./api-request-path";

export interface ApiConfiguration {
    Hostname: string;
    Path: string;
    QueryParams?: ApiRequestQueryParams;
}
