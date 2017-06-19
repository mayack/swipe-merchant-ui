interface Menu {
    invoices: number;
    timeline: number;
    clients: number;
    products: number;
    subscriptions: number;
}

interface Merchant {
    currency: string;
    balance: number;
    hash: string;
    name: string;
    icon: string;
    notification_type: string;
}

interface NotificationBar {
    text: string;
    // TODO: Implement specified strings
    type: "info" | string;
}

export interface SessionResponseDto {
    menu: Menu;
    merchants: Merchant[];
    notifications: string[];
    notification_bar: NotificationBar[];
}
