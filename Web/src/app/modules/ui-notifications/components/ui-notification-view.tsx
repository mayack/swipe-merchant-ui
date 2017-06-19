import * as React from "react";

import { UINotificationsActionsCreators } from "../actions/ui-notifications-actions-creators";
import { UINotificationMessage, UINotificationType } from "../ui-notifications-contracts";

interface Props {
    notificationId: string;
    message: UINotificationMessage;
    type: UINotificationType;
    lifeTime?: number;
}

interface State {
    Pending: boolean;
}

export class UINotificationView extends React.PureComponent<Props, State> {
    public state: State = {
        Pending: false
    };

    private onClose: React.MouseEventHandler<HTMLSpanElement> = (event): void => {
        UINotificationsActionsCreators.Dismiss(this.props.notificationId);
    }

    public componentWillReceiveProps(nextProps: Props): void {
        if (nextProps.notificationId !== this.props.notificationId) {
            this.setState(state => {
                state.Pending = false;
                return state;
            });
        }
    }

    public componentDidMount(): void {
        this.dismissNotification();
    }

    public componentDidUpdate(): void {
        this.dismissNotification();
    }

    private dismissNotification(): void {
        if (this.props.lifeTime == null ||
            this.props.lifeTime === 0 ||
            this.state.Pending) {
            return;
        }

        const { notificationId } = this.props;

        setTimeout(() => {
            UINotificationsActionsCreators.Dismiss(notificationId);
        }, this.props.lifeTime);

        this.setState(state => {
            state.Pending = true;
            return state;
        });
    }

    private getClassNameByType(type: UINotificationType): string {
        const prefix = "notificationBar--";

        switch (type) {
            case UINotificationType.Info: {
                return prefix + "info";
            }
            case UINotificationType.Success: {
                return prefix + "success";
            }
            case UINotificationType.Warning: {
                return prefix + "warning";
            }
            case UINotificationType.Error: {
                return prefix + "danger";
            }
        }
    }

    public renderMessage(): JSX.Element | string {
        if (typeof this.props.message === "string") {
            return this.props.message;
        }

        return this.props.message(this.props.notificationId);
    }

    public render(): JSX.Element {
        return <div className={this.getClassNameByType(this.props.type)}>
            <div className="s-text-size--l s-align-center">
                {this.renderMessage()}
            </div>
            <a className="notificationBarClose icon-close" onClick={this.onClose}>X</a>
        </div>;
    }
}
