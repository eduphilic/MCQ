import { ActionsUnion } from "types";
import { createAction } from "utils";

import { ICategorySubscriptions } from "./models/ICategorySubscriptions";

export enum SubscriptionManagementAction {
  LoadPlaceholderData = "[subscription-management] Load Placeholder Data",

  SubscriptionAdditionSuccess = "[subscription-management] Subscription Addition Success",
}

export const actions = {
  loadPlaceholderData: () =>
    createAction(SubscriptionManagementAction.LoadPlaceholderData),

  subscriptionAdditionSuccess: (subscriptions: ICategorySubscriptions) =>
    createAction(
      SubscriptionManagementAction.SubscriptionAdditionSuccess,
      subscriptions,
    ),
};

export type Actions = ActionsUnion<typeof actions>;
