import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum SubscriptionManagementAction {
  LoadPlaceholderData = "[subscription-management] Load Placeholder Data",
}

export const actions = {
  loadPlaceholderData: () =>
    createAction(SubscriptionManagementAction.LoadPlaceholderData),
};

export type Actions = ActionsUnion<typeof actions>;
