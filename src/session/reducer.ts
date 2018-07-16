import { createReducer } from "utils";
import { Actions, SessionAction } from "./actions";
import { IUser } from "./models/IUser";

type State = {
  user: IUser | null;
  error: string | null;
};

const initialState: State = {
  user: null,
  error: null,
};

export const reducer = createReducer<State, Actions, SessionAction>(
  initialState,
  {
    [SessionAction.LoginSuccess]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [SessionAction.LoginFailure]: state => ({
      ...state,
      error: "Incorrect user or password.",
    }),
    [SessionAction.SignupSuccess]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [SessionAction.SignupFailure]: state => ({
      ...state,
      error: "The phone number used is unavailable.",
    }),
  },
);
