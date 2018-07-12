import { ActionsUnion } from "types";
import { createAction } from "utils";
import { IEntry } from "./models/IEntry";

export enum DashboardAction {
  LoadPlaceholderEntries = "[dashboard] Load Placeholder Entires",
  LoadPlaceholderEntryCategories = "[dashboard] Load Placeholder Entry Categories",

  LoadPlaceholderSubscribedEntries = "[dashboard] Load Placeholder Subscribed Entries",
  LoadPlaceholderExamQuantitySelectMeta = "[dashboard] Load Placeholder Exam Quantity Select Meta",

  SetEntriesPendingPurchase = "[dashboard] Set Entries Pending Purchase",
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
};

export type Actions = ActionsUnion<typeof actions>;
