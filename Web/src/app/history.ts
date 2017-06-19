import { createBrowserHistory } from "history";

export const BrowserHistory = createBrowserHistory();

export interface GlobalLocationState {
    skipScrollToTop?: boolean;
}

function ScrollToTop(): void {
    window.scrollTo(0, 0);
}

BrowserHistory.listen((location, action) => {
    let hasScrollToTop = true;
    if (location.state != null) {
        const state = location.state as GlobalLocationState;
        if (state.skipScrollToTop != null) {
            hasScrollToTop = !state.skipScrollToTop;
        }
    }

    if (hasScrollToTop) {
        ScrollToTop();
    }
});
