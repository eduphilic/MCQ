import gql from "graphql-tag";
import { MutationDeleteCategoriesResolver } from "~/generated";
import { categories } from "../queries/categories";

export const TypeDefDeleteCategories = gql`
  extend type Mutation {
    # Deletes Categories. It removes both the Category database entry and the
    # Category's id from the corresponding Entry objects in the database. It
    # returns the list of remaining Categories.
    deleteCategories(categoryIds: [ID!]!): [Category!]!
  }
`;

const r: MutationDeleteCategoriesResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { categoryIds } = args;
  const { firebaseDatabase: database, loaders, mediator } = context;

  const batch = database.batch();

  const categoriesCollectionReference = database.collection("categories");

  categoryIds.forEach(id => {
    batch.delete(categoriesCollectionReference.doc(id));
    loaders.categories.clear(id);
  });

  await mediator.dispatchEvents(
    [
      {
        type: "CategoriesRemoved",
        categoryIds,
      },
    ],
    context,
    batch,
  );

  await batch.commit();

  return categories(parent, {}, context, info);
};

export { r as deleteCategories };
