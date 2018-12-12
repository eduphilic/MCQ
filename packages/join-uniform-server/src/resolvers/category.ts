import { Category, QueryCategoryResolver } from "@join-uniform/graphql/server";

export const category: QueryCategoryResolver = async (_parent, args, ctx) => {
  const { id } = args;
  const { firebaseDatabase } = ctx;

  const categoryDoc = await firebaseDatabase
    .collection("categories")
    .doc(id)
    .get();
  if (!categoryDoc.exists) return null;

  const partialCategory = categoryDoc.data() as Omit<Category, "id">;

  return {
    id,
    ...partialCategory,
  };
};
