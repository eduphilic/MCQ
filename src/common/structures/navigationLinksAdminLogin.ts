import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";

export const navigationLinksAdminLogin: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkLogin",
    to: "/admin",
    component: pages.AdminLogin,
  },
];
