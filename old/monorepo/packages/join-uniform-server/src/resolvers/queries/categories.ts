import gql from "graphql-tag";
import { QueryCategoriesResolver } from "~/generated";
import { categoriesByIds } from "./categoriesByIds";

export const TypeDefCategories = gql`
  extend type Query {
    # Returns all Categories.
    categories: [Category!]!
  }
`;

const r: QueryCategoriesResolver = async (parent, _args, context, info) => {
  const { firebaseDatabase: database } = context;

  const categoryDocumentReferences = await database
    .collection("categories")
    .listDocuments();

  const categoryIds = categoryDocumentReferences.map(ref => ref.id);

  return categoriesByIds(parent, { ids: categoryIds }, context, info);
};

export { r as categories };
