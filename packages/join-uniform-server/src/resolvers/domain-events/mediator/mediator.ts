import { ApolloContext } from "~/ApolloContext";
import { EventHandler } from "./EventHandler";
import { EventType } from "./EventType";

import { createIndexCardWhenEntryCreated } from "../createIndexCardWhenEntryCreated";
import { updateIndexCardOnCategoryListChange } from "../updateIndexCardOnCategoryListChange";

const subscribedHandlers: Record<EventType["type"], EventHandler<any>[]> = {
  EntryCreated: [createIndexCardWhenEntryCreated],
  CategoryCreated: [updateIndexCardOnCategoryListChange],
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
