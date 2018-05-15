import { Reducer } from "redux";
import * as actions from "./actions";
import { AppState, initialAppState } from "./state";

export const appReducer: Reducer<AppState, actions.AppActions> = (
  state = initialAppState,
  action,
): AppState => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        authenticationToken: action.authenticationToken,
        authenticationError: null,
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        authenticationToken: null,
        authenticationError: action.authenticationError,
      };

    case actions.LOGIN_STATUS:
      return { ...state, authenticating: action.authenticating };

    case actions.LOGIN_FAILURE_CLEAR:
      return { ...state, authenticationError: null };

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

    case actions.LOGIN_SESSION_LOAD_SUCCESS:
      return { ...state, authenticationToken: action.authenticationToken };

    default:
      return state;
  }
};
