import * as React from "react";
import { DateRangePickerField } from "@app/components/date-range-picker-field/date-range-picker-field";

import {
    UINotificationContainer,
    UINotificationsActionsCreators,
    UINotificationType
} from "@app/modules/ui-notifications/ui-notifications";

interface State {
    NotificationMessage: string;
}

export class DevUiComponentsRoute extends React.PureComponent<{}, State> {
    public state: State = {
        NotificationMessage: ""
    };

    private onNotificationMessageChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value;

        this.setState(state => {
            state.NotificationMessage = value;
            return state;
        });
    }

    private onAddNotificationClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        const notificationType = UINotificationType.Info;
        UINotificationsActionsCreators.Add({
            Message: `Type: ${UINotificationType[notificationType]} | Message: ${this.state.NotificationMessage}`,
            Type: notificationType
        });
    }

    public render(): JSX.Element {
        return <div>
            <UINotificationContainer />
            <DateRangePickerField />
            <div style={{ padding: "20px 0" }}>
                <input
                    type="text"
                    placeholder="Notification message"
                    value={this.state.NotificationMessage}
                    onChange={this.onNotificationMessageChange}
                />
                <button onClick={this.onAddNotificationClick}>Add notification</button>
            </div>
        </div>;
    }
}
