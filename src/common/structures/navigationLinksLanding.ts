import { NavigationLinks } from "common/types/NavigationLinks";
import * as landingPages from "pages/landing";

export const navigationLinksLanding: NavigationLinks = [
  {
    titleLocalizationKey: "routes_pages_Landing_LandingHome",
    to: "/",
    component: landingPages.LandingHome,
  },
  {
    titleLocalizationKey: "routes_pages_Landing_LandingPasswordReset",
    to: "/resetPassword",
    component: landingPages.LandingPasswordReset,
  },
];
