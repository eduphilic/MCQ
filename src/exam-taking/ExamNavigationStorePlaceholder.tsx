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

const touchQuestion = (
  questionIndex: number,
  questions: Question[],
): Question[] => {
  if (questions[questionIndex].status !== "not-visited") return questions;

  return [
    ...questions.slice(0, questionIndex),
    { ...questions[questionIndex], status: "not-answered" },
    ...questions.slice(questionIndex + 1),
  ];
};

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
    startExam: () => state => ({
      showOverviewPage: false,
      questions: touchQuestion(0, state.questions),
    }),
    navigatePreviousQuestion: () => state => ({
      currentQuestion: state.currentQuestion - 1,
      previousButtonEnabled: state.currentQuestion - 1 > 0,
      showSubmitExamButton: false,
      questions: touchQuestion(state.currentQuestion - 1, state.questions),
    }),
    navigateNextQuestion: () => state => ({
      currentQuestion: state.currentQuestion + 1,
      previousButtonEnabled: true,
      showSubmitExamButton: state.currentQuestion + 1 === 14,
      questions: touchQuestion(state.currentQuestion + 1, state.questions),
    }),
    navigateToQuestion: (questionIndex: number) => state => ({
      showOverviewPage: false,
      currentQuestion: questionIndex,
      previousButtonEnabled: questionIndex - 1 > 0,
      showSubmitExamButton: questionIndex + 1 === 14,
      questions: touchQuestion(questionIndex, state.questions),
    }),
  },
  "ExamNavigationStorePlaceholder",
);

export const ExamNavigationStorePlaceholderProvider =
  examNavigationStorePlaceholder.Provider;

export const ExamNavigationStorePlaceholderConsumer =
  examNavigationStorePlaceholder.Consumer;
