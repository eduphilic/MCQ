import { NavigationLinks } from "common/types/NavigationLinks";
import { ExamQuizPage } from "features/exam-taking";

/**
 * Exam link for in progress exam.
 */
export const navigationLinksExam: NavigationLinks = [
  {
    titleLocalizationKey: "routes_ExamTaking_ExamQuizPage",
    to: "/exam",
    component: ExamQuizPage,
  },
];
