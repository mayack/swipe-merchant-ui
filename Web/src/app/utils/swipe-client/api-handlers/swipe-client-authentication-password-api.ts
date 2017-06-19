import { ClientApiBase } from "./client-api-base";
import * as PasswordContracts from "../contracts/password-dto";

export class SwipeClientAuthenticationPasswordApi extends ClientApiBase {
    public async Forgot(email: string): Promise<{}> {
        const data: PasswordContracts.PasswordForgotRequestDto = {
            email: email
        };
        return this.ApiClient.Post<PasswordContracts.PasswordForgotRequestDto, {}>("/password/forgot/", data);
    }

    public async Set(data: PasswordContracts.PasswordSetRequestDto): Promise<{}> {
        return this.ApiClient.Post<PasswordContracts.PasswordSetRequestDto, {}>("/password/set/", data);
    }

    public async VerifyToken(token: string): Promise<PasswordContracts.PasswordVerifyTokenResponseDto> {
        const queryParams: PasswordContracts.PasswordVerifyTokenQueryParamData = { token: token };
        return this.ApiClient.Get<PasswordContracts.PasswordVerifyTokenResponseDto>({
            Pathname: "/password/verify_token/",
            QueryParams: queryParams
        });
    }
}
