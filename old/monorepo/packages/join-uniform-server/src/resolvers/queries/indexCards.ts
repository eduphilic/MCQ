import gql from "graphql-tag";
import { QueryIndexCardsResolver } from "~/generated";
import { indexCardsByEntryIds } from "./indexCardsByEntryIds";

export const TypeDefIndexCards = gql`
  extend type Query {
    indexCards: [IndexCard!]!
  }
`;

const r: QueryIndexCardsResolver = async (parent, _args, context, info) => {
  const { firebaseDatabase: database } = context;

  const entryIds = (await database.collection("entries").listDocuments()).map(
    ref => ref.id,
  );

  return indexCardsByEntryIds(parent, { ids: entryIds }, context, info);
};

export { r as indexCards };
