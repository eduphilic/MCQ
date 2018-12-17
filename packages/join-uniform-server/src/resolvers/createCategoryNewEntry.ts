import {
  Category,
  Entry,
  MutationCreateCategoryNewEntryResolver,
  ValidatorCategoryCreationRequestNewEntry,
} from "@join-uniform/graphql/server";

export const createCategoryNewEntry: MutationCreateCategoryNewEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;
  ValidatorCategoryCreationRequestNewEntry.validateSync(request);

  const { firebaseDatabase: database } = context;
  const entriesRef = database.collection("entries");
  const categoriesRef = database.collection("categories");

  const newCategory: Omit<Category, "id"> = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };

  const batch = database.batch();

  const newCategoryRef = categoriesRef.doc();
  batch.create(newCategoryRef, newCategory);

  const newEntry: Omit<Entry, "id"> = {
    categories: [newCategoryRef.id],
    description: request.entryExplanation,
    logoUrl: request.entryLogoUrl,
    name: request.entryName,
  };
  batch.create(entriesRef.doc(), newEntry);

  await batch.commit();

  return true;
};
