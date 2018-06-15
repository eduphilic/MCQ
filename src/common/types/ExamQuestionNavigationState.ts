export interface ExamQuestionNavigationState {
  currentQuestion: number;

  questions: {
    status: "answered" | "not-answered" | "marked-for-review" | "not-visited";
  }[];

  categories: {
    title: string;
    questionCount: number;
  }[];
}
