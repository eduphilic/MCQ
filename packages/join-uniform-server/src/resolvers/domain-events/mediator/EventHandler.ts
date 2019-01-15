import { ApolloContext } from "~/ApolloContext";
import { EventType } from "./EventType";

export type EventHandler<T extends EventType["type"]> = (
  event: Extract<EventType, { type: T }>,
  context: ApolloContext,
  batch: FirebaseFirestore.WriteBatch,
) => Promise<void>;
