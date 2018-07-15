import { NavigationLinks } from "common/types/NavigationLinks";
import { navigationLinksAdmin } from "./navigationLinksAdmin";
import { navigationLinksAdminForms } from "./navigationLinksAdminForms";
import { navigationLinksAdminLogin } from "./navigationLinksAdminLogin";

export const navigationLinksAll: NavigationLinks = [
  ...navigationLinksAdmin,
  ...navigationLinksAdminForms,
  ...navigationLinksAdminLogin,
];
