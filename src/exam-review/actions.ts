import { ActionsUnion } from "types";
import { createAction } from "utils";

export enum ExamReviewAction {
  LoadPlaceholderData = "[ExamReviewAction] Load Placeholder Data",
}

export const actions = {
  loadPlaceholderData: () => createAction(ExamReviewAction.LoadPlaceholderData),
};

export type Actions = ActionsUnion<typeof actions>;
