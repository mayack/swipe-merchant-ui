import { IdentityTokenData } from "@app/stores/identity/contracts/identity-token-data";

export class IdentityLoggedInAction {
    constructor(private userId: string, private identityTokenData: IdentityTokenData) { }

    public get IdentityTokenData(): IdentityTokenData {
        return this.identityTokenData;
    }

    public get UserId(): string {
        return this.userId;
    }
}

export class IdentityLoggedOutAction { }

export class IdentityTokenExpiredAction { }
