import {
  Entry,
  MutationDeleteCategoriesResolver,
} from "@join-uniform/graphql/server";

export const deleteCategories: MutationDeleteCategoriesResolver = async (
  _parent,
  args,
  context,
) => {
  const { entryId, categoryIds } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = await database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();
  if (!entrySnapshot.exists) {
    throw new Error("The specified Entry does not exist.");
  }
  const entryCategoryIds = entrySnapshot.get(
    "categories",
  ) as Entry["categories"];
  if (categoryIds.find(categoryId => !entryCategoryIds.includes(categoryId))) {
    throw new Error(
      "Supplied category is not contained in the specified Entry.",
    );
  }

  const batch = database.batch();
  const entryUpdate = entrySnapshot.data() as Omit<Entry, "id">;
  entryUpdate.categories = entryUpdate.categories.filter(
    c => !categoryIds.includes(c),
  );
  batch.update(entryRef, entryUpdate);

  categoryIds.forEach(categoryId => {
    batch.delete(database.collection("categories").doc(categoryId));
  });

  await batch.commit();

  return true;
};
