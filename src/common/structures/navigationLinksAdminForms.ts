import { NavigationLinks } from "common/types/NavigationLinks";
import * as adminPages from "pages/admin";

/**
 * Navigation links and components for Admin Dashboard form pages.
 */
export const navigationLinksAdminForms: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkTestManagerNewTemplate",
    to: "/admin/test-manager/new",
    component: adminPages.AdminTestManagerNewTemplate,
  },
];
