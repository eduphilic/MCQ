import gql from "graphql-tag";
import { Category, QueryEntryCategoriesResolver } from "~/generated";
import { DBCategory, DBEntry } from "~/models";

export const TypeDefEntryCategories = gql`
  extend type Query {
    entryCategories(entryId: ID!): [Category!]!
  }
`;

export const entryCategories: QueryEntryCategoriesResolver = async (
  _parent,
  args,
  context,
) => {
  const { firebaseDatabase: database } = context;

  const entrySnapshot = await database
    .collection("entries")
    .doc(args.entryId)
    .get();

  if (!entrySnapshot.exists) throw new Error("Specified Entry does not exist.");

  const categoryIds = entrySnapshot.get("categories") as DBEntry["categories"];

  if (categoryIds.length === 0) return [];

  const categoriesRefs = categoryIds.map(id =>
    database.collection("categories").doc(id),
  );
  const categoriesSnapshots = await database.getAll(
    categoriesRefs[0],
    ...categoriesRefs.slice(1),
  );

  return categoriesSnapshots.map(
    (categorySnapshot): Category => {
      const categoryPartial = categorySnapshot.data() as DBCategory;

      return {
        ...categoryPartial,
        id: categorySnapshot.id,
      };
    },
  );
};
