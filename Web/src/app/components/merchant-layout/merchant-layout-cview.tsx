import * as React from "react";
import { AppSideBarMenuView } from "./sidebar-menu/sidebar-menu-view";
import { AppSideBarReminderView } from "./sidebar-reminder/sidebar-reminder-view";
import { FeedbackBubbleView } from "./feedback-bubble/feedback-bubble-view";
import { ModalView } from "@app/components/modal/modal-view";
import "./merchant-layout-cview.css";

interface State {
    feedbackActive: boolean;
}

const ESC_KEYCODE = 27;

export class MerchantLayoutCView extends React.PureComponent<{}, State> {

    public state: State = {
        feedbackActive: false
    };

    public componentWillMount(): void {
        if (window != null) {
            window.addEventListener("keydown", this.onKeyPress);
        }
    }

    public componentWillUnmount(): void {
        if (window != null) {
            window.removeEventListener("keydown", this.onKeyPress);
        }
    }

    private onKeyPress = (event: KeyboardEvent) => {
        if (this.state.feedbackActive && event.keyCode === ESC_KEYCODE) {
            this.setState((state: State) => {
                state.feedbackActive = false;
                return state;
            });
        }
    }

    private onFeedbackClick: React.MouseEventHandler<HTMLElement> = () => {
        this.setState((state: State) => {
            state.feedbackActive = !this.state.feedbackActive;
            return state;
        });
    }

    private renderFeedbackModal(): JSX.Element | null {
        if (this.state.feedbackActive) {
            return <ModalView className="feedback-modal">
                Feedback form
            </ModalView>;
        } else {
            return null;
        }
    }

    public render(): JSX.Element {
        return <div className="merchant-layout-cview">
            <AppSideBarMenuView />
            {this.props.children}
            <AppSideBarReminderView />
            <FeedbackBubbleView active={this.state.feedbackActive} onClick={this.onFeedbackClick} />
            {this.renderFeedbackModal()}
        </div>;
    }
}
