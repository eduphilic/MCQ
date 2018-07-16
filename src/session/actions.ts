import { ActionsUnion } from "types";
import { createAction } from "utils";
import { IUser } from "./models/IUser";

export enum SessionAction {
  LoginSuccess = "[Session] Login Success",
  LoginFailure = "[Session] Login Failure",
  SignupSuccess = "[Session] Signup Success",
  SignupFailure = "[Session] Signup Failure",
}

export const actions = {
  loginSuccess: (user: IUser) => createAction(SessionAction.LoginSuccess, user),

  loginFailure: () => createAction(SessionAction.LoginFailure),

  signupSuccess: (user: IUser) =>
    createAction(SessionAction.SignupSuccess, user),

  SignupFailure: () => createAction(SessionAction.SignupFailure),
};

export type Actions = ActionsUnion<typeof actions>;
