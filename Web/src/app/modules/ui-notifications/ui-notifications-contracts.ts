export interface UINotification {
    Message: UINotificationMessage;
    Type: UINotificationType;
    /**
     * Notification lifetime in ms.
     */
    Lifetime?: number;
}

export type UINotificationMessage = string | UINotificationRender;

export type UINotificationRender = (notificationId: string) => JSX.Element;

export enum UINotificationType {
    Info = 16,
    Success = 32,
    Warning = 48,
    Error = 64
}
