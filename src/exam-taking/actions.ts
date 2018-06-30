import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum ExamTakingAction {
  LoadPlaceholderExam = "[exam-taking] Load Placeholder Exam",
}

export const actions = {
  loadPlaceholderExam: () => createAction(ExamTakingAction.LoadPlaceholderExam),
};

export type Actions = ActionsUnion<typeof actions>;
