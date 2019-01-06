import { Entry, QueryEntryResolver } from "@join-uniform/graphql/server";
import { DBEntry } from "../models";
import { entryCategories } from "./entryCategories";

const r: QueryEntryResolver = async (parent, args, context, info) => {
  const { entryId } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) return null;

  const entryResult: Entry = {
    ...(entrySnapshot.data() as Omit<DBEntry, "id">),
    id: entrySnapshot.id,
    categories: await entryCategories(parent, { entryId }, context, info),
  };

  return entryResult;
};

export { r as entry };
