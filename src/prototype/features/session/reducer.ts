import { createReducer } from "../../utils";
import { Actions, SessionAction } from "./actions";
import { IUser } from "./models/IUser";

type State = {
  /* Currently signed in user. */
  user: IUser | null;
  /* Authentication or signup error */
  error: string | null;
  /*
   * Whether a sign-in/signup form is currently being submitted, used to provide
   * a disable state to forms.
   */
  isSubmitting: boolean;
};

const initialState: State = {
  user: null,
  error: null,
  isSubmitting: false,
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
    [SessionAction.SetSubmittingStatus]: (
      state,
      { payload: isSubmitting },
    ) => ({
      ...state,
      isSubmitting,
    }),
  },
);
