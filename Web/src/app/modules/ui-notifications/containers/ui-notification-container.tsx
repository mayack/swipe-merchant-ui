import * as React from "react";
import { Store, Container } from "flux/utils";

import { UINotificationView } from "../components/ui-notification-view";
import { UINotificationsStore } from "../stores/ui-notifications-store";
import { UINotification } from "../ui-notifications-contracts";

interface State {
    NotificationId?: string;
    Notification?: UINotification;
}

class UINotificationContainerClass extends React.Component<{}, State> {
    public static getStores(): Array<Store<any>> {
        return [UINotificationsStore];
    }

    public static calculateState(state: State): State {
        if (state == null) {
            state = {};
        }

        state.NotificationId = UINotificationsStore.FirstNotificationId;
        if (state.NotificationId != null) {
            state.Notification = UINotificationsStore.get(state.NotificationId);
        }

        return state;
    }

    public render(): JSX.Element | null {
        if (this.state.NotificationId == null ||
            this.state.Notification == null) {
            return null;
        }

        return <UINotificationView
            notificationId={this.state.NotificationId}
            message={this.state.Notification.Message}
            type={this.state.Notification.Type}
            lifeTime={this.state.Notification.Lifetime}
        />;
    }
}

export const UINotificationContainer = Container.create(UINotificationContainerClass);
