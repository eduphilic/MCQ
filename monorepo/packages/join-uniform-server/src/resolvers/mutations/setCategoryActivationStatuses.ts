import gql from "graphql-tag";
import { MutationSetCategoryActivationStatusesResolver } from "~/generated";
import { DBCategory } from "~/models";
import { categoriesByIds } from "../queries/categoriesByIds";

export const TypeDefSetCategoryActivationStatuses = gql`
  extend type Mutation {
    # Sets the activation status for the specified categories. The number of ids
    # needs to match the number of booleans.
    # Returns the updated Categories.
    setCategoryActivationStatuses(
      categoryIds: [ID!]!
      activatedStatuses: [Boolean!]!
    ): [Category!]!
  }
`;

const r: MutationSetCategoryActivationStatusesResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { categoryIds, activatedStatuses } = args;
  const { firebaseDatabase: database, loaders } = context;

  if (categoryIds.length === 0) return [];
  if (categoryIds.length !== activatedStatuses.length) {
    throw new Error(
      "Expected the same number of Category ids and activation statuses.",
    );
  }

  const categories = await loaders.categories.loadMany(categoryIds);
  const batch = database.batch();

  categories.forEach((category, index) => {
    const categoryId = categoryIds[index];
    const categoryUpdate: Pick<DBCategory, "activated"> = {
      activated: activatedStatuses[index],
    };

    batch.update(
      database.collection("categories").doc(categoryId),
      categoryUpdate,
    );

    loaders.categories.clear(categoryId);
    loaders.categories.prime(categoryId, {
      ...category,
      ...categoryUpdate,
    });
  });

  await batch.commit();

  return categoriesByIds(parent, { ids: categoryIds }, context, info);
};

export { r as setCategoryActivationStatuses };
