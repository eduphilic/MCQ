import { IndexAboutImage } from "./IndexAboutImage";

export interface IndexConfig {
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryTextEn: string;
  heroPrimaryTextHi: string;
  heroFeaturesEn: string[];
  heroFeaturesHi: string[];
  aboutTitleEn: string;
  aboutTitleHi: string;
  aboutTextEn: string;
  aboutTextHi: string;
  aboutImages: IndexAboutImage[];
}
