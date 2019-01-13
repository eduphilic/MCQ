import gql from "graphql-tag";
import {
  Category,
  MutationSetCategoryActivationStatusesResolver as Resolver,
} from "~/generated";
import { DBCategory } from "~/models";

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

const r: Resolver = async (_parent, args, context) => {
  const { categoryIds, activatedStatuses } = args;
  const { firebaseDatabase: database } = context;

  if (categoryIds.length !== activatedStatuses.length) {
    throw new Error(
      "Expected the same number of Category ids and activation statuses.",
    );
  }

  const categoryQueryDocumentSnapshots = (await database
    .collection("categories")
    .get()).docs.filter(d => categoryIds.includes(d.id));

  if (categoryQueryDocumentSnapshots.length === 0) return [];

  const batch = database.batch();

  const categories: Category[] = categoryQueryDocumentSnapshots.map(
    (c): Category => {
      const dbCategory = c.data() as DBCategory;

      return {
        ...dbCategory,
        id: c.id,
      };
    },
  );

  categoryIds.forEach((id, index) => {
    const categoryIndex = categories.findIndex(c => c.id === id);
    const activated = activatedStatuses[index];

    categories[categoryIndex].activated = activated;
    batch.update(database.collection("categories").doc(id), {
      activated,
    });
  });

  await batch.commit();

  return categories;
};

export { r as setCategoryActivationStatuses };
