import { IndexAboutImage } from "./IndexAboutImage";

export interface IndexPageConfig {
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryText: string;
  heroFeatures: string[];
  heroFooterText: string;
  aboutTitle: string;
  aboutText: string;
  aboutImages: IndexAboutImage[];
}
