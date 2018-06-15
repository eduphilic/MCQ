import { ExamQuestionNavigationState } from "common/types/ExamQuestionNavigationState";

const makeQuestions = (
  length: number,
  status: ExamQuestionNavigationState["questions"][0]["status"],
) => Array.from({ length }, () => ({ status }));

export const examQuestionNavigationState: ExamQuestionNavigationState = {
  currentQuestion: 2,

  questions: [
    ...makeQuestions(5, "answered"),
    ...makeQuestions(10, "not-visited"),
  ],

  categories: [
    { title: "General Knowledge", questionCount: 10 },
    { title: "Maths", questionCount: 5 },
  ],
};
