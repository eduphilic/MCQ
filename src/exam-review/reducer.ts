import { IEntry } from "models";
import { createReducer } from "utils";
import { Actions, ExamReviewAction } from "./actions";
import { ICategorySubscription } from "./models/ICategorySubscription";

import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

type State = {
  loading: boolean;
  loaded: boolean;

  entries: IEntry[] | null;
  subscriptions: ICategorySubscription[] | null;
};

const initialState: State = {
  loading: true,
  loaded: false,

  entries: null,
  subscriptions: null,
};

export const reducer = createReducer<State, Actions, ExamReviewAction>(
  initialState,
  {
    [ExamReviewAction.LoadPlaceholderData]: state => ({
      ...state,
      loading: false,
      loaded: true,
      entries: createEntryPlaceholders(),
    }),
  },
);
