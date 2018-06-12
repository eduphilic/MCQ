import { NavigationLinks } from "common/types/NavigationLinks";
import { navigationLinksAdmin } from "./navigationLinksAdmin";
import { navigationLinksAdminForms } from "./navigationLinksAdminForms";
import { navigationLinksAdminLogin } from "./navigationLinksAdminLogin";
import { navigationLinksLanding } from "./navigationLinksLanding";
import { navigationLinksUser } from "./navigationLinksUser";

export const navigationLinksAll: NavigationLinks = [
  ...navigationLinksAdmin,
  ...navigationLinksAdminForms,
  ...navigationLinksAdminLogin,
  ...navigationLinksLanding,
  ...navigationLinksUser,
];
