import { DBIndexCard } from "~/models";
import { EventHandler } from "./mediator";

/**
 * Add new category entries to the IndexCard upon creation of a Category. This
 * ensures that the IndexCard stays consistent with the list of an entry's
 * categories.
 */
export const addCategoryToIndexCardOnCategoryCreation: EventHandler<
  "CategoryCreated"
> = async (event, context) => {
  const { firebaseRemoteConfigClient: config, loaders } = context;

  const values = config.getValues();
  const indexCard = values.indexCards.find(i => i.id === event.entryId);

  if (!indexCard) {
    throw new Error(
      `updateIndexCardOnCategoryListChange: Could not find the IndexCard for Entry ${
        event.entryId
      }`,
    );
  }

  const dbEntry = await loaders.entries.load(event.entryId);

  const categoryIds = dbEntry.categories;
  categoryIds.push(event.categoryId);

  indexCard.categories = categoryIds.map(
    (category): DBIndexCard["categories"][0] => {
      return (
        indexCard.categories.find(c => c.id === category) || {
          id: category,
          visible: false,
        }
      );
    },
  );

  return config.setValues(values);
};
