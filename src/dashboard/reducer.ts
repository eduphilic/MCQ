import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";
import { IEntry } from "./models/IEntry";
import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

export type State = {
  entries: IEntry[] | null;

  subscribedEntries: IEntry[] | null;
};

const initialState: State = {
  entries: null,

  subscribedEntries: null,
};

export const reducer = createReducer<State, Actions, DashboardAction>(
  initialState,
  {
    [DashboardAction.LoadPlaceholderEntries]: state => ({
      ...state,
      entries: createEntryPlaceholders(),
    }),
    [DashboardAction.LoadPlaceholderSubscribedEntries]: state => ({
      ...state,
      subscribedEntries: [],
    }),
  },
);
