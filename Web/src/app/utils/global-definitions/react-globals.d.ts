declare function componentWillMount(): void;
declare function componentDidMount(): void;
declare function componentWillReceiveProps<TProps, TContext>(nextProps: TProps, nextContext: TContext): void;
declare function shouldComponentUpdate<TProps, TState, TContext>(nextProps: TProps, nextState: TState, nextContext: TContext): boolean;
declare function componentWillUpdate<TProps, TState, TContext>(nextProps: TProps, nextState: TState, nextContext: TContext): void;
declare function componentDidUpdate<TProps, TState, TContext>(prevProps: TProps, prevState: TState, prevContext: TContext): void;
declare function componentWillUnmount(): void;
declare function getDefaultProps<TProps>(): TProps;
declare function getInitialState<TState>(): TState;
