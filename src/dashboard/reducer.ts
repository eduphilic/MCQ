import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";

import { IEntry } from "models";
import { ICategorySubscriptions } from "./models/ICategorySubscriptions";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

import { createEntryPlaceholders } from "subscription-management";

export type State = {
  entries: IEntry[] | null;

  entrySelectMeta: IEntrySelectMeta | null;

  entriesPendingPurchase: IEntry[];

  subscribedEntries: IEntry[] | null;
  subscribedEntriesSubscriptions: ICategorySubscriptions | null;

  postSignupDialogsShown: boolean;
};

const initialState: State = {
  entries: null,

  entrySelectMeta: null,

  entriesPendingPurchase: [],

  subscribedEntries: null,
  subscribedEntriesSubscriptions: null,

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

    [DashboardAction.SetSubscribedEntries]: (state, action) => ({
      ...state,
      subscribedEntries: action.payload.entries,
      subscribedEntriesSubscriptions: action.payload.subscriptions,
    }),

    [DashboardAction.SetPostDialogsShown]: (state, action) => ({
      ...state,
      postSignupDialogsShown: action.payload,
    }),
  },
);
