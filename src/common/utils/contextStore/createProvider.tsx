import React, { Component, Context } from "react";

import { ActionsType } from "./ActionsType";
import { bindActions } from "./bindActions";
import { StoreValue } from "./StoreValue";

/**
 * Provides the state and actions to children components.
 *
 * @param initialState Initial store state.
 * @param actions Actions which can be applied to the store.
 * @param context The React Context to wrap.
 */
export const createProvider = <State, Actions extends ActionsType<State>>(
  initialState: State,
  actions: Actions,
  context: Context<StoreValue<State, Actions>>,
) => {
  class Provider extends Component<{}, StoreValue<State, Actions>> {
    constructor(props: {}) {
      super(props);

      this.state = {
        ...(initialState as any),
        ...bindActions(this, actions as any),
        setState: this._setState,
      };
    }

    private _setState = (update: Partial<State>) => {
      this.setState(update as Pick<StoreValue<State, Actions>, keyof State>);
    };

    render() {
      const { children } = this.props;

      return <context.Provider value={this.state}>{children}</context.Provider>;
    }
  }

  return Provider;
};
