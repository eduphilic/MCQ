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

  const newEntry: Omit<Entry, "id"> = {
    categories: [],
    description: request.entryExplanation,
    logoUrl: request.entryLogoUrl,
    name: request.entryName,
  };

  const newCategory: Omit<Category, "id"> = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };

  const batch = database.batch();
  batch.create(entriesRef.doc(), newEntry);
  batch.create(categoriesRef.doc(), newCategory);

  await batch.commit();

  return true;
};
