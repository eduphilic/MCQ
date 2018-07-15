import { ActionsUnion } from "types";
import { createAction } from "utils";
import { ICategorySubscriptions } from "./models/ICategorySubscriptions";
import { IEntry } from "./models/IEntry";

export enum DashboardAction {
  LoadPlaceholderEntries = "[dashboard] Load Placeholder Entires",
  LoadPlaceholderEntryCategories = "[dashboard] Load Placeholder Entry Categories",

  LoadPlaceholderSubscribedEntries = "[dashboard] Load Placeholder Subscribed Entries",
  LoadPlaceholderExamQuantitySelectMeta = "[dashboard] Load Placeholder Exam Quantity Select Meta",

  SetEntriesPendingPurchase = "[dashboard] Set Entries Pending Purchase",

  SetSubscribedEntries = "[dashboard] Set Subscribed Entries",

  SetPostDialogsShown = "[dashboard] Set Post Signup Dialogs Shown",
}

export const actions = {
  loadPlaceholderEntries: () =>
    createAction(DashboardAction.LoadPlaceholderEntries),
  loadPlaceholderEntryCategories: () =>
    createAction(DashboardAction.LoadPlaceholderEntryCategories),

  loadPlaceholderSubscribedEntries: () =>
    createAction(DashboardAction.LoadPlaceholderSubscribedEntries),
  loadPlaceholderExamQuantitySelectMeta: () =>
    createAction(DashboardAction.LoadPlaceholderExamQuantitySelectMeta),

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
