import gql from "graphql-tag";
import {
  IndexCard,
  IndexCardCategory,
  MutationUpdateIndexCardsResolver,
} from "~/generated";
import { DBIndexCard } from "~/models";
import { indexCardsByEntryIds } from "../queries/indexCardsByEntryIds";

export const TypeDefUpdateIndexCards = gql`
  extend type Mutation {
    updateIndexCards(request: [UpdateIndexCardsRequest!]!): [IndexCard!]!
  }
`;

type DBIndexCardCategory = DBIndexCard["categories"][0];

const r: MutationUpdateIndexCardsResolver = async (
  parent,
  args,
  context,
  info,
) => {
  const { request: indexCardUpdates } = args;
  const { loaders, firebaseRemoteConfigClient: config } = context;

  // Prime loaders with entities that will be needed below and error early.
  await loaders.entries.loadMany(indexCardUpdates.map(entry => entry.id));
  await loaders.categories.loadMany(
    indexCardUpdates
      .flatMap(entry => entry.categories)
      .map(category => category.id),
  );

  const configValues = config.getValues();

  await Promise.all(
    indexCardUpdates.map(
      async (indexCardUpdate): Promise<IndexCard> => {
        configValues.indexCards = configValues.indexCards.filter(
          indexCard => indexCard.id !== indexCardUpdate.id,
        );

        const newIndexCard: DBIndexCard = {
          ...indexCardUpdate,
        };

        configValues.indexCards.push(newIndexCard);

        const entry = await loaders.entries.load(indexCardUpdate.id);

        return {
          ...newIndexCard,
          title: entry.name,
          entryLogoUrl: entry.logoUrl,
          categories: await Promise.all(
            newIndexCard.categories.map(getIndexCardCategory),
          ),
        };
      },
    ),
  );

  await config.setValues(configValues);

  return indexCardsByEntryIds(
    parent,
    { ids: indexCardUpdates.map(i => i.id) },
    context,
    info,
  );

  /**
   * Return the Index Card Category with the Category's name field populated.
   *
   * @param dbIndexCardCategory
   * One of the Index Card's category entries in the Firebase entity.
   */
  async function getIndexCardCategory(
    dbIndexCardCategory: DBIndexCardCategory,
  ): Promise<IndexCardCategory> {
    const dbCategory = await loaders.categories.load(dbIndexCardCategory.id);

    return {
      id: dbIndexCardCategory.id,
      title: dbCategory.name,
      visible: dbIndexCardCategory.visible,
    };
  }
};

export { r as updateIndexCards };
