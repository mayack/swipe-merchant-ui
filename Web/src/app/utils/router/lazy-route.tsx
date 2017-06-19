import * as React from "react";
import * as path from "path";
import * as PropTypes from "prop-types";
import { RouteProps, RouterChildContext, RouteComponentProps, match } from "react-router-dom";

import { ContextTypes } from "./context-types-type";
import { OverlayLoaderView } from "@app/components/overlay-loader/overlay-loader-view";

interface Props extends RouteProps {
    filePath: string;
    dirName?: string;
    computedMatch?: match<{}>;
}

interface State {
    RouteClass?: typeof React.Component;
}

export class LazyRoute extends React.Component<Props, State> {
    public static contextTypes: ContextTypes<RouterChildContext<{}>> = {
        router: PropTypes.object.isRequired
    };

    public context: RouterChildContext<{}>;

    public state: State = {};

    private isCancelled: boolean = false;

    public static defaultProps: Partial<Props> = {
        dirName: "/app/routes"
    };

    private loadRoute(props: Props): void {
        if (this.state.RouteClass != null) {
            this.setState(state => {
                state.RouteClass = undefined;
                return state;
            });
        }
        const pathname = path.resolve(props.dirName, props.filePath);
        this.loadAsync(pathname);
    }

    public componentDidMount(): void {
        this.loadRoute(this.props);
    }

    private loadAsync(routePathname: string): void {
        SystemJS.import(routePathname)
            .then(fileModule => {
                if (this.isCancelled) {
                    return;
                }
                if (!fileModule.__esModule) {
                    throw new Error(`LazyLoadRoute: Route must be exported as esModule.`);
                }
                if (fileModule.default != null) {
                    throw new Error(`LazyLoadRoute: Route component cannot be exported as default from file "${routePathname}.tsx".`);
                }
                const keys = Object.keys(fileModule);
                if (keys.length === 0) {
                    throw new Error(`LazyLoadRoute: Cannot find exported route component in file "${routePathname}.tsx".`);
                }
                if (keys.length > 1) {
                    throw new Error(`LazyLoadRoute: Only one route component must be exported from file "${routePathname}.tsx".`);
                }
                const routeClass = fileModule[keys[0]];
                if (typeof routeClass !== "function") {
                    throw new Error(`LazyLoadRoute: Route should be a valid react component in file "${routePathname}.tsx".`);
                }

                this.setState(state => {
                    state.RouteClass = routeClass;
                    return state;
                });
            })
            .catch(error => {
                throw error;
            });
    }

    public componentWillReceiveProps(nextProps: Props): void {
        this.loadRoute(nextProps);
    }

    public componentWillUnmount(): void {
        this.isCancelled = true;
    }

    public render(): JSX.Element {
        const { RouteClass } = this.state;
        if (RouteClass != null) {
            const routeProps: RouteComponentProps<{}> = {
                history: this.context.router.history,
                location: this.props.location || this.context.router.route.location,
                match: this.props.computedMatch || this.context.router.route.match
            };
            return <RouteClass {...routeProps} />;
        }
        if (this.props.children != null) {
            return <div>{this.props.children}</div>;
        }

        return <OverlayLoaderView />;
    }
}
