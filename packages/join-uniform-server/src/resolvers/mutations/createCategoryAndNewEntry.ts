import gql from "graphql-tag";
import { Entry, MutationCreateCategoryAndNewEntryResolver } from "~/generated";
import { DBCategory, DBEntry } from "~/models";

export const TypeDefCreateCategoryAndNewEntry = gql`
  extend type Mutation {
    createCategoryAndNewEntry(
      request: CreateCategoryAndNewEntryRequest!
    ): Entry!
  }
`;

export const createCategoryAndNewEntry: MutationCreateCategoryAndNewEntryResolver = async (
  _parent,
  args,
  context,
) => {
  const { request } = args;

  const { firebaseDatabase: database } = context;
  const entriesRef = database.collection("entries");
  const categoriesRef = database.collection("categories");

  const newCategory: DBCategory = {
    activated: false,
    education: request.categoryEducation,
    name: request.categoryName,
    pricePerPaperRs: request.pricePerPaper,
  };

  const batch = database.batch();

  const newCategoryRef = categoriesRef.doc();
  batch.create(newCategoryRef, newCategory);

  const newEntry: DBEntry = {
    categories: [newCategoryRef.id],
    description: request.entryExplanation,
    logoUrl: request.entryLogoUrl,
    name: request.entryName,
  };
  const newEntryRef = entriesRef.doc();
  batch.create(newEntryRef, newEntry);

  await batch.commit();

  const mutationResult: Entry = {
    ...newEntry,
    id: newEntryRef.id,
    categories: [
      {
        ...newCategory,
        id: newCategoryRef.id,
      },
    ],
  };

  return mutationResult;
};
