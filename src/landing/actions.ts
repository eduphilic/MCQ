import { IEntry, IEntryCategory } from "models";
import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum LandingAction {
  FetchIndexCardEntriesSuccess = "[landing] Fetch Index Card Entries Success",
}

export const actions = {
  fetchIndexCardEntriesSuccess: (
    indexCardEntries: IEntry[],
    indexCardEntryCategories: IEntryCategory[],
  ) =>
    createAction(LandingAction.FetchIndexCardEntriesSuccess, {
      indexCardEntries,
      indexCardEntryCategories,
    }),
};

export type Actions = ActionsUnion<typeof actions>;
