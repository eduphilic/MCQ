import React, { Component, Context } from "react";

import { bindActions } from "./bindActions";

/**
 * Provides the state and actions to children components.
 *
 * @param initialState Initial store state.
 * @param actions Actions which can be applied to the store.
 * @param context The React Context to wrap.
 */
export const createProvider = <State, Actions>(
  initialState: State,
  actions: Actions,
  context: Context<State & Actions>,
) => {
  class Provider extends Component<{}, State> {
    state: State = initialState;

    private bindedActions = bindActions.call(this, actions);

    /**
     * Provide a hook to check if the component is still mounted.
     *
     * Used in bindActions.ts.
     */
    _isMounted = false;

    private privateSetState = (update: Partial<State>) => {
      this.setState(update as Pick<State, keyof State>);
    };

    componentDidMount() {
      this._isMounted = true;
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const { children } = this.props;

      return (
        <context.Provider
          value={{
            ...(this.state as any),
            ...this.bindedActions,
            privateSetState: this.privateSetState,
          }}
        >
          {children}
        </context.Provider>
      );
    }
  }

  return Provider;
};