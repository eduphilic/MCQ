import { LocalizedString } from "types";

export interface IExamQuestionCategory {
  /** Category title. */
  title: LocalizedString;

  /** Number of questions in the category. */
  questionCount: number;
}
