import { IndexAboutImage } from "./IndexAboutImage";

export interface IndexConfig {
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryTextEn: string;
  heroPrimaryTextHi: string;
  heroFeaturesEn: string[];
  heroFeaturesHi: string[];
  heroFooterTextEn: string;
  heroFooterTextHi: string;
  aboutTitleEn: string;
  aboutTitleHi: string;
  aboutTextEn: string;
  aboutTextHi: string;
  aboutImages: IndexAboutImage[];
}
