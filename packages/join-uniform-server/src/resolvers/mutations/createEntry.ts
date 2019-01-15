import gql from "graphql-tag";
import { Entry, MutationCreateEntryResolver } from "~/generated";
import { DBEntry } from "~/models";

export const TypeDefCreateEntry = gql`
  extend type Mutation {
    createEntry(request: CreateEntryRequest!): Entry!
  }
`;

const r: MutationCreateEntryResolver = async (_parent, args, context) => {
  const { request } = args;
  const { firebaseDatabase: database, loaders } = context;
  const batch = database.batch();

  const entriesCollectionReference = database.collection("entries");
  const dbNewEntryDocumentReference = entriesCollectionReference.doc();
  const dbNewEntry: DBEntry = {
    name: request.name,
    description: request.explanation,
    logoUrl: request.logoUrl,
    categories: [],
  };

  batch.create(dbNewEntryDocumentReference, dbNewEntry);

  await batch.commit();
  loaders.entries.prime(dbNewEntryDocumentReference.id, dbNewEntry);

  const newEntry: Entry = {
    ...dbNewEntry,
    id: dbNewEntryDocumentReference.id,
    categories: [],
  };

  return newEntry;
};

export { r as createEntry };
