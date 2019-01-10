import { Category, MutationDeleteCategoriesResolver } from "~/generated";
import { DBCategory, DBEntry } from "../models";

const r: MutationDeleteCategoriesResolver = async (_parent, args, context) => {
  const { categoryIds } = args;
  const { firebaseDatabase: database } = context;

  const entriesCategoriesQuery = database
    .collection("entries")
    .select("categories");
  const entriesCategoriesQuerySnapshot = await entriesCategoriesQuery.get();

  const entriesIdAndCategoryFieldsOnly: (Pick<DBEntry, "categories"> & {
    id: string;
  })[] = entriesCategoriesQuerySnapshot.docs.map(doc => ({
    id: doc.id,
    categories: doc.data().categories,
  }));

  const batch = database.batch();

  // Queue Category IDs for removal from Entries.
  const categoryIdDeletionQueue = new Set(categoryIds);
  entriesIdAndCategoryFieldsOnly.forEach(entry => {
    const originalCategoryList = [...entry.categories];
    entry.categories = entry.categories.filter(c => !categoryIds.includes(c));
    if (entry.categories.length === originalCategoryList.length) return;

    const entryRef = database.collection("entries").doc(entry.id);
    batch.update(entryRef, { categories: entry.categories });

    originalCategoryList
      .filter(id => !entry.categories.includes(id))
      .forEach(id => {
        categoryIdDeletionQueue.delete(id);
      });
  });

  // Verify that all requested Category ids have been removed from their
  // associated Entries.
  if (categoryIdDeletionQueue.size !== 0) {
    throw new Error(
      `The following Categories did not exist in Entries: ${Array.from(
        categoryIdDeletionQueue.values(),
      ).join(", ")}`,
    );
  }

  // Generate list of Categories which are still associated with Entries.
  const remainingCategoryIds = entriesIdAndCategoryFieldsOnly.flatMap(
    e => e.categories,
  );

  // Remove now orphaned Category records and generate list of remaining
  // Categories.
  const orphanedCategoriesRemoved: string[] = [];
  const categoriesQuerySnapshot = await database.collection("categories").get();
  const remainingCategories: Category[] = [];
  categoriesQuerySnapshot.docs.forEach(doc => {
    if (!remainingCategoryIds.includes(doc.id)) {
      orphanedCategoriesRemoved.push(doc.id);
      batch.delete(doc.ref);
      return;
    }

    const dbCategory = doc.data() as DBCategory;
    const category: Category = {
      ...dbCategory,
      id: doc.id,
    };
    remainingCategories.push(category);
  });

  /* tslint:disable-next-line:no-console */
  console.log(
    `Removed orphaned Categories: ${orphanedCategoriesRemoved.join(", ")}.`,
  );

  await batch.commit();

  return remainingCategories;
};

export { r as deleteCategories };
