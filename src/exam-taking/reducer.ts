import { Actions, ExamTakingAction } from "./actions";
import { IExamMeta } from "./models/IExamMeta";

import { createExamMetaPlaceholder } from "./placeholders/createExamMetaPlaceholder";

interface State {
  examMeta: IExamMeta | null;
}

const initialState: State = {
  examMeta: null,
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case ExamTakingAction.LoadPlaceholderExam: {
      return { ...state, examMeta: createExamMetaPlaceholder() };
    }

    default: {
      return state;
    }
  }
};
