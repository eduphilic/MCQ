import {
  MutationCreateCategoryExistingEntryResolver,
  // ValidatorCategoryCreationRequestExistingEntry,
} from "~/generated";
import { DBCategory, DBEntry } from "../models";

export const createCategoryExistingEntry: MutationCreateCategoryExistingEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;
  const { firebaseDatabase: database } = context;

  // Validate request fields.
  // ValidatorCategoryCreationRequestExistingEntry.validateSync(request);
  // TODO: Do something about validation...

  const batch = database.batch();

  // Verify the specified Entry exists.
  const entryRef = database.collection("entries").doc(request.existingEntryId);
  const entrySnapshot = await entryRef.get();
  if (!entrySnapshot.exists) {
    throw new Error("The specified entry id does not exist.");
  }

  // Create Category entry.
  const newCategory: DBCategory = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };
  const newCategoryRef = database.collection("categories").doc();
  batch.create(newCategoryRef, newCategory);

  // Update Entry to contain the id of the new Category.
  const entry = entrySnapshot.data() as DBEntry;
  const entryUpdate: DBEntry = {
    ...entry,
    categories: [...entry.categories, newCategoryRef.id],
  };
  batch.update(entryRef, entryUpdate);

  await batch.commit();

  // Return new category.
  return {
    id: newCategoryRef.id,
    ...newCategory,
  };
};
