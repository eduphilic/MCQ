import gql from "graphql-tag";
import {
  IndexCard,
  IndexCardCategory,
  QueryIndexCardsByEntryIdsResolver,
} from "~/generated";
import { DBCategory, DBEntry } from "~/models";

export const TypeDefIndexCardsByEntryIds = gql`
  extend type Query {
    # Return the Index Cards for the specified Entries.
    indexCardsByEntryIds(ids: [ID!]!): [IndexCard!]!
  }
`;

const r: QueryIndexCardsByEntryIdsResolver = async (_parent, args, context) => {
  const { ids } = args;
  const { firebaseRemoteConfigClient: configClient, loaders } = context;

  const categoryIds: string[] = [];
  const entriesById = (await loaders.entries.loadMany(ids)).reduce(
    (accumulator, entry, index) => {
      accumulator[ids[index]] = entry;
      categoryIds.push(...entry.categories);
      return accumulator;
    },
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as Record<string, DBEntry>,
  );

  const categoriesById = (await loaders.categories.loadMany(
    categoryIds,
  )).reduce(
    (accumulator, category, index) => {
      accumulator[categoryIds[index]] = category;
      return accumulator;
    },
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as Record<string, DBCategory>,
  );

  const indexCards: IndexCard[] = configClient
    .getValues()
    .indexCards.filter(indexCard => ids.includes(indexCard.id))
    .map(
      (indexCard): IndexCard => ({
        ...indexCard,
        title: entriesById[indexCard.id].name,
        entryLogoUrl: entriesById[indexCard.id].logoUrl,
        categories: indexCard.categories.map(
          (category): IndexCardCategory => ({
            ...category,
            title: categoriesById[category.id].name,
          }),
        ),
      }),
    );

  return indexCards;
};

export { r as indexCardsByEntryIds };
