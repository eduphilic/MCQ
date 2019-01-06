import {
  Category,
  MutationUpdateCategoryResolver,
} from "@join-uniform/graphql/server";
import { DBCategory } from "../models";

const r: MutationUpdateCategoryResolver = async (_parent, args, context) => {
  const { categoryId, update } = args;
  const { firebaseDatabase: database } = context;

  const categoryRef = database.collection("categories").doc(categoryId);
  const categorySnapshot = await categoryRef.get();

  if (!categorySnapshot.exists) {
    throw new Error("Specified Category does not exist.");
  }

  const categoryUpdate: Omit<DBCategory, "id" | "activated"> = {
    name: update.name,
    education: update.education,
    pricePerPaperRs: update.pricePerPaperRs,
  };

  await categoryRef.update(categoryUpdate);

  const category: Category = {
    ...(categorySnapshot.data() as Omit<DBCategory, "id">),
    ...categoryUpdate,
    id: categorySnapshot.id,
  };

  return category;
};

export { r as updateCategory };
