import { incomingActionsFromMessages } from "../common";
import { incomingMessages$ } from "./incomingMessages";

/**
 * Observable of actions being received from pages connected to the web worker.
 */
export const incomingActions$ = incomingActionsFromMessages(incomingMessages$);
