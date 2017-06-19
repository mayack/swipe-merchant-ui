import { ApiClient } from "../api-client/api-client";
import { SwipeClientAuthenticationApi } from "./api-handlers/swipe-client-authentication-api";
import { SwipeClientMerchantApi } from "./api-handlers/swipe-client-merchant-api";
import { SwipeClientSessionApi } from "./api-handlers/swipe-client-session-api";

class SwipeClientBuilder {
    public Authentication: SwipeClientAuthenticationApi = new SwipeClientAuthenticationApi(ApiClient);
    public Merchant: SwipeClientMerchantApi = new SwipeClientMerchantApi(ApiClient);
    public Session: SwipeClientSessionApi = new SwipeClientSessionApi(ApiClient);
}

export const SwipeClient = new SwipeClientBuilder();
