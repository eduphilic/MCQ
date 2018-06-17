import { NavigationLinks } from "common/types/NavigationLinks";
import * as examPages from "pages/exam";

/**
 * Exam link for in progress exam.
 */
export const navigationLinksExam: NavigationLinks = [
  {
    titleLocalizationKey: "examLinkQuiz",
    to: "/exam",
    component: examPages.ExamQuiz,
  },
];
