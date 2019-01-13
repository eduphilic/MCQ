import {
  IndexCard,
  IndexCardCategory,
  MutationUpdateIndexCardsResolver,
} from "~/generated";
import { DBIndexCard } from "~/models";

const r: MutationUpdateIndexCardsResolver = async (_parent, args, context) => {
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

  const indexCards = await Promise.all(
    indexCardUpdates.map(
      async (indexCardUpdate): Promise<IndexCard> => {
        configValues.indexCards = configValues.indexCards.filter(
          indexCard => indexCard.id !== indexCardUpdate.id,
        );

        const newIndexCard: DBIndexCard = {
          ...indexCardUpdate,
        };

        configValues.indexCards.push(newIndexCard);

        /* tslint:disable-next-line:no-console */
        console.log({ newIndexCard });

        const entry = await loaders.entries.load(indexCardUpdate.id);

        return {
          ...newIndexCard,
          title: entry.name,
          entryLogoUrl: entry.logoUrl,
          categories: newIndexCard.categories.map(
            (category): IndexCardCategory => ({
              id: category.id,
              title: "",
              visible: category.visible,
            }),
          ),
        };
      },
    ),
  );

  return indexCards;
};

export { r as updateIndexCards };
