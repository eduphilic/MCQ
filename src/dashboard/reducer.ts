import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";

import { ICategorySubscriptions } from "./models/ICategorySubscriptions";
import { IEntry } from "./models/IEntry";
import { IEntryCategory } from "./models/IEntryCategory";
import { IEntrySelectMeta } from "./models/IEntrySelectMeta";
import { IExamQuantitySelectMeta } from "./models/IExamQuantitySelectMeta";

import { createEntryCategoryPlaceholders } from "./placeholders/createEntryCategoryPlaceholders";
import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";
import { createExamQuantitySelectMetaPlaceholder } from "./placeholders/createExamQuantitySelectMetaPlaceholder";

export type State = {
  entries: IEntry[] | null;
  entryCategories: IEntryCategory[] | null;

  entrySelectMeta: IEntrySelectMeta | null;
  examQuantitySelectMeta: IExamQuantitySelectMeta | null;

  entriesPendingPurchase: IEntry[];

  subscribedEntries: IEntry[] | null;
  subscribedEntriesSubscriptions: ICategorySubscriptions | null;

  postSignupDialogsShown: boolean;
};

const initialState: State = {
  entries: null,
  entryCategories: null,

  entrySelectMeta: null,
  examQuantitySelectMeta: null,

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
    [DashboardAction.LoadPlaceholderEntryCategories]: state => ({
      ...state,
      entryCategories: createEntryCategoryPlaceholders(),
    }),

    [DashboardAction.LoadPlaceholderSubscribedEntries]: state => ({
      ...state,
      subscribedEntries: [],
    }),
    [DashboardAction.LoadPlaceholderExamQuantitySelectMeta]: state => ({
      ...state,
      examQuantitySelectMeta: createExamQuantitySelectMetaPlaceholder(),
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
  },
);
