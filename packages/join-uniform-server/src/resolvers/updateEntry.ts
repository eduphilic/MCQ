import {
  Entry,
  MutationUpdateEntryResolver,
} from "@join-uniform/graphql/server";

export const updateEntry: MutationUpdateEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { entryId, update } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) throw new Error("Specified Entry does not exist.");

  const entryUpdate: Omit<Entry, "id" | "categories"> = {
    name: update.name,
    description: update.description,
    logoUrl: update.logoUrl,
  };

  await entryRef.update(entryUpdate);

  return true;
};
