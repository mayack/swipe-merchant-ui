import * as React from "react";

export class OverlayLoaderView extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return <div className="loadMe-overlay s-filler"></div>;
    }
}
