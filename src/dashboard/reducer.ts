import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";

import { IEntry } from "models";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

import { createEntryPlaceholders } from "subscription-management";

export type State = {
  entries: IEntry[] | null;

  entrySelectMeta: IEntrySelectMeta | null;

  entriesPendingPurchase: IEntry[];

  subscribedEntries: IEntry[] | null;

  postSignupDialogsShown: boolean;
};

const initialState: State = {
  entries: null,

  entrySelectMeta: null,

  entriesPendingPurchase: [],

  subscribedEntries: null,

  postSignupDialogsShown: false,
};

export const reducer = createReducer<State, Actions, DashboardAction>(
  initialState,
  {
    [DashboardAction.LoadPlaceholderEntries]: state => ({
      ...state,
      entries: createEntryPlaceholders(),
      entrySelectMeta: {
        minEntriesCount: 1,
        maxEntriesCount: createEntryPlaceholders().length,
      },
    }),

    [DashboardAction.LoadPlaceholderSubscribedEntries]: state => ({
      ...state,
      subscribedEntries: [],
    }),

    [DashboardAction.SetEntriesPendingPurchase]: (state, action) => ({
      ...state,
      entriesPendingPurchase: action.payload,
    }),

    [DashboardAction.SetPostDialogsShown]: (state, action) => ({
      ...state,
      postSignupDialogsShown: action.payload,
    }),
  },
);
