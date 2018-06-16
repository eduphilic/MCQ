import { createStore } from "common/utils/contextStore";

const examNavigationStorePlaceholder = createStore(
  {
    page: "overview" as "overview" | number,
  },
  {
    test: () => () => ({}),
  },
  "ExamNavigationStorePlaceholder",
);

export const ExamNavigationStorePlaceholderProvider =
  examNavigationStorePlaceholder.Provider;

export const ExamNavigationStorePlaceholderConsumer =
  examNavigationStorePlaceholder.Consumer;
