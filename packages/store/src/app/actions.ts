import lscache from "lscache";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { api } from "../api";
import { User } from "../models";
import { AppState } from "./state";

export type AppActions =
  | LoginSuccess
  | LoginFailure
  | LoginStatus
  | LoginFailureClear
  | RetrieveUserSuccess
  | RetrieveUserFailure
  | LoginSessionLoadSuccess;
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

export const LOGIN_STATUS = "LOGIN_STATUS";
interface LoginStatus extends Action<typeof LOGIN_STATUS> {
  authenticating: boolean;
}
const loginStatus = (authenticating: boolean): LoginStatus => ({
  type: LOGIN_STATUS,
  authenticating,
});

export const LOGIN_FAILURE_CLEAR = "LOGIN_FAILURE_CLEAR";
interface LoginFailureClear extends Action<typeof LOGIN_FAILURE_CLEAR> {}
export const loginFailureClear = (): LoginFailureClear => ({
  type: LOGIN_FAILURE_CLEAR,
});

export const login = (
  username: string,
  password: string,
): ThunkResult<void> => async dispatch => {
  await dispatch(loginStatus(true));

  try {
    const { authenticationToken } = await api.post("/session", {
      username,
      password,
    });

    await dispatch(loginSuccess(authenticationToken));
    await dispatch(retrieveUser(authenticationToken));
    sessionTokenSave(authenticationToken);
  } catch (e) {
    await dispatch(loginFailure(e.message));
  }

  await dispatch(loginStatus(false));
};

export const logout = (): ThunkResult<void> => async () => {
  sessionTokenRemove();

  // Forward to admin login page if user was visiting admin page, otherwise send
  // to landing page.
  const loginPage = /\/admin/.test(window.document.location.href)
    ? "/admin"
    : "/";

  window.document.location.href = loginPage;
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
const retrieveUserFailure = (error: string): RetrieveUserFailure => ({
  type: RETRIEVE_USER_FAILURE,
  error,
});

export const retrieveUser = (
  retrievedAuthenticationToken?: string,
): ThunkResult<User | null> => async (dispatch, getState) => {
  try {
    const authenticationToken =
      retrievedAuthenticationToken || getState().authenticationToken;

    if (!authenticationToken) {
      throw new Error("RetrieveUser: No authentication present.");
    }

    const user = (await api.get("/me", authenticationToken)) as User;
    await dispatch(retrieveUserSuccess(user));
    return user;
  } catch (e) {
    sessionTokenRemove();
    await dispatch(retrieveUserFailure(e.message));
    return null;
  }
};
// #endregion User Account Retrieval

// #region Session Persistence (Local Storage)
const SESSION_TOKEN_KEY = "AUTHENTICATION_TOKEN";
const sessionTokenExpirationMinutes = 30 * 24 * 60 /* 30 days */;
const sessionTokenSave = (authenticationToken: string) => {
  lscache.set(
    SESSION_TOKEN_KEY,
    authenticationToken,

    // Expire if not used after specified number of minutes.
    sessionTokenExpirationMinutes,
  );
};

const sessionTokenRead = (): string | null => {
  const authenticationToken = lscache.get(SESSION_TOKEN_KEY);
  if (!authenticationToken) return null;

  // Reset local storage entry expiration.
  sessionTokenSave(authenticationToken);
  return authenticationToken;
};

const sessionTokenRemove = () => {
  lscache.remove(SESSION_TOKEN_KEY);
};

export const LOGIN_SESSION_LOAD_SUCCESS = "LOGIN_SESSION_LOAD_SUCCESS";
interface LoginSessionLoadSuccess
  extends Action<typeof LOGIN_SESSION_LOAD_SUCCESS> {
  authenticationToken: string;
}

const loginSessionLoadSuccess = (
  authenticationToken: string,
): LoginSessionLoadSuccess => ({
  type: LOGIN_SESSION_LOAD_SUCCESS,
  authenticationToken,
});

export const loginSessionLoad = (): ThunkResult<void> => async dispatch => {
  const authenticationToken = sessionTokenRead();
  if (!authenticationToken) return;

  await dispatch(loginStatus(true));
  await dispatch(loginSessionLoadSuccess(authenticationToken));
  await dispatch(retrieveUser(authenticationToken));
  await dispatch(loginStatus(false));
};
// #endregion
