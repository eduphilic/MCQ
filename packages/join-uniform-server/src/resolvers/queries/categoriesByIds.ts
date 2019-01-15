import gql from "graphql-tag";
import { Category, QueryCategoriesByIdsResolver } from "~/generated";

export const TypeDefCategoriesByIds = gql`
  extend type Query {
    categoriesByIds(ids: [ID!]!): [Category!]!
  }
`;

const r: QueryCategoriesByIdsResolver = async (_parent, args, ctx) => {
  const { ids } = args;
  const { loaders } = ctx;

  const dbCategories = await loaders.categories.loadMany(ids);
  const categories = dbCategories.map(
    (category, index): Category => ({
      ...category,
      id: ids[index],
    }),
  );

  return categories;
};

export { r as categoriesByIds };
