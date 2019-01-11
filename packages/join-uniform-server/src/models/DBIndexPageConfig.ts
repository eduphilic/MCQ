import { models } from "@join-uniform/common";
import { DBIndexPageAboutImage } from "./DBIndexPageAboutImage";

type LocalizedString = models.LocalizedString;

export type DBIndexPageConfig = {
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryText: LocalizedString;
  heroFeatures: LocalizedString[];
  heroFooterText: LocalizedString;
  aboutTitle: LocalizedString;
  aboutText: LocalizedString;
  aboutImages: DBIndexPageAboutImage[];
};
