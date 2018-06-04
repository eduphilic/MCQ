import { Component } from "react";

import { ActionsType } from "./ActionsType";

/**
 * Wraps action creators. Invokes action creators when an action function is
 * called, passes along the component's state, then calls setState with the
 * returned update.
 *
 * @param this React Component whose state will be updated by the action.
 * @param actions Action creators to be binded to the setState of the calling component.
 */
export function bindActions<State, Actions extends ActionsType<State>>(
  this: Component<{}, State>,
  actions: Actions,
) {
  const bindedActions = Object.keys(actions).reduce((acc, key) => {
    (acc as { [key: string]: () => any })[key] = (...args: any[]) => {
      const actionFunc = actions[key](...args);
      const update = actionFunc(this.state);
      this.setState(update as Pick<State, keyof State>);
    };
    return acc;
  }, {});

  return bindedActions;
}
