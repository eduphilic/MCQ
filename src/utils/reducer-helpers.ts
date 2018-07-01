import { Action, ActionWithPayload } from "./action-helpers";

export const createReducer = <
  State,
  Actions extends Action<ActionTypes> | ActionWithPayload<ActionTypes, any>,
  ActionTypes extends string
>(
  initialState: State,
  handlers: Record<ActionTypes, (state: State, action: Actions) => State>,
) => (state: State = initialState, action: Actions): State => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }

  return state;
};
