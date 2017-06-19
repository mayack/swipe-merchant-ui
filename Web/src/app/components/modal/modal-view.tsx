import * as React from "react";
import * as classNames from "classnames";
import "./modal-view.css";

interface Props {
    className?: string;
}

export class ModalView extends React.PureComponent<Props, {}> {
    public render(): JSX.Element {
        return <div className={classNames("modal", this.props.className)}>
            {this.props.children}
        </div>;
    }
}
