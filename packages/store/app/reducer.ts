import { Reducer } from "redux";
import * as actions from "./actions";
import { AppState, initialAppState } from "./state";

export const appReducer: Reducer<AppState, actions.AppActions> = (
  state = initialAppState,
  action,
) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, authenticationToken: action.authenticationToken };
    default:
      return state;
  }
};
