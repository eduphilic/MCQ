import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum DashboardAction {
  DismissPostSignupDialogs = "[dashboard] DismissPostSignupDialogs",
}

export const actions = {
  dismissPostSignupDialogs: () =>
    createAction(DashboardAction.DismissPostSignupDialogs),
};

export type Actions = ActionsUnion<typeof actions>;
