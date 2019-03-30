import { merge } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { incomingMessagesFromPort } from "../common.old";
import { ports$ } from "./ports";

/**
 * Observable of messages coming in from pages connected to the web worker.
 */
export const incomingMessages$ = ports$.pipe(
  map(ports => ports.map(port => incomingMessagesFromPort(port))),
  switchMap(portMessageObservables => merge(...portMessageObservables)),
);
