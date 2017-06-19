import * as React from "react";
import {
    DropdownHandler,
    DropdownHeader,
    DropdownSection
} from "simplr-dropdown";
import * as classnames from "classnames";
import * as Moment from "moment";
import { extendMoment, DateRange } from "moment-range";

const moment = extendMoment(Moment);

import * as DayPicker from "react-day-picker";

import "./date-range-picker-view.css";

export type DateRangePickerOnChangeCallback = (range: DateRange, custom?: boolean) => void;

interface Props {
    onChange?: DateRangePickerOnChangeCallback;
    initialRange?: DateRange;
}

interface State {
    DropdownOpen: boolean;
    Range: DateRange;
    StartDateClicked: boolean;
}

export class DateRangePickerView extends React.Component<Props, State> {
    public state: State = {
        DropdownOpen: false,
        Range: moment.range(moment(), moment()),
        StartDateClicked: true
    };

    public componentWillMount(): void {
        if (this.props.initialRange != null) {
            const initialRange = this.props.initialRange;
            this.setState(state => {
                state.Range = initialRange;
                return state;
            });
        }
    }

    private dayPickerComponent: DayPicker | undefined;

    private onHandleDayClick = (day: Date): void => {
        const selectedDay = moment(day);
        this.setState(state => {
            if (!state.StartDateClicked) {
                if (selectedDay.isAfter(state.Range.start)) {
                    state.Range = moment.range(state.Range.start, selectedDay);
                } else {
                    state.Range = moment.range(selectedDay, state.Range.start);
                }
                state.StartDateClicked = true;
            } else {
                state.Range = moment.range(day, day);
                state.StartDateClicked = false;
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range, true);
            }

            return state;
        });
    }

    private onThisWeekClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        this.setState(state => {
            state.Range = moment.range(moment().startOf("week"), moment().endOf("week"));
            if (this.dayPickerComponent != null) {
                this.dayPickerComponent.showMonth(state.Range.start.toDate());
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range);
            }

            return state;
        });
    }

    private onLast7DaysClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        this.setState(state => {
            state.Range = moment.range(moment().subtract(7, "days"), moment());
            if (this.dayPickerComponent != null) {
                this.dayPickerComponent.showMonth(state.Range.start.toDate());
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range);
            }

            return state;
        });
    }

    private onLastWeekClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        const lastWeek = moment().subtract(1, "week");
        this.setState(state => {
            state.Range = moment.range(lastWeek.clone().startOf("week"), lastWeek.clone().endOf("week"));
            if (this.dayPickerComponent != null) {
                this.dayPickerComponent.showMonth(state.Range.start.toDate());
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range);
            }

            return state;
        });
    }

    private onThisMonthClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        this.setState(state => {
            state.Range = moment.range(moment().startOf("month"), moment().endOf("month"));
            if (this.dayPickerComponent != null) {
                this.dayPickerComponent.showMonth(state.Range.start.toDate());
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range);
            }

            return state;
        });
    }

    private onLastMonthClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        const lastWeek = moment().subtract(1, "month");
        this.setState(state => {
            state.Range = moment.range(lastWeek.clone().startOf("month"), lastWeek.clone().endOf("month"));
            if (this.dayPickerComponent != null) {
                this.dayPickerComponent.showMonth(state.Range.start.toDate());
            }

            if (this.props.onChange != null) {
                this.props.onChange(state.Range);
            }

            return state;
        });
    }

    private onCustomClick: React.MouseEventHandler<HTMLLIElement> = (event): void => {
        this.setState(state => {
            state.DropdownOpen = !state.DropdownOpen;
            return state;
        });
    }

    private onToggle = (isOpened: boolean): void => {
        if (this.state.DropdownOpen !== isOpened) {
            this.setState(state => {
                state.DropdownOpen = isOpened;
                return state;
            });
        }
    }

    private getSelectedDays(): DayPicker.RangeModifier {
        const { start, end } = this.state.Range;
        return {
            from: start.toDate(),
            to: end.toDate()
        };
    }

    public render(): JSX.Element {
        return <DropdownHandler
            toggleOnHeaderClick={false}
            onToggle={this.onToggle}
            open={this.state.DropdownOpen}
            className="date-range-picker-view"
        >
            <DropdownHeader className="header">
                <ul>
                    <li onClick={this.onThisWeekClick}>This week</li>
                    <li onClick={this.onLast7DaysClick}>Last 7 days</li>
                    <li onClick={this.onLastWeekClick}>Last week</li>
                    <li onClick={this.onThisMonthClick}>This month</li>
                    <li onClick={this.onLastMonthClick}>Last month</li>
                    <li
                        className={classnames({ "active": this.state.DropdownOpen })}
                        onClick={this.onCustomClick}
                    >
                        Custom
                    </li>
                </ul>
            </DropdownHeader>
            <DropdownSection className="section">
                <DayPicker
                    ref={component => { this.dayPickerComponent = component; }}
                    numberOfMonths={2}
                    initialMonth={this.state.Range.start.toDate()}
                    selectedDays={this.getSelectedDays()}
                    onDayClick={this.onHandleDayClick}
                />
            </DropdownSection>
        </DropdownHandler>;
    }
}
