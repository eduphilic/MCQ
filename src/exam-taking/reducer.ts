import { ActionHandler } from "types";
import { createReducer } from "utils";
import { Actions, ExamTakingAction } from "./actions";
import { IExamMeta } from "./models/IExamMeta";
import { IExamQuestion } from "./models/IExamQuestion";

import { createExamMetaPlaceholder } from "./placeholders/createExamMetaPlaceholder";
import { createExamQuestionPlaceholder } from "./placeholders/createExamQuestionPlaceholder";

export interface State {
  examMeta: IExamMeta | null;
  questions: IExamQuestion[] | null;

  showOverviewScreen: boolean;
  showSubmissionSummaryScreen: boolean;
  currentQuestion: number;
}

const initialState: State = {
  examMeta: null,
  questions: null,

  showOverviewScreen: true,
  showSubmissionSummaryScreen: false,
  currentQuestion: 0,
};

const loadPlaceholderExam: ActionHandler<State> = state => ({
  ...state,
  examMeta: createExamMetaPlaceholder(),
  questions: createExamQuestionPlaceholder(),
});

/** Updates the visited status of the specified question. */
const touchQuestion = (questions: State["questions"], questionIndex: number) =>
  questions &&
  questions.map(
    (q, index): IExamQuestion => {
      if (index !== questionIndex) return q;
      if (q.status !== "not-visited") return q;
      return { ...q, status: "not-answered" };
    },
  );

const navigateToQuestion: ActionHandler<State, number> = (state, action) => {
  const { questions } = state;
  const currentQuestion = action.payload!;

  return {
    ...state,
    showOverviewScreen: false,
    showSubmissionSummaryScreen: false,
    currentQuestion,
    questions: touchQuestion(questions, currentQuestion),
  };
};

const navigateToPreviousQuestion: ActionHandler<State> = (state, action) => {
  if (state.currentQuestion === 0) return state;
  return navigateToQuestion(state, {
    type: action.type,
    payload: state.currentQuestion - 1,
  });
};

const navigateToNextQuestion: ActionHandler<State> = (state, action) => {
  if (
    state.questions === null ||
    state.currentQuestion - 1 === state.questions.length
  ) {
    return state;
  }
  return navigateToQuestion(state, {
    type: action.type,
    payload: state.currentQuestion + 1,
  });
};

const dismissOverviewScreen: ActionHandler<State> = (state, action) =>
  navigateToQuestion(state, { type: action.type, payload: 0 });

const displaySubmissionSummaryScreen: ActionHandler<State> = state => ({
  ...state,
  showSubmissionSummaryScreen: true,
});

export const reducer = createReducer<State, Actions, ExamTakingAction>(
  initialState,
  {
    [ExamTakingAction.LoadPlaceholderExam]: loadPlaceholderExam,

    [ExamTakingAction.NavigateToQuestion]: navigateToQuestion,
    [ExamTakingAction.NavigateToPreviousQuestion]: navigateToPreviousQuestion,
    [ExamTakingAction.NavigateToNextQuestion]: navigateToNextQuestion,

    [ExamTakingAction.DismissOverviewScreen]: dismissOverviewScreen,
    [ExamTakingAction.DisplaySubmissionSummaryScreen]: displaySubmissionSummaryScreen,
  },
);
