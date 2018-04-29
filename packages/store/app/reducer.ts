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

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        authenticationToken: null,
        authenticationError: action.authenticationError,
      };

    case actions.RETRIEVE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        authenticationError: null,
      };

    case actions.RETRIEVE_USER_FAILURE:
      return {
        ...state,
        user: null,
        authenticationToken: null,
      };

    default:
      return state;
  }
};
