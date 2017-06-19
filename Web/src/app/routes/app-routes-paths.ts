import { BuildRoutesPaths, CopyRoutePathFromName } from "@app/utils/router/routes-paths-builder";

export namespace AppRoutesPaths {
    export const Actions = BuildRoutesPaths({
        Create: "/create",
        Delete: "/delete"
    });

    export const Error = BuildRoutesPaths({
        Error403: "/403",
        Error404: "/404",
        Forbidden: CopyRoutePathFromName("Error403"),
        NotFound: CopyRoutePathFromName("Error404")
    }, "/error");

    export const Authentication = BuildRoutesPaths({
        ForgotPassword: "/forgot-password",
        Login: "/login",
        Logout: "/logout",
        SetPassword: "/set-password",
        SignUp: "/signup"
    });

    export const Merchant = BuildRoutesPaths({
        Home: CopyRoutePathFromName("Timeline"),
        Accounts: "/accounts",
        Invoices: "/invoices",
        Subscriptions: "/subscriptions",
        Api: "/api",
        ApiHooks: "/api/hooks",
        ApiKeys: "/api/keys",
        Clients: "/clients",
        Products: "/products",
        Timeline: "/timeline"
    }, "/merchant");

    export const Dev = BuildRoutesPaths({
        UiComponents: "/merchant/ui-components"
    });

    export const Home = Authentication.Login;
}
