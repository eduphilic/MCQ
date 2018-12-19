import { MutationDeleteEntryResolver } from "@join-uniform/graphql/server";

export const deleteEntry: MutationDeleteEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { entryId } = args;
  const { firebaseDatabase: database } = context;

  const entriesRef = database.collection("entries");
  const entryRef = entriesRef.doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) throw new Error("Specified Entry does not exist.");

  if (entrySnapshot.get("categories").length > 0) {
    throw new Error("Specified Entry still contains Categories.");
  }

  await entryRef.delete();

  return true;
};
