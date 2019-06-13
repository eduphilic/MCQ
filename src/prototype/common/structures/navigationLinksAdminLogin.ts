import { NavigationLinks } from "common/types/NavigationLinks";
import * as adminPages from "pages/admin";

export const navigationLinksAdminLogin: NavigationLinks = [
  {
    titleLocalizationKey: "routes_pages_Admin_AdminLogin",
    to: "/admin",
    component: adminPages.AdminLogin,
  },
];
