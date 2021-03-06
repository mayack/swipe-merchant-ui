declare module "moment-range" {
    import { Moment, unitOfTime } from "moment";

    export class DateRange {
        start: Moment;
        end: Moment;

        constructor(range: string | Date[] | Moment[]);
        constructor(start: Date | Moment, end: Date | Moment);

        contains(other: DateRange | Moment | Date, options?: { exclusive?: boolean }): boolean;

        overlaps(range: DateRange, options?: { adjacent?: boolean }): boolean;

        intersect(other: DateRange): DateRange;

        add(other: DateRange): DateRange;

        subtract(other: DateRange): DateRange[];

        by(interval: unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        byRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        isSame(other: DateRange): boolean;

        diff(unit?: unitOfTime.Diff, rounded?: boolean): number;

        toDate(): Date[];

        toString(): string;

        valueOf(): number;

        center(): Moment;

        clone(): DateRange;

        isEqual(other: DateRange): boolean;

        adjacent(other: DateRange): boolean;

        duration(unit?: unitOfTime.Diff, precise?: boolean): number;

        reverseBy(interval: unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        reverseByRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;
    }

    export interface MomentRangeExtends {
        range(range: string | Date[] | Moment[]): DateRange;
        range(start: Date | Moment, end: Date | Moment): DateRange;
    }

    export function extendMoment<T>(moment: T): T & MomentRangeExtends;
}
