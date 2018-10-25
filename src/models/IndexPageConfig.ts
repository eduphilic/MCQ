import { IndexAboutImage } from "./IndexAboutImage";
import { LocalizedString } from "./LocalizedString";

export interface IndexPageConfig {
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryText: LocalizedString;
  heroFeatures: LocalizedString[];
  heroFooterText: LocalizedString;
  aboutTitle: LocalizedString;
  aboutText: LocalizedString;
  aboutImages: IndexAboutImage[];
}
