import { DBIndexCard, indexCardDefaults } from "~/models";
import { EventHandler } from "./mediator";

export const createIndexCardWhenEntryCreated: EventHandler<
  "EntryCreated"
> = async (event, context) => {
  const { firebaseRemoteConfigClient: config } = context;

  const values = config.getValues();

  const dbNewIndexCard: DBIndexCard = {
    ...indexCardDefaults,
    id: event.entryId,
    categories: [],
  };

  values.indexCards.push(dbNewIndexCard);

  return config.setValues(values);
};
