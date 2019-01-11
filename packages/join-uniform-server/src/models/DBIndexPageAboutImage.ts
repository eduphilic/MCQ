import { models } from "@join-uniform/common";

type LocalizedString = models.LocalizedString;

export type DBIndexPageAboutImage = {
  id: string;
  imageUrl: string;
  title: LocalizedString;
  text: LocalizedString;
};
