import {
  Actions as ExamTakingActions,
  createExamQuestionCategoryPlaceholder,
  createExamQuestionPlaceholder,
  reducer as examTakingReducer,
  State as ExamTakingState,
} from "features/exam-taking";

type State = ExamTakingState;

type Actions = ExamTakingActions;

const initialState: State = {
  // #region Inherited from exam-taking module.
  questions: createExamQuestionPlaceholder(),
  questionCategories: createExamQuestionCategoryPlaceholder(),

  showOverviewScreen: false,
  showSubmissionSummaryScreen: false,
  currentQuestion: 0,
  // #endregion
};

export const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    default:
      return examTakingReducer(state, action);
  }
};
