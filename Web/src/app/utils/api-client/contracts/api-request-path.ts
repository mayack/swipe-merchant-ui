export type ApiRequestQueryParams = string | string[] | { [key: string]: string } | {};

export interface ApiRequestPath {
    Pathname: string;
    QueryParams?: ApiRequestQueryParams;
}
