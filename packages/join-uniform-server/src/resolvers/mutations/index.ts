import { MutationResolvers } from "~/generated";

import {
  createCategoryAndNewEntry,
  TypeDefCreateCategoryAndNewEntry,
} from "./createCategoryAndNewEntry";
import {
  createCategoryForExistingEntry,
  TypeDefCreateCategoryForExistingEntry,
} from "./createCategoryForExistingEntry";
import { createEntry, TypeDefCreateEntry } from "./createEntry";
import { deleteCategories, TypeDefDeleteCategories } from "./deleteCategories";
import { deleteEntries, TypeDefDeleteEntries } from "./deleteEntries";
import {
  generateCloudinaryMediaLibraryAuthenticationToken,
  TypeDefGenerateCloudinaryMediaLibraryAuthenticationToken,
} from "./generateCloudinaryMediaLibraryAuthenticationToken";
import {
  generateCloudinarySignature,
  TypeDefGenerateCloudinarySignature,
} from "./generateCloudinarySignature";
import {
  setCategoryActivationStatuses,
  TypeDefSetCategoryActivationStatuses,
} from "./setCategoryActivationStatuses";
import { TypeDefUpdateCategory, updateCategory } from "./updateCategory";
import { TypeDefUpdateEntry, updateEntry } from "./updateEntry";
import { TypeDefUpdateIndexCards, updateIndexCards } from "./updateIndexCards";
import { TypeDefUpdateIndexPage, updateIndexPage } from "./updateIndexPage";
import { TypeDefUpdateLogoUrl, updateLogoUrl } from "./updateLogoUrl";

export const typeDefs = [
  TypeDefCreateCategoryAndNewEntry,
  TypeDefCreateCategoryForExistingEntry,
  TypeDefCreateEntry,
  TypeDefDeleteCategories,
  TypeDefDeleteEntries,
  TypeDefGenerateCloudinaryMediaLibraryAuthenticationToken,
  TypeDefGenerateCloudinarySignature,
  TypeDefSetCategoryActivationStatuses,
  TypeDefUpdateCategory,
  TypeDefUpdateEntry,
  TypeDefUpdateIndexCards,
  TypeDefUpdateIndexPage,
  TypeDefUpdateLogoUrl,
];

export const Mutation: MutationResolvers = {
  createCategoryAndNewEntry,
  createCategoryForExistingEntry,
  createEntry,
  deleteCategories,
  deleteEntries,
  generateCloudinaryMediaLibraryAuthenticationToken,
  generateCloudinarySignature,
  setCategoryActivationStatuses,
  updateCategory,
  updateEntry,
  updateIndexCards,
  updateIndexPage,
  updateLogoUrl,
};
