import {
  Category,
  Entry,
  QueryEntriesResolver,
} from "@join-uniform/graphql/server";

export const entries: QueryEntriesResolver = async (_parent, _args, ctx) => {
  const { firebaseDatabase: database } = ctx;

  const entriesRef = database.collection("entries");
  const categoriesRef = database.collection("categories");

  const [entriesSnapshot, categoriesSnapshot] = await Promise.all([
    entriesRef.get(),
    categoriesRef.get(),
  ]);

  const categories: Category[] = categoriesSnapshot.docs.map(categoryDoc => {
    const category: Category = {
      ...(categoryDoc.data() as Omit<Category, "id">),
      id: categoryDoc.id,
    };
    return category;
  });

  const result: Entry[] = entriesSnapshot.docs.map(entryDoc => {
    const entryData = entryDoc.data() as Omit<Entry, "id" | "categories"> & {
      categories: string[];
    };

    const entry: Entry = {
      ...entryData,
      id: entryDoc.id,
      categories: categories.filter(c => entryData.categories.includes(c.id)),
    };

    return entry;
  });

  return result;
};
