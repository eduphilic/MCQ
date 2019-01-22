import gql from "graphql-tag";
import { Category, MutationCreateCategoryResolver } from "~/generated";
import { DBCategory } from "~/models";

export const TypeDefCreateCategory = gql`
  extend type Mutation {
    createCategory(request: CreateCategoryRequest!): Category!
  }
`;

const r: MutationCreateCategoryResolver = async (_parent, args, context) => {
  const { request } = args;
  const { firebaseDatabase: database, loaders, mediator } = context;

  const batch = database.batch();
  const dbCategoryDocumentReference = database.collection("categories").doc();
  const dbCategory: DBCategory = {
    name: request.name,
    education: request.education,
    pricePerPaperRs: request.pricePerPaperRs,
    activated: false,
  };

  batch.create(dbCategoryDocumentReference, dbCategory);
  await mediator.dispatchEvents(
    [
      {
        type: "CategoryCreated",
        category: dbCategory,
        categoryId: dbCategoryDocumentReference.id,
        entryId: request.entryId,
      },
    ],
    context,
    batch,
  );

  await batch.commit();
  loaders.categories.prime(dbCategoryDocumentReference.id, dbCategory);

  const category: Category = {
    ...dbCategory,
    id: dbCategoryDocumentReference.id,
  };

  return category;
};

export { r as createCategory };
