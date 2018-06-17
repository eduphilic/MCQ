import { NavigationLinks } from "common/types/NavigationLinks";
import * as adminPages from "pages/admin";

/**
 * Navigation links and components for Admin Dashboard pages.
 */
export const navigationLinksAdmin: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkDashboard",
    to: "/admin/dashboard",
    component: adminPages.AdminDashboard,
  },
  {
    titleLocalizationKey: "adminLinkEntryManager",
    to: "/admin/entry-manager",
    component: adminPages.AdminEntryManager,
  },
  {
    titleLocalizationKey: "adminLinkTestManager",
    to: "/admin/test-manager",
    component: adminPages.AdminTestManager,
  },
  {
    titleLocalizationKey: "adminLinkIndexManager",
    to: "/admin/index-manager",
    component: adminPages.AdminIndexManager,
  },
  {
    titleLocalizationKey: "adminLinkPlanManager",
    to: "/admin/plan-manager",
    component: adminPages.AdminPlanManager,
  },
  {
    titleLocalizationKey: "adminLinkQuestionManager",
    to: "/admin/question-manager",
    component: adminPages.AdminQuestionManager,
  },
  {
    titleLocalizationKey: "adminLinkUserManager",
    to: "/admin/user-manager",
    component: adminPages.AdminUserManager,
  },
  {
    titleLocalizationKey: "adminLinkRevenueManager",
    to: "/admin/revenue-manager",
    component: adminPages.AdminRevenueManager,
  },
];
