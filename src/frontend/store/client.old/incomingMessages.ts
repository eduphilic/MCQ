import {
  ConnectableObservable,
  EMPTY,
  fromEventPattern,
  merge,
  Observable,
  throwError,
} from "rxjs";
import { publish, switchMap } from "rxjs/operators";
import { incomingMessagesFromPort } from "../common.old";
import { sharedWorker } from "./sharedWorker";

const sharedWorkerErrors$ = fromEventPattern<ErrorEvent>(handler => {
  if (sharedWorker) sharedWorker.onerror = handler;
}).pipe(switchMap(errorEvent => throwError(errorEvent)));

/**
 * Multicasted observable which emits the messages received from the web worker.
 */
export const incomingMessages$: Observable<MessageEvent> = merge(
  sharedWorkerErrors$,
  sharedWorker ? incomingMessagesFromPort(sharedWorker.port) : EMPTY,
).pipe(publish());

(incomingMessages$ as ConnectableObservable<MessageEvent>).connect();
