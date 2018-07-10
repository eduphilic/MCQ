import { strings } from "localization";

export const routes: {
  path: string;
  localizationKey: keyof typeof strings;
}[] = [{ path: "/welcome/entries", localizationKey: "landingLinkOnboarding1" }];
