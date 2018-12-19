import { MutationSetCategoryActivationStatusResolver } from "@join-uniform/graphql/server";

export const setCategoryActivationStatus: MutationSetCategoryActivationStatusResolver = async (
  _parent,
  args,
  context,
) => {
  const { categoryId, activated } = args;
  const { firebaseDatabase: database } = context;

  const categoryRef = database.collection("categories").doc(categoryId);
  const categorySnapshot = await categoryRef.get();
  if (!categorySnapshot.exists) {
    throw new Error("Specified Category does not exist.");
  }

  await categoryRef.update({
    activated,
  });

  return true;
};
