import { EventHandler } from "./mediator";

export const removeIndexCardsOnEntriesRemoval: EventHandler<
  "EntriesRemoved"
> = async (event, context) => {
  const { entryIds } = event;
  const { firebaseRemoteConfigClient: config } = context;

  const configValues = config.getValues();

  configValues.indexCards = configValues.indexCards.filter(
    indexCard => !entryIds.includes(indexCard.id),
  );

  return config.setValues(configValues);
};
