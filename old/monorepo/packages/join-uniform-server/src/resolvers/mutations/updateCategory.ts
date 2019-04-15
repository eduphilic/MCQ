import gql from "graphql-tag";
import { MutationUpdateCategoryResolver } from "~/generated";
import { DBCategory } from "~/models";
import { categoriesByIds } from "../queries/categoriesByIds";

export const TypeDefUpdateCategory = gql`
  extend type Mutation {
    updateCategory(categoryId: ID!, update: UpdateCategoryRequest!): Category!
  }
`;

const r: MutationUpdateCategoryResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { categoryId, update } = args;
  const { firebaseDatabase: database, loaders } = context;

  const category = await loaders.categories.load(categoryId);
  const categoryUpdate: Omit<DBCategory, "activated"> = {
    name: update.name,
    education: update.education,
    pricePerPaperRs: update.pricePerPaperRs,
  };

  await database
    .collection("categories")
    .doc(categoryId)
    .update(categoryUpdate);

  loaders.categories.clear(categoryId);
  loaders.categories.prime(categoryId, {
    ...category,
    ...categoryUpdate,
  });

  const categories = await categoriesByIds(parent, { ids: [categoryId] }, context, info); // prettier-ignore
  return categories[0];
};

export { r as updateCategory };
