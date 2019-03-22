import { incomingActionsFromMessages } from "./common";
import { incomingMessages$ } from "./incomingMessages";

/**
 * Observable of actions being received from the web worker.
 */
export const incomingActions$ = incomingActionsFromMessages(incomingMessages$);
