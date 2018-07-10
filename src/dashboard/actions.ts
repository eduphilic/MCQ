import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum DashboardAction {
  LoadPlaceholderEntries = "[dashboard] Load Placeholder Entires",
  LoadPlaceholderSubscribedEntries = "[dashboard] Load Placeholder Subscribed Entries",
}

export const actions = {
  loadPlaceholderEntries: () =>
    createAction(DashboardAction.LoadPlaceholderEntries),
  loadPlaceholderSubscribedEntries: () =>
    createAction(DashboardAction.LoadPlaceholderSubscribedEntries),
};

export type Actions = ActionsUnion<typeof actions>;
