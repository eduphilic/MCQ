import {
  Category,
  MutationUpdateCategoryResolver,
} from "@join-uniform/graphql/server";

export const updateCategory: MutationUpdateCategoryResolver = async (
  _parent,
  args,
  context,
) => {
  const { categoryId, update } = args;
  const { firebaseDatabase: database } = context;

  const categoryRef = database.collection("categories").doc(categoryId);
  const categorySnapshot = await categoryRef.get();

  if (!categorySnapshot.exists) {
    throw new Error("Specified Category does not exist.");
  }

  const categoryUpdate: Omit<Category, "id" | "activated"> = {
    name: update.name,
    education: update.education,
    pricePerPaperRs: update.pricePerPaperRs,
  };

  await categoryRef.update(categoryUpdate);

  return true;
};
