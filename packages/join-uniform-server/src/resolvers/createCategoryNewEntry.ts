import {
  Entry,
  MutationCreateCategoryNewEntryResolver,
  // ValidatorCategoryCreationRequestNewEntry,
} from "~/generated";
import { DBCategory, DBEntry } from "../models";

export const createCategoryNewEntry: MutationCreateCategoryNewEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;
  // TODO: Do something about the validation.
  // ValidatorCategoryCreationRequestNewEntry.validateSync(request);

  const { firebaseDatabase: database } = context;
  const entriesRef = database.collection("entries");
  const categoriesRef = database.collection("categories");

  const newCategory: DBCategory = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };

  const batch = database.batch();

  const newCategoryRef = categoriesRef.doc();
  batch.create(newCategoryRef, newCategory);

  const newEntry: DBEntry = {
    categories: [newCategoryRef.id],
    description: request.entryExplanation,
    logoUrl: request.entryLogoUrl,
    name: request.entryName,
  };
  const newEntryRef = entriesRef.doc();
  batch.create(newEntryRef, newEntry);

  await batch.commit();

  const mutationResult: Entry = {
    ...newEntry,
    id: newEntryRef.id,
    categories: [
      {
        ...newCategory,
        id: newCategoryRef.id,
      },
    ],
  };

  return mutationResult;
};
