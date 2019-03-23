import {
  ConnectableObservable,
  fromEventPattern,
  merge,
  Observable,
  throwError,
} from "rxjs";
import { publish, switchMap } from "rxjs/operators";
import { incomingMessagesFromPort } from "../common";
import { sharedWorker } from "./sharedWorker";

const sharedWorkerErrors$ = fromEventPattern<ErrorEvent>(handler => {
  sharedWorker.onerror = handler;
}).pipe(switchMap(errorEvent => throwError(errorEvent)));

/**
 * Multicasted observable which emits the messages received from the web worker.
 */
export const incomingMessages$: Observable<MessageEvent> = merge(
  sharedWorkerErrors$,
  incomingMessagesFromPort(sharedWorker.port),
).pipe(publish());

(incomingMessages$ as ConnectableObservable<MessageEvent>).connect();
