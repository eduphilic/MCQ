import gql from "graphql-tag";
import { QueryEntriesResolver } from "~/generated";
import { entriesByIds } from "./entriesByIds";

export const TypeDefEntries = gql`
  extend type Query {
    entries: [Entry!]!
  }
`;

const r: QueryEntriesResolver = async (parent, _args, context, info) => {
  const { firebaseDatabase: database } = context;

  const entriesDocumentReferences = await database
    .collection("entries")
    .listDocuments();
  const entryIds = entriesDocumentReferences.map(ref => ref.id);

  return entriesByIds(parent, { ids: entryIds }, context, info);
};

export { r as entries };
