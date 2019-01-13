import gql from "graphql-tag";
import { Entry, MutationUpdateEntryResolver } from "~/generated";
import { DBEntry } from "~/models";

// TODO: Use "data fetcher" here.
import { entryCategories } from "../queries/entryCategories";

export const TypeDefUpdateEntry = gql`
  extend type Mutation {
    updateEntry(entryId: ID!, update: EntryUpdateRequest!): Entry!
  }
`;

const r: MutationUpdateEntryResolver = async (parent, args, context, info) => {
  const { entryId, update } = args;
  const { firebaseDatabase: database } = context;

  const entryRef = database.collection("entries").doc(entryId);
  const entrySnapshot = await entryRef.get();

  if (!entrySnapshot.exists) throw new Error("Specified Entry does not exist.");

  const entryUpdate: Omit<DBEntry, "categories"> = {
    name: update.name,
    description: update.description,
    logoUrl: update.logoUrl,
  };

  await entryRef.update(entryUpdate);

  const entry: Entry = {
    ...(entrySnapshot.data() as DBEntry),
    ...entryUpdate,
    id: entryId,
    categories: await entryCategories(parent, { entryId }, context, info),
  };

  return entry;
};

export { r as updateEntry };
