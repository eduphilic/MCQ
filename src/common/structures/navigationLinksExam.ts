import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";

/**
 * Exam link for in progress exam.
 */
export const navigationLinksExam: NavigationLinks = [
  {
    titleLocalizationKey: "examLinkQuiz",
    to: "/exam",
    component: pages.ExamQuiz,
  },
];
