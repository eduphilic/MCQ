import { NavigationLinks } from "common/types/NavigationLinks";
import * as adminPages from "pages/admin";

/**
 * Navigation links and components for Admin Dashboard form pages.
 */
export const navigationLinksAdminForms: NavigationLinks = [
  {
    titleLocalizationKey: "routes_pages_Admin_AdminTestManagerNewTemplate",
    to: "/admin/test-manager/new",
    component: adminPages.AdminTestManagerNewTemplate,
  },
];
