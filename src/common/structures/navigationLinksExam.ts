import { NavigationLinks } from "common/types/NavigationLinks";
import { ExamQuizPage } from "exam-taking";

/**
 * Exam link for in progress exam.
 */
export const navigationLinksExam: NavigationLinks = [
  {
    titleLocalizationKey: "examLinkQuiz",
    to: "/exam",
    component: ExamQuizPage,
  },
];
