import { AsyncWorker, queue } from "async";
import { Component } from "react";

import { ActionsType } from "./ActionsType";

interface StateUpdate {
  component: Component<any, any>;
  actionCreator: (...args: any[]) => (state: any) => any;
  actionCreatorArguments: any;
  actionCreatorName: string;
}

const processStateUpdate: AsyncWorker<StateUpdate, {}> = (task, callback) => {
  const actionFunc = task.actionCreator(...task.actionCreatorArguments);
  const update = actionFunc(task.component.state);

  // Only attempt a state update if the component is still mounted.
  if ((task.component as any)._isMounted) {
    task.component.setState(update, callback);
  } else callback();
};

// Use a queue for state updates to avoid race conditions.
const q = queue(processStateUpdate);

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
  const bindedActions = Object.keys(actions).reduce(
    (acc, key) => {
      acc[key] = (...args: any[]) => {
        q.push({
          component: this,
          actionCreator: actions[key],
          actionCreatorArguments: args,
          actionCreatorName: key,
        });
      };

      return acc;
    },
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as { [key: string]: () => any },
  );

  return bindedActions;
}
