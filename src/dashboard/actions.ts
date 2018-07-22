import { IEntry } from "models";
import { ActionsUnion } from "types";
import { createAction } from "utils";
import { ICategorySubscriptions } from "./models/ICategorySubscriptions";

export enum DashboardAction {
  LoadPlaceholderEntries = "[dashboard] Load Placeholder Entires",

  LoadPlaceholderSubscribedEntries = "[dashboard] Load Placeholder Subscribed Entries",

  SetEntriesPendingPurchase = "[dashboard] Set Entries Pending Purchase",

  SetSubscribedEntries = "[dashboard] Set Subscribed Entries",

  SetPostDialogsShown = "[dashboard] Set Post Signup Dialogs Shown",
}

export const actions = {
  loadPlaceholderEntries: () =>
    createAction(DashboardAction.LoadPlaceholderEntries),

  loadPlaceholderSubscribedEntries: () =>
    createAction(DashboardAction.LoadPlaceholderSubscribedEntries),

  setEntriesPendingPurchase: (entries: IEntry[]) =>
    createAction(DashboardAction.SetEntriesPendingPurchase, entries),

  setSubscribedEntries: (
    entries: IEntry[],
    subscriptions: ICategorySubscriptions,
  ) =>
    createAction(DashboardAction.SetSubscribedEntries, {
      entries,
      subscriptions,
    }),

  setPostDialogsShown: (shown: boolean) =>
    createAction(DashboardAction.SetPostDialogsShown, shown),
};

export type Actions = ActionsUnion<typeof actions>;
