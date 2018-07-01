import { createSelector } from "reselect";
import { State } from "./reducer";

const currentQuestionSelector = (state: State) => state.currentQuestion;
const questionsSelector = (state: State) => state.questions;

export const buttonStateSelector = createSelector(
  currentQuestionSelector,
  questionsSelector,
  (currentQuestion, questions) => ({
    buttonPreviousEnabled: questions !== null && currentQuestion > 0,
    submitButtonVisible:
      questions !== null && currentQuestion === questions.length - 1,
  }),
);
