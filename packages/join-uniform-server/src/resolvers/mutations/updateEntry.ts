import gql from "graphql-tag";
import { MutationUpdateEntryResolver } from "~/generated";
import { DBEntry } from "~/models";
import { entriesByIds } from "../queries/entriesByIds";

export const TypeDefUpdateEntry = gql`
  extend type Mutation {
    updateEntry(entryId: ID!, update: UpdateEntryRequest!): Entry!
  }
`;

const r: MutationUpdateEntryResolver = async (parent, args, context, info) => {
  const { entryId, update } = args;
  const { firebaseDatabase: database, loaders } = context;

  const entry = await loaders.entries.load(entryId);
  const entryUpdate: Omit<DBEntry, "categories"> = {
    name: update.name,
    description: update.description,
    logoUrl: update.logoUrl,
  };

  await database
    .collection("entries")
    .doc(entryId)
    .update(entryUpdate);

  loaders.entries.clear(entryId);
  loaders.entries.prime(entryId, {
    ...entry,
    ...entryUpdate,
  });

  const entries = await entriesByIds(parent, { ids: [entryId] }, context, info);
  return entries[0];
};

export { r as updateEntry };
