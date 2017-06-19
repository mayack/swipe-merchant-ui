import { ClientApiBase } from "./client-api-base";
import { AuthRequestDto, AuthResponseDto } from "../contracts/auth-dto";
import { SwipeClientAuthenticationPasswordApi } from "./swipe-client-authentication-password-api";

export class SwipeClientAuthenticationApi extends ClientApiBase {
    public async Login(loginRequest: AuthRequestDto): Promise<AuthResponseDto> {
        return this.ApiClient.Post<AuthRequestDto, AuthResponseDto>("/auth/", loginRequest);
    }
    public Password: SwipeClientAuthenticationPasswordApi = new SwipeClientAuthenticationPasswordApi(this.ApiClient);
}
