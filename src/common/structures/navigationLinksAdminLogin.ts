import { NavigationLinks } from "common/types/NavigationLinks";
import * as adminPages from "pages/admin";

export const navigationLinksAdminLogin: NavigationLinks = [
  {
    titleLocalizationKey: "adminLinkLogin",
    to: "/admin",
    component: adminPages.AdminLogin,
  },
];
