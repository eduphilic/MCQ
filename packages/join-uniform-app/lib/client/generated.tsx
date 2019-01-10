// This is an automatically generated file.
// DO NOT MODIFY
// Use the command: "yarn graphql" to regenerate.
import { models } from "@join-uniform/common";
export type Maybe<T> = T | null;


export interface CategoryCreationRequestExistingEntry {
  
  readonly categoryName: string;
  
  readonly categoryEducation: string;
  
  readonly pricePerPaper: number;
  
  readonly existingEntryId: string;
}

export interface CategoryCreationRequestNewEntry {
  
  readonly categoryName: string;
  
  readonly categoryEducation: string;
  
  readonly pricePerPaper: number;
  
  readonly entryLogoUrl: string;
  
  readonly entryName: string;
  
  readonly entryExplanation: string;
}

export interface EntryUpdate {
  
  readonly name: string;
  
  readonly logoUrl: string;
  
  readonly description: string;
}

export interface CategoryUpdate {
  
  readonly name: string;
  
  readonly education: string;
  
  readonly pricePerPaperRs: number;
}

export interface InputIndexPageUpdate {
  
  readonly heroBackgroundImageUrl: string;
  
  readonly heroBackgroundAlpha: number;
  
  readonly heroPrimaryTextEnglish: string;
  
  readonly heroPrimaryTextHindi: Maybe<string>;
  
  readonly heroFeatures: ReadonlyArray<models.LocalizedString>;
  
  readonly aboutTitleEnglish: string;
  
  readonly aboutTitleHindi: Maybe<string>;
  
  readonly aboutTextEnglish: string;
  
  readonly aboutTextHindi: Maybe<string>;
  
  readonly aboutImages: ReadonlyArray<AboutImageUpdate>;
  
  readonly indexCards: ReadonlyArray<IndexCardUpdate>;
}

export interface AboutImageUpdate {
  
  readonly imageUrl: string;
  
  readonly title: models.LocalizedString;
  
  readonly text: models.LocalizedString;
}

export interface IndexCardUpdate {
  
  readonly entryId: string;
  
  readonly colorBlock: string;
  
  readonly colorCategoryBackground: string;
  
  readonly colorLogoBackground: string;
  
  readonly colorTitle: string;
  
  readonly categories: ReadonlyArray<IndexCardCategoryUpdate>;
}

export interface IndexCardCategoryUpdate {
  
  readonly categoryId: string;
  
  readonly visible: boolean;
}
/** Supported localization languages. */
export enum Language {
  English = "English",
  Hindi = "Hindi",
}

/** Represents a localized string. The Hindi field is optional. Fields: - key: String! - en: String! - hi: String */
export type LocalizedString = models.LocalizedString;

/** A set of localized strings for a language. */
export type Translation = any;


export type Json = any;


