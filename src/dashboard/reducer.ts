import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";
import { IEntry } from "./models/IEntry";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";

import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

export type State = {
  entries: IEntry[] | null;
  entrySelectMeta: IEntrySelectMeta | null;

  entriesPendingPurchase: IEntry[];

  subscribedEntries: IEntry[] | null;
};

const initialState: State = {
  entries: null,
  entrySelectMeta: null,

  entriesPendingPurchase: [],

  subscribedEntries: null,
};

export const reducer = createReducer<State, Actions, DashboardAction>(
  initialState,
  {
    [DashboardAction.LoadPlaceholderEntries]: state => ({
      ...state,
      entries: createEntryPlaceholders(),
      entrySelectMeta: { minEntriesCount: 1, maxEntriesCount: 3 },
    }),
    [DashboardAction.LoadPlaceholderSubscribedEntries]: state => ({
      ...state,
      subscribedEntries: [],
    }),

    [DashboardAction.SetEntriesPendingPurchase]: (state, action) => ({
      ...state,
      entriesPendingPurchase: action.payload,
    }),
  },
);
