import { UINotification } from "../ui-notifications-contracts";

export class AddUINotification {
    constructor(private notification: UINotification) { }

    public get Notification(): UINotification {
        return this.notification;
    }
}

export class DismissUINotification {
    constructor(private notificationId: string) { }

    public get Id(): string {
        return this.notificationId;
    }
}
