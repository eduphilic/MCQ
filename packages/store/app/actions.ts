import { Action, ActionCreator } from "redux";

export type AppActions = LoginSuccessAction;

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
interface LoginSuccessAction extends Action<typeof LOGIN_SUCCESS> {
  authenticationToken: string;
}
// TODO: Remove export if not required.
export const loginSuccess: ActionCreator<LoginSuccessAction> = (
  authenticationToken: string,
) => ({
  type: LOGIN_SUCCESS,
  authenticationToken,
});
