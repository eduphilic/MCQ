import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";

/**
 * Navigation links and components for Admin Dashboard pages.
 */
export const navigationLinksAdmin: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkDashboard",
    to: "/admin/dashboard",
    component: pages.AdminDashboard,
  },
  {
    titleLocalizationKey: "adminLinkEntryManager",
    to: "/admin/entry-manager",
    component: pages.AdminEntryManager,
  },
  {
    titleLocalizationKey: "adminLinkTestManager",
    to: "/admin/test-manager",
    component: pages.AdminTestManager,
  },
  {
    titleLocalizationKey: "adminLinkIndexManager",
    to: "/admin/index-manager",
    component: pages.AdminIndexManager,
  },
  {
    titleLocalizationKey: "adminLinkPlanManager",
    to: "/admin/plan-manager",
    component: pages.AdminPlanManager,
  },
  {
    titleLocalizationKey: "adminLinkQuestionManager",
    to: "/admin/question-manager",
    component: pages.AdminQuestionManager,
  },
  {
    titleLocalizationKey: "adminLinkUserManager",
    to: "/admin/user-manager",
    component: pages.AdminUserManager,
  },
  {
    titleLocalizationKey: "adminLinkRevenueManager",
    to: "/admin/revenue-manager",
    component: pages.AdminRevenueManager,
  },
];
