import gql from "graphql-tag";
import {
  IndexCard,
  IndexCardCategory,
  QueryIndexCardsByEntryIdsResolver,
} from "~/generated";
import { DBIndexCard, indexCardDefaults } from "~/models";

export const TypeDefIndexCardsByEntryIds = gql`
  extend type Query {
    # Return the Index Cards for the specified Entries.
    indexCardsByEntryIds(ids: [ID!]!): [IndexCard!]!
  }
`;

const r: QueryIndexCardsByEntryIdsResolver = async (_parent, args, context) => {
  const { ids } = args;
  const { firebaseRemoteConfigClient: configClient, loaders } = context;

  const dbIndexCards = configClient.getValues().indexCards;

  const indexCards: Promise<IndexCard>[] = ids.map(
    async (id): Promise<IndexCard> => {
      // Use existing index card entity or provide defaults.
      const dbIndexCard = dbIndexCards.find(i => i.id === id) || {
        ...indexCardDefaults,
        id,
        categories: [],
      };

      // Ensure the categories array matches the current list of categories on
      // the Entry entity.
      const dbEntry = await loaders.entries.load(id);
      dbIndexCard.categories = dbEntry.categories.map(
        (categoryId): DBIndexCard["categories"][0] =>
          dbIndexCard.categories.find(c => c.id === categoryId) || {
            id: categoryId,
            visible: false,
          },
      );

      const promisedCategories = dbIndexCard.categories.map(
        async (category): Promise<IndexCardCategory> => ({
          ...category,
          title: (await loaders.categories.load(category.id)).name,
        }),
      );

      return {
        ...dbIndexCard,
        title: `Indian ${dbEntry.name} Recruitment`,
        entryLogoUrl: dbEntry.logoUrl,
        categories: await Promise.all(promisedCategories),
      };
    },
  );

  return Promise.all(indexCards);
};

export { r as indexCardsByEntryIds };
