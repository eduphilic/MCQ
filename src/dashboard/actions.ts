import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum DashboardAction {
  LoadPlaceholderEntries = "[dashboard] Load Placeholder Entires",
}

export const actions = {
  loadPlaceholderEntries: () =>
    createAction(DashboardAction.LoadPlaceholderEntries),
};

export type Actions = ActionsUnion<typeof actions>;
