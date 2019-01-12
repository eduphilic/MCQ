import { Category, MutationUpdateCategoryResolver } from "~/generated";
import { DBCategory } from "~/models";

const r: MutationUpdateCategoryResolver = async (_parent, args, context) => {
  const { categoryId, update } = args;
  const { firebaseDatabase: database } = context;

  const categoryRef = database.collection("categories").doc(categoryId);
  const categorySnapshot = await categoryRef.get();

  if (!categorySnapshot.exists) {
    throw new Error("Specified Category does not exist.");
  }

  const categoryUpdate: Omit<DBCategory, "activated"> = {
    name: update.name,
    education: update.education,
    pricePerPaperRs: update.pricePerPaperRs,
  };

  await categoryRef.update(categoryUpdate);

  const category: Category = {
    ...(categorySnapshot.data() as DBCategory),
    ...categoryUpdate,
    id: categorySnapshot.id,
  };

  return category;
};

export { r as updateCategory };
