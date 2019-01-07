import { QueryCategoryResolver } from "@join-uniform/graphql/server";
import { DBCategory } from "../models";

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
