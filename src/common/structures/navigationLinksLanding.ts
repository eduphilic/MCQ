import { NavigationLinks } from "common/types/NavigationLinks";
import * as landingPages from "pages/landing";

export const navigationLinksLanding: NavigationLinks = [
  {
    titleLocalizationKey: "landingLinkHome",
    to: "/",
    component: landingPages.LandingHome,
  },
  {
    titleLocalizationKey: "landingLinkPasswordReset",
    to: "/resetPassword",
    component: landingPages.LandingPasswordReset,
  },
];
