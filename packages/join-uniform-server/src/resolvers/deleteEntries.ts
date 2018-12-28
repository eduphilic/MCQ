import {
  Entry,
  MutationDeleteEntriesResolver,
} from "@join-uniform/graphql/server";

export const deleteEntries: MutationDeleteEntriesResolver = async (
  _parent,
  args,
  context,
) => {
  const { entryIds } = args;
  const { firebaseDatabase: database } = context;

  const entriesCollectionRef = database.collection("entries");
  const entrySnapshots = await Promise.all(
    entryIds.map(entryId => entriesCollectionRef.doc(entryId).get()),
  );

  const deletionBatch = database.batch();
  entrySnapshots.forEach(entrySnapshot => {
    if (!entrySnapshot.exists) {
      throw new Error(`Entry ${entrySnapshot.id} does not exist.`);
    }
    const entry = entrySnapshot.data() as Omit<Entry, "id">;
    if (entry.categories.length > 0) {
      throw new Error(`Entry ${entrySnapshot.id} still has categories.`);
    }
    deletionBatch.delete(entrySnapshot.ref);
  });

  await deletionBatch.commit();

  return true;
};
