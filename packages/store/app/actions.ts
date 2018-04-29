import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { api } from "../api";
import { User } from "../models";
import { AppState } from "./state";

export type AppActions =
  | LoginSuccess
  | LoginFailure
  | RetrieveUserSuccess
  | RetrieveUserFailure;
type ThunkResult<R> = ThunkAction<Promise<R>, AppState, {}, AppActions>;

// #region Authentication
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
interface LoginSuccess extends Action<typeof LOGIN_SUCCESS> {
  authenticationToken: string;
}
const loginSuccess = (authenticationToken: string): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  authenticationToken,
});

export const LOGIN_FAILURE = "LOGIN_FAILURE";
interface LoginFailure extends Action<typeof LOGIN_FAILURE> {
  authenticationError: string;
}
const loginFailure = (authenticationError: string): LoginFailure => ({
  type: LOGIN_FAILURE,
  authenticationError,
});

export const login = (
  username: string,
  password: string,
): ThunkResult<void> => async dispatch => {
  try {
    const { authenticationToken } = await api.post("/session", {
      username,
      password,
    });

    await dispatch(loginSuccess(authenticationToken));
    await dispatch(retrieveUser());
  } catch (e) {
    await dispatch(loginFailure(e.message));
  }
};
// #endregion Authentication

// #region User Account Retrieval
export const RETRIEVE_USER_SUCCESS = "RETRIEVE_USER_SUCCESS";
interface RetrieveUserSuccess extends Action<typeof RETRIEVE_USER_SUCCESS> {
  user: User;
}
const retrieveUserSuccess = (user: User): RetrieveUserSuccess => ({
  type: RETRIEVE_USER_SUCCESS,
  user,
});

export const RETRIEVE_USER_FAILURE = "RETRIEVE_USER_FAILURE";
interface RetrieveUserFailure extends Action<typeof RETRIEVE_USER_FAILURE> {
  error: string;
}
const RetrieveUserFailure = (error: string): RetrieveUserFailure => ({
  type: RETRIEVE_USER_FAILURE,
  error,
});

export const retrieveUser = (): ThunkResult<User | null> => async (
  dispatch,
  getState,
) => {
  try {
    const { authenticationToken } = getState();
    if (!authenticationToken) {
      throw new Error("RetrieveUser: No authentication present.");
    }

    const user = (await api.get("/me", authenticationToken)) as User;
    await dispatch(retrieveUserSuccess(user));
    return user;
  } catch (e) {
    await dispatch(RetrieveUserFailure(e.message));
    return null;
  }
};
// #endregion User Account Retrieval
