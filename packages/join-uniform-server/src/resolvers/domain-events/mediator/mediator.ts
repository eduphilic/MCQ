import { ApolloContext } from "~/ApolloContext";
import { EventHandler } from "./EventHandler";
import { EventType } from "./EventType";

import { addCategoryToIndexCardOnCategoryCreation } from "../addCategoryToIndexCardOnCategoryCreation";
import { createIndexCardWhenEntryCreated } from "../createIndexCardWhenEntryCreated";
import { removeCategoriesFromEntriesOnCategoriesRemoval } from "../removeCategoriesFromEntriesOnCategoriesRemoval";
import { removeCategoriesFromIndexCardsOnCategoriesRemoval } from "../removeCategoriesFromIndexCardsOnCategoriesRemoval";

const subscribedHandlers: Record<EventType["type"], EventHandler<any>[]> = {
  EntryCreated: [createIndexCardWhenEntryCreated],
  CategoryCreated: [addCategoryToIndexCardOnCategoryCreation],
  CategoriesRemoved: [
    removeCategoriesFromEntriesOnCategoriesRemoval,
    removeCategoriesFromIndexCardsOnCategoriesRemoval,
  ],
};

export const mediator = {
  async dispatchEvents(
    events: EventType[],
    context: ApolloContext,
    batch: FirebaseFirestore.WriteBatch,
  ) {
    for (const event of events) {
      const handlers = subscribedHandlers[event.type];

      for (const h of handlers) {
        await h(event, context, batch);
      }
    }
  },
};
