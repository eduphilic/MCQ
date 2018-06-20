import { createStore } from "common/utils/contextStore";

export interface Question {
  status: "answered" | "not-answered" | "marked-for-review" | "not-visited";
}

export interface QuestionCategory {
  title: string;
  questionCount: number;
}

const initialQuestionState: Question[] = Array.from(
  { length: 15 },
  (): Question => ({ status: "not-visited" }),
);

const questionCategories: QuestionCategory[] = [
  { title: "General Knowledge", questionCount: 10 },
  { title: "Maths", questionCount: 5 },
];

const examNavigationStorePlaceholder = createStore(
  {
    showOverviewPage: true,

    currentQuestion: 0,
    questions: [...initialQuestionState],
    questionCategories: [...questionCategories],

    previousButtonEnabled: false,
    showSubmitExamButton: false,
  },
  {
    startExam: () => () => ({ showOverviewPage: false }),
    navigatePreviousQuestion: () => state => ({
      currentQuestion: state.currentQuestion - 1,
      previousButtonEnabled: state.currentQuestion - 1 > 0,
      showSubmitExamButton: false,
    }),
    navigateNextQuestion: () => state => ({
      currentQuestion: state.currentQuestion + 1,
      previousButtonEnabled: true,
      showSubmitExamButton: state.currentQuestion + 1 === 14,
    }),
  },
  "ExamNavigationStorePlaceholder",
);

export const ExamNavigationStorePlaceholderProvider =
  examNavigationStorePlaceholder.Provider;

export const ExamNavigationStorePlaceholderConsumer =
  examNavigationStorePlaceholder.Consumer;
