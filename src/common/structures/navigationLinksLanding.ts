import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";

export const navigationLinksLanding: NavigationLinks = [
  {
    titleLocalizationKey: "landingLinkHome",
    to: "/",
    component: pages.LandingHome,
  },
  {
    titleLocalizationKey: "landingLinkPasswordReset",
    to: "/resetPassword",
    component: pages.LandingPasswordReset,
  },
  {
    titleLocalizationKey: "landingLinkOnboarding1",
    to: "/welcome/1",
    component: pages.LandingOnboardingStep1,
  },
  {
    titleLocalizationKey: "landingLinkOnboarding2",
    to: "/welcome/2",
    component: pages.LandingOnboardingStep2,
  },
  {
    titleLocalizationKey: "landingLinkOnboarding3",
    to: "/welcome/3",
    component: pages.LandingOnboardingStep3,
  },
];
