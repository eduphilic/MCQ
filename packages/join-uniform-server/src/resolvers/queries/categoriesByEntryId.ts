import gql from "graphql-tag";
import { QueryCategoriesByEntryIdResolver } from "~/generated";
import { categoriesByIds } from "./categoriesByIds";

export const TypeDefCategoriesByEntryId = gql`
  extend type Query {
    categoriesByEntryId(id: ID!): [Category!]!
  }
`;

const r: QueryCategoriesByEntryIdResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { id } = args;
  const { loaders } = context;

  const dbEntry = await loaders.entries.load(id);
  const categories = await categoriesByIds(
    parent,
    { ids: dbEntry.categories },
    context,
    info,
  );

  return categories;
};

export { r as categoriesByEntryId };
