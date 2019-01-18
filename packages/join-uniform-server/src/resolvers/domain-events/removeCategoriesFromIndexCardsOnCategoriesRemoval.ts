import { DBIndexCard } from "~/models";
import { EventHandler } from "./mediator";

export const removeCategoriesFromIndexCardsOnCategoriesRemoval: EventHandler<
  "CategoriesRemoved"
> = async (event, context) => {
  const { categoryIds } = event;
  const { firebaseRemoteConfigClient: config } = context;

  const configValues = config.getValues();

  configValues.indexCards = configValues.indexCards.map(
    (indexCard): DBIndexCard => ({
      ...indexCard,
      categories: indexCard.categories.filter(
        category => !categoryIds.includes(category.id),
      ),
    }),
  );

  return config.setValues(configValues);
};
