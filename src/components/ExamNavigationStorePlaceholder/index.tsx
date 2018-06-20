import { createStore } from "common/utils/contextStore";

const examNavigationStorePlaceholder = createStore(
  {
    showOverviewPage: true,
    page: 0,
    previousButtonEnabled: false,
    showSubmitExamButton: false,
  },
  {
    startExam: () => () => ({ showOverviewPage: false }),
    navigatePreviousQuestion: () => state => ({
      page: state.page - 1,
      previousButtonEnabled: state.page - 1 > 0,
      showSubmitExamButton: false,
    }),
    navigateNextQuestion: () => state => ({
      page: state.page + 1,
      previousButtonEnabled: true,
      showSubmitExamButton: state.page + 1 === 14,
    }),
  },
  "ExamNavigationStorePlaceholder",
);

export const ExamNavigationStorePlaceholderProvider =
  examNavigationStorePlaceholder.Provider;

export const ExamNavigationStorePlaceholderConsumer =
  examNavigationStorePlaceholder.Consumer;
