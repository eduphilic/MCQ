import gql from "graphql-tag";
import { QueryCategoryResolver } from "~/generated";
import { DBCategory } from "~/models";

export const TypeDefCategory = gql`
  extend type Query {
    category(id: ID!): Category
  }
`;

export const category: QueryCategoryResolver = async (_parent, args, ctx) => {
  const { id } = args;
  const { firebaseDatabase } = ctx;

  const categoryDoc = await firebaseDatabase
    .collection("categories")
    .doc(id)
    .get();
  if (!categoryDoc.exists) return null;

  const partialCategory = categoryDoc.data() as DBCategory;

  return {
    id,
    ...partialCategory,
  };
};
