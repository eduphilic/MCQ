import { createReducer } from "utils";
import { Actions, DashboardAction } from "./actions";
import { IEntry } from "./models/IEntry";
import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

export type State = {
  entries: IEntry[] | null;
};

const initialState: State = {
  entries: null,
};

export const reducer = createReducer<State, Actions, DashboardAction>(
  initialState,
  {
    [DashboardAction.LoadPlaceholderEntries]: state => ({
      ...state,
      entries: createEntryPlaceholders(),
    }),
  },
);
