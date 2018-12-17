import {
  Category,
  MutationCreateCategoryExistingEntryResolver,
  ValidatorCategoryCreationRequestExistingEntry,
} from "@join-uniform/graphql/server";

export const createCategoryExistingEntry: MutationCreateCategoryExistingEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;

  // Validate request fields.
  ValidatorCategoryCreationRequestExistingEntry.validateSync(request);

  // Verify the specified Entry exists.
  const entryRef = await context.firebaseDatabase
    .collection("entries")
    .doc(request.existingEntryId)
    .get();
  if (!entryRef.exists) {
    throw new Error("The specified entry id does not exist.");
  }

  const newCategoryEntry: Omit<Category, "id"> = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };

  await context.firebaseDatabase.collection("categories").add(newCategoryEntry);

  return true;
};
