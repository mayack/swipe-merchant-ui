import { ReduceStore } from "simplr-flux";
import * as moment from "moment";

import { IdentityTokenData } from "./contracts/identity-token-data";
import { IdentityLoggedInAction, IdentityLoggedOutAction, IdentityTokenExpiredAction } from "@app/actions/identity/identity-actions";
import { IdentityActionsCreators } from "@app/actions/identity/identity-actions-creators";
import { SwipeClient } from "@app/utils/swipe-client/swipe-client";
import { Configuration } from "@app/configuration";

interface State {
    Token?: IdentityTokenData;
    UserId?: string;
    Pending: boolean;
    IsAuthenticated: boolean;
}

const MAX_INT32 = 2147483647;

class IdentityStoreClass extends ReduceStore<State> {
    constructor() {
        super();

        this.registerAction(IdentityLoggedInAction, this.onLoggedInAction);
        this.registerAction(IdentityLoggedOutAction, this.onLoggedOutAction);
        this.registerAction(IdentityTokenExpiredAction, this.onIdentityTokenExpiredAction);
    }

    private expireTimer: NodeJS.Timer | undefined;

    public getInitialState(): State {
        return {
            Token: undefined,
            UserId: undefined,
            Pending: false,
            IsAuthenticated: false
        };
    }

    private onLoggedInAction = (action: IdentityLoggedInAction, state: State): State => {
        const newState: State = {
            IsAuthenticated: true,
            Pending: false,
            Token: action.IdentityTokenData,
            UserId: action.UserId
        };
        return this.setTokenExpireTimeout(action.IdentityTokenData.ExpiresAt, newState);
    }

    private onLoggedOutAction = (action: IdentityLoggedOutAction, state: State): State => {
        if (this.expireTimer != null) {
            clearTimeout(this.expireTimer);
            this.expireTimer = undefined;
        }
        const newState = this.getInitialState();
        return newState;
    }

    private onIdentityTokenExpiredAction = (action: IdentityTokenExpiredAction, state: State): State => {
        if (state.Token == null || state.UserId == null) {
            return this.getInitialState();
        }
        return this.validateToken(state.UserId, state.Token, state);
    }

    private validateToken(userId: string, token: IdentityTokenData, state: State): State {
        let newState: State = this.getInitialState();
        this.expireTimer = undefined;
        if (this.isTokenExpired(token.ExpiresAt)) {
            newState.Pending = true;
            newState.IsAuthenticated = true;
            this.refreshSession(userId);
        } else {
            newState = this.setTokenExpireTimeout(token.ExpiresAt, newState);
            newState.Pending = false;
            newState.IsAuthenticated = true;
        }
        return newState;
    }

    private async refreshSession(userId: string): Promise<void> {
        try {
            const newSessionData = await SwipeClient.Session.Refresh();
            IdentityActionsCreators.IdentityLoggedIn(userId,
                {
                    AccessToken: newSessionData.token,
                    ExpiresAt: moment().add(Configuration.Authentication.TokenVerificationIntervalSec, "minutes").toISOString(),
                    TokenType: Configuration.Authentication.TokenType
                });
        } catch (error) {
            console.error(error);
            IdentityActionsCreators.IdentityLoggedOut();
        }
    }

    private setTokenExpireTimeout(expireAt: string, state: State): State {
        const endTime = moment(expireAt);
        const startTime = moment();
        let diff = -moment(startTime).diff(endTime, "seconds") * 1000;
        if (diff >= 0) {
            if (diff > MAX_INT32) {
                diff = MAX_INT32;
            }
            this.expireTimer = setTimeout(() => {
                IdentityActionsCreators.IdentityTokenExpired();
            }, diff);
            return state;
        }
        return this.onLoggedOutAction(new IdentityLoggedOutAction(), state);
    }

    private isTokenExpired(isoTime: string): boolean {
        return moment().add(1, "second").isAfter(isoTime);
    }
}

export const IdentityStore = new IdentityStoreClass();
