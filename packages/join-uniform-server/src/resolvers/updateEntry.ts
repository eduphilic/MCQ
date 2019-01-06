import {
  Entry,
  MutationUpdateEntryResolver,
} from "@join-uniform/graphql/server";
import { DBEntry } from "../models";
import { entryCategories } from "./entryCategories";

const r: MutationUpdateEntryResolver = async (parent, args, context, info) => {
  const { entryId, update } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) throw new Error("Specified Entry does not exist.");

  const entryUpdate: Omit<DBEntry, "id" | "categories"> = {
    name: update.name,
    description: update.description,
    logoUrl: update.logoUrl,
  };

  await entryRef.update(entryUpdate);

  const entry: Entry = {
    ...(entrySnapshot.data() as Omit<DBEntry, "id">),
    ...entryUpdate,
    id: entryId,
    categories: await entryCategories(parent, { entryId }, context, info),
  };

  return entry;
};

export { r as updateEntry };
