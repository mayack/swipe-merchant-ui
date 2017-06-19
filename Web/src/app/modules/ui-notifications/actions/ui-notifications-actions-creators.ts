import { Dispatcher } from "simplr-flux";
import { AddUINotification, DismissUINotification } from "./ui-notifications-actions";
import { UINotification } from "../ui-notifications-contracts";

export namespace UINotificationsActionsCreators {
    export function Add(notification: UINotification): void {
        Dispatcher.dispatch(new AddUINotification(notification));
    }

    export function Dismiss(notificationId: string): void {
        Dispatcher.dispatch(new DismissUINotification(notificationId));
    }
}
