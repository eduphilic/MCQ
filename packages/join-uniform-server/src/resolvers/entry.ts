import { Entry, QueryEntryResolver } from "@join-uniform/graphql/server";

export const entry: QueryEntryResolver = async (_parent, args, context) => {
  const { entryId } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) return null;

  const entryResult: Entry = {
    ...(entrySnapshot.data() as Omit<Entry, "id">),
    id: entrySnapshot.id,
  };

  return entryResult;
};
