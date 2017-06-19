import { ClientApiBase } from "./client-api-base";
import { AuthResponseDto } from "../contracts/auth-dto";
import { SessionResponseDto } from "../contracts/session-dto";

export class SwipeClientSessionApi extends ClientApiBase {
    public async Refresh(): Promise<AuthResponseDto> {
        return this.ApiClient.Get<AuthResponseDto>("/session_refresh/");
    }
    public async Data(): Promise<SessionResponseDto> {
        return this.ApiClient.Get<SessionResponseDto>("/session/data/");
    }
}
