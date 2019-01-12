import { MutationResolvers } from "~/generated";

import TypeDefCreateCategoryAndNewEntry from "./createCategoryAndNewEntry.graphql";
import TypeDefCreateCategoryForExistingEntry from "./createCategoryForExistingEntry.graphql";
import TypeDefDeleteCategories from "./deleteCategories.graphql";
import TypeDefDeleteEntries from "./deleteEntries.graphql";
import TypeDefGenerateCloudinaryMediaLibraryAuthenticationToken from "./generateCloudinaryMediaLibraryAuthenticationToken.graphql";
import TypeDefGenerateCloudinarySignature from "./generateCloudinarySignature.graphql";
import TypeDefSetCategoryActivationStatuses from "./setCategoryActivationStatuses.graphql";
import TypeDefUpdateCategory from "./updateCategory.graphql";
import TypeDefUpdateEntry from "./updateEntry.graphql";
import TypeDefUpdateIndexPage from "./updateIndexPage.graphql";
import TypeDefUpdateLogoUrl from "./updateLogoUrl.graphql";

import { createCategoryAndNewEntry } from "./createCategoryAndNewEntry";
import { createCategoryForExistingEntry } from "./createCategoryForExistingEntry";
import { deleteCategories } from "./deleteCategories";
import { deleteEntries } from "./deleteEntries";
import { generateCloudinaryMediaLibraryAuthenticationToken } from "./generateCloudinaryMediaLibraryAuthenticationToken";
import { generateCloudinarySignature } from "./generateCloudinarySignature";
import { setCategoryActivationStatuses } from "./setCategoryActivationStatuses";
import { updateCategory } from "./updateCategory";
import { updateEntry } from "./updateEntry";
import { updateIndexPage } from "./updateIndexPage";
import { updateLogoUrl } from "./updateLogoUrl";

export const typeDefs = [
  TypeDefCreateCategoryAndNewEntry,
  TypeDefCreateCategoryForExistingEntry,
  TypeDefDeleteCategories,
  TypeDefDeleteEntries,
  TypeDefGenerateCloudinaryMediaLibraryAuthenticationToken,
  TypeDefGenerateCloudinarySignature,
  TypeDefSetCategoryActivationStatuses,
  TypeDefUpdateCategory,
  TypeDefUpdateEntry,
  TypeDefUpdateIndexPage,
  TypeDefUpdateLogoUrl,
];

export const Mutation: MutationResolvers = {
  createCategoryAndNewEntry,
  createCategoryForExistingEntry,
  deleteCategories,
  deleteEntries,
  generateCloudinaryMediaLibraryAuthenticationToken,
  generateCloudinarySignature,
  setCategoryActivationStatuses,
  updateCategory,
  updateEntry,
  updateIndexPage,
  updateLogoUrl,
};
