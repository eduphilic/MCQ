import { DBEntry } from "~/models";
import { EventHandler } from "./mediator";

export const removeCategoriesFromEntriesOnCategoriesRemoval: EventHandler<
  "CategoriesRemoved"
> = async (event, context, batch) => {
  const { categoryIds } = event;
  const { firebaseDatabase: database, loaders } = context;

  const entryDocumentReferences = await database
    .collection("entries")
    .listDocuments();
  const entryIds = entryDocumentReferences.map(ref => ref.id);
  const entries = await loaders.entries.loadMany(entryIds);

  entryIds.forEach((entryId, index) => {
    const entry = entries[index];
    const originalCategoriesCount = entry.categories.length;
    entry.categories = entry.categories.filter(c => !categoryIds.includes(c));

    if (originalCategoriesCount !== entry.categories.length) {
      loaders.entries.clear(entryId);

      const entryCategoryFieldUpdate: Pick<DBEntry, "categories"> = {
        categories: entry.categories,
      };

      batch.update(
        database.collection("entries").doc(entryId),
        entryCategoryFieldUpdate,
      );
    }
  });
};
