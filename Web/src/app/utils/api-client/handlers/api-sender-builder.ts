import * as https from "https";
import * as path from "path";

import { ApiConfiguration } from "../contracts/api-configuration";
import { ApiRequestPath, ApiRequestQueryParams } from "../contracts/api-request-path";

interface RequestQueueItem {
    RequestPath: ApiRequestPath | string;
    Method: string;
    Body: any;
    Promise: {
        Resolve(...args: any[]): void;
        Reject(error: any): void;
    };
}

export abstract class ApiSenderBuilder {
    private pendingRequests: number = 0;

    private get canMakeRequest(): boolean {
        // TODO: Update available pending requests number
        return this.pendingRequests <= 0;
    }

    private onNewPendingRequest(): void {
        this.pendingRequests++;
    }

    private onPendingRequestCompleted(): void {
        this.pendingRequests--;
        if (this.canMakeRequest) {
            this.makeRequest();
        }
    }

    protected abstract Configuration: ApiConfiguration | undefined;
    protected abstract AuthToken: string | undefined;
    protected abstract QueuesPaused: boolean;

    public async Get<TResponse>(requestPath: ApiRequestPath): Promise<TResponse>;
    public async Get<TResponse>(requestPath: string): Promise<TResponse>;
    public async Get<TResponse>(requestPath: ApiRequestPath | string): Promise<TResponse> {
        return this.Request<never, TResponse>(requestPath, "GET");
    }

    public async Post<TRequest, TResponse>(requestPath: ApiRequestPath, body: TRequest): Promise<TResponse>;
    public async Post<TRequest, TResponse>(requestPath: string, body: TRequest): Promise<TResponse>;
    public async Post<TRequest, TResponse>(requestPath: ApiRequestPath | string, body: TRequest): Promise<TResponse> {
        return this.Request<TRequest, TResponse>(requestPath, "POST", body);
    }

    public async Put<TRequest, TResponse>(requestPath: ApiRequestPath, body: TRequest): Promise<TResponse>;
    public async Put<TRequest, TResponse>(requestPath: string, body: TRequest): Promise<TResponse>;
    public async Put<TRequest, TResponse>(requestPath: ApiRequestPath | string, body: TRequest): Promise<TResponse> {
        return this.Request<TRequest, TResponse>(requestPath, "PUT", body);
    }

    public async Delete<TResponse>(requestPath: ApiRequestPath): Promise<TResponse>;
    public async Delete<TResponse>(requestPath: string): Promise<TResponse>;
    public async Delete<TResponse>(requestPath: ApiRequestPath | string): Promise<TResponse> {
        return this.Request<never, TResponse>(requestPath, "DELETE");
    }

    private requestsQueue: RequestQueueItem[] = [];

    public async Request<TRequest, TResponse>(
        requestPath: ApiRequestPath | string,
        method: string = "GET",
        body?: TRequest
    ): Promise<TResponse> {
        if (this.Configuration == null) {
            throw new Error("ApiClient: Configuration is not set yet.");
        }

        return new Promise<TResponse>((resolve, reject) => {
            this.requestsQueue.push({
                Body: body,
                Method: method,
                Promise: {
                    Reject: reject,
                    Resolve: resolve
                },
                RequestPath: requestPath
            });
            this.makeRequest();
        });
    }

    private makeRequest(): void {
        if (this.Configuration == null) {
            throw new Error("ApiClient: Configuration is not set yet.");
        }
        if (!this.canMakeRequest) {
            return;
        }
        const requestData = this.requestsQueue.shift();
        if (requestData == null) {
            return;
        }
        this.onNewPendingRequest();
        const configuration = this.Configuration;

        let pathString: string;
        if (typeof requestData.RequestPath !== "string") {
            pathString = requestData.RequestPath.Pathname;

            if (requestData.RequestPath.QueryParams != null) {
                const parsedQueryParams = this.ParseQueryParams(requestData.RequestPath.QueryParams);
                pathString = this.AddQueryParamsStringToPath(pathString, parsedQueryParams);
            }
        } else {
            pathString = requestData.RequestPath;
        }

        if (configuration.QueryParams != null) {
            const parsedGlobalQueryParams = this.ParseQueryParams(configuration.QueryParams);
            pathString = this.AddQueryParamsStringToPath(pathString, parsedGlobalQueryParams);
        }

        const headers: { [key: string]: string | undefined } = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };

        if (this.AuthToken != null && this.AuthToken.length > 0) {
            headers["authorization"] = "Bearer " + this.AuthToken;
        }

        const requestOptions: https.RequestOptions = {
            hostname: configuration.Hostname,
            headers: headers,
            method: requestData.Method
        };

        requestOptions.path = path.join(configuration.Path, pathString);

        const request = https.request(requestOptions, res => {
            const response = new Array<string | Buffer>();
            res.on("data", chunk => {
                response.push(chunk);
            });

            res.on("end", () => {
                let responseData: any | undefined;
                let hasError = false;
                if (response.length !== 0) {
                    const responseString = response.join("");
                    try {
                        const parsedResponse = JSON.parse(responseString);
                        responseData = parsedResponse;
                    } catch (error) {
                        hasError = true;
                        responseData = error;
                    }
                }
                if (!hasError && res.statusCode != null && res.statusCode.toString().slice(0, 1) === "2") {
                    requestData.Promise.Resolve(responseData);
                } else {
                    requestData.Promise.Reject(responseData);
                }

                this.onPendingRequestCompleted();
            });

        });

        request.on("error", error => {
            requestData.Promise.Reject(error);
            this.onPendingRequestCompleted();
        });

        if (requestData.Body != null) {
            const writeBody = (typeof requestData.Body !== "string") ? JSON.stringify(requestData.Body) : requestData.Body;
            request.write(writeBody);
        }

        request.end();
    }

    protected ParseQueryParams(queryParams: ApiRequestQueryParams): string {
        if (typeof queryParams === "string") {
            return queryParams;
        } else if (Array.isArray(queryParams)) {
            return queryParams.join("&");
        } else {
            const dictionaryParams = queryParams as { [key: string]: string };
            const paramsArr = new Array<string>();
            Object.keys(dictionaryParams).forEach(key => {
                paramsArr.push(`${key}=${dictionaryParams[key]}`);
            });
            return paramsArr.join("&");
        }
    }

    protected AddQueryParamsStringToPath(path: string, parsedQueryParams: string): string {
        const queryJoinSymbol = path.indexOf("?") !== -1 ? "&" : "?";
        return path + queryJoinSymbol + parsedQueryParams;
    }

}
