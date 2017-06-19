import * as React from "react";
import * as classNames from "classnames";

interface Props {
    active?: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export class FeedbackBubbleView extends React.Component<Props, {}> {

    public static defaultProps: Partial<Props> = {
        active: false
    };

    public render(): JSX.Element {
        // TODO: remove "feedback" text when styles implemented
        return <div className={classNames("feedback", { "active": this.props.active })}>
            <a
                onClick={this.props.onClick}
                className={classNames(
                    "feedbackBubblesMain",
                    "s-button",
                    "s-swatch-silver",
                    "icon-mail",
                    "s-text-size--5xl",
                    "s-shape-circle",
                    "s-padding--xs"
                )}>Feedback</a>
        </div>;
    }
}
