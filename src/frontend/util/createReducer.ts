import { StoreAction } from "../store/old/StoreAction";

type SupportedAction = StoreAction;

export function createReducer<State>(
  initialState: State,
  handlers: {
    [ActionType in SupportedAction["type"]]?: (
      state: State,
      action: Extract<SupportedAction, { type: ActionType }>,
    ) => State
  },
) {
  return function reducer(state = initialState, action: SupportedAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type]!(state, action as any);
    }
    return state;
  };
}
