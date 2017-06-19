import { ReduceStore } from "simplr-flux";
import * as Immutable from "immutable";

import { UINotification } from "../ui-notifications-contracts";
import { AddUINotification, DismissUINotification } from "../actions/ui-notifications-actions";

const DEFAULT_LIFETIME = 6000;

interface StoreState {
    Notifications: Immutable.Map<string, UINotification>;
    Queue: Immutable.List<string>;
    Count: number;
}

class UINotificationsStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();

        this.registerAction<AddUINotification>(AddUINotification, this.addNotificationHandler);
        this.registerAction<DismissUINotification>(DismissUINotification, this.dismissNotificationHandler);
    }

    public getInitialState(): StoreState {
        return {
            Notifications: Immutable.Map<string, UINotification>(),
            Queue: Immutable.List<string>(),
            Count: 0
        };
    }

    private getNotificationId(id: number): string {
        return `notification-${id}`;
    }

    public get FirstNotificationId(): string | undefined {
        return this.getState().Queue.first();
    }

    public get(notificationId: string): UINotification {
        return this.getState().Notifications.get(notificationId);
    }

    private addNotificationHandler = (action: AddUINotification, state: StoreState): StoreState => {
        const notification = action.Notification;
        const notificationId = this.getNotificationId(state.Count++);

        if (notification.Lifetime == null) {
            notification.Lifetime = DEFAULT_LIFETIME;
        }

        const notifications = state.Notifications.set(notificationId, notification);
        const queue = state.Queue.push(notificationId);

        return {
            Notifications: notifications,
            Queue: queue,
            Count: state.Count
        };
    }

    private dismissNotificationHandler = (action: DismissUINotification, state: StoreState): StoreState => {
        if (!state.Notifications.has(action.Id) &&
            !state.Queue.has(state.Queue.indexOf(action.Id))) {
            return state;
        }

        let queue = state.Queue;

        // Remove notification
        const notifications = state.Notifications.remove(action.Id);
        const indexQueue = state.Queue.indexOf(action.Id);
        if (indexQueue !== -1) {
            queue = state.Queue.delete(indexQueue);
        }

        return {
            Notifications: notifications,
            Queue: queue,
            Count: state.Count
        };
    }
}

export const UINotificationsStore = new UINotificationsStoreClass();
