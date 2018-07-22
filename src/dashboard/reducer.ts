import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";

export type State = {
  postSignupDialogsShown: boolean;
};

const initialState: State = {
  postSignupDialogsShown: false,
};

export const reducer = createReducer<State, Actions, DashboardAction>(
  initialState,
  {
    [DashboardAction.DismissPostSignupDialogs]: state => ({
      ...state,
      postSignupDialogsShown: true,
    }),
  },
);
