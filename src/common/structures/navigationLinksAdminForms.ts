import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";

/**
 * Navigation links and components for Admin Dashboard form pages.
 */
export const navigationLinksAdminForms: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkTestManagerNewTemplate",
    to: "/admin/test-manager/new",
    component: pages.AdminTestManagerNewTemplate,
  },
];
