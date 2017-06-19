import { Dispatcher } from "simplr-flux";
import { IdentityLoggedInAction, IdentityLoggedOutAction, IdentityTokenExpiredAction } from "./identity-actions";
import { IdentityTokenData } from "@app/stores/identity/contracts/identity-token-data";

export namespace IdentityActionsCreators {
    export function IdentityLoggedIn(userId: string, identityTokenData: IdentityTokenData): void {
        Dispatcher.dispatch(new IdentityLoggedInAction(userId, identityTokenData));
    }
    export function IdentityLoggedOut(): void {
        Dispatcher.dispatch(new IdentityLoggedOutAction());
    }
    export function IdentityTokenExpired(): void {
        Dispatcher.dispatch(new IdentityTokenExpiredAction());
    }
}
