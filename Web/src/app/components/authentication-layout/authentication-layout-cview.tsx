import * as React from "react";

export class AuthenticationLayoutCView extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return <div>
            {this.props.children}
        </div>;
    }
}
