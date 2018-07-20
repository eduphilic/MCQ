import { IEntry } from "models";
import { createReducer } from "utils";
import { Actions, SubscriptionManagementAction } from "./actions";

import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

type State = {
  loading: boolean;
  loaded: boolean;

  entries: IEntry[];
};

const initialState: State = {
  loading: true,
  loaded: false,

  entries: [],
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
  }),
});
