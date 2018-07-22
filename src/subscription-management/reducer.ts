import { IEntry, IEntryCategory } from "models";
import { createReducer } from "utils";
import { Actions, SubscriptionManagementAction } from "./actions";
import { IExamQuantitySelectionSettings } from "./models/IExamQuantitySelectionSettings";

import { createEntryCategoryPlaceholders } from "./placeholders/createEntryCategoryPlaceholders";
import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";
import { createExamQuantitySelectionSettingsPlaceholder } from "./placeholders/createExamQuantitySelectionSettingsPlaceholder";

type State = {
  loading: boolean;
  loaded: boolean;

  entries: IEntry[];
  categories: IEntryCategory[];
  examQuantitySelectionSettings: IExamQuantitySelectionSettings | null;
};

const initialState: State = {
  loading: true,
  loaded: false,

  entries: [],
  categories: [],
  examQuantitySelectionSettings: null,
};

export const reducer = createReducer<
  State,
  Actions,
  SubscriptionManagementAction
>(initialState, {
  [SubscriptionManagementAction.LoadPlaceholderData]: state => ({
    ...state,
    loading: false,
    loaded: true,

    entries: createEntryPlaceholders(),
    categories: createEntryCategoryPlaceholders(),
    examQuantitySelectionSettings: createExamQuantitySelectionSettingsPlaceholder(),
  }),
});
