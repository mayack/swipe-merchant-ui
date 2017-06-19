import * as React from "react";
import {
    DropdownHandler,
    DropdownHeader,
    DropdownSection,
    Contracts as DropdownContracts
} from "simplr-dropdown";
import { DateRangePickerView, DateRangePickerOnChangeCallback } from "../date-range-picker/date-range-picker-view";
import * as Moment from "moment";
import { extendMoment, DateRange } from "moment-range";

const moment = extendMoment(Moment);

interface State {
    Range: DateRange;
    Open: boolean;
}

export class DateRangePickerField extends React.PureComponent<{}, State> {
    public state: State = {
        Range: moment.range(moment(), moment()),
        Open: false
    };

    private onDateRangeChange: DateRangePickerOnChangeCallback = (range, custom) => {
        this.setState(state => {
            state.Range = range;
            state.Open = Boolean(custom);
            return state;
        });
    }

    private onHeaderClick: React.MouseEventHandler<HTMLDivElement> = event => {
        this.setState(state => {
            state.Open = !state.Open;
            return state;
        });
    }

    private onDropdownClose = (source: DropdownContracts.EventSource) => {
        if (source === DropdownContracts.EventSource.OutsideClick) {
            this.setState(state => {
                state.Open = false;
                return state;
            });
        }
    }

    private dateRangeToString(): string {
        const { start, end } = this.state.Range;
        const format = "YYYY-MM-DD";
        return `${start.format(format)} / ${end.format(format)}`;
    }

    public render(): JSX.Element {
        return <DropdownHandler
            open={this.state.Open}
            closeOnSectionClick={false}
            onClose={this.onDropdownClose}
        >
            <DropdownHeader onClick={this.onHeaderClick}>
                <input type="text" value={this.dateRangeToString()} readOnly={true} />
            </DropdownHeader>
            <DropdownSection>
                <DateRangePickerView onChange={this.onDateRangeChange} initialRange={this.state.Range} />
            </DropdownSection>
        </DropdownHandler>;
    }
}
