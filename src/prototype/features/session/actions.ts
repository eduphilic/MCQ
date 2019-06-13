import { ActionsUnion } from "../../types";
import { createAction } from "../../utils";
import { IUser } from "./models/IUser";

export enum SessionAction {
  LoginSuccess = "[Session] Login Success",
  LoginFailure = "[Session] Login Failure",
  SignupSuccess = "[Session] Signup Success",
  SignupFailure = "[Session] Signup Failure",
  SetSubmittingStatus = "[Session] Set Submitting Status",
}

export const actions = {
  loginSuccess: (user: IUser) => createAction(SessionAction.LoginSuccess, user),

  loginFailure: () => createAction(SessionAction.LoginFailure),

  signupSuccess: (user: IUser) =>
    createAction(SessionAction.SignupSuccess, user),

  signupFailure: () => createAction(SessionAction.SignupFailure),

  setSubmittingStatus: (isSubmitting: boolean) =>
    createAction(SessionAction.SetSubmittingStatus, isSubmitting),
};

export type Actions = ActionsUnion<typeof actions>;
