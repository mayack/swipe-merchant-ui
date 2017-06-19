import * as PropTypes from "prop-types";

export type ContextTypes<TContext> = {
    [K in keyof TContext]: PropTypes.Validator<{}>;
};
