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
  {
    titleLocalizationKey: "landingLinkOnboarding1",
    to: "/welcome/1",
    component: landingPages.LandingOnboardingStep1,
  },
  {
    titleLocalizationKey: "landingLinkOnboarding2",
    to: "/welcome/2",
    component: landingPages.LandingOnboardingStep2,
  },
  {
    titleLocalizationKey: "landingLinkOnboarding3",
    to: "/welcome/3",
    component: landingPages.LandingOnboardingStep3,
  },
];
