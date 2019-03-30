import { EMPTY, fromEventPattern, merge } from "rxjs";
import { map, publish, refCount, switchMap } from "rxjs/operators";

const connections$ = fromEventPattern<MessageEvent>(
  handler => self.addEventListener("connect", handler),
  handler => removeEventListener("connect", handler),
);

const errors$ = fromEventPattern<ErrorEvent>(
  handler => self.addEventListener("error", handler),
  handler => self.removeEventListener("error", handler),
).pipe(
  switchMap(errorEvent => {
    /* tslint:disable-next-line:no-console */
    console.error(errorEvent.error);
    return EMPTY;
  }),
);

/**
 * Observable which emits the `MessagePort` of each incoming worker connection.
 */
export const ports$ = merge(connections$, errors$).pipe(
  map(messageEvent => messageEvent.ports[0]),
  publish(),
  refCount(),
);

declare var self: SharedWorker.SharedWorkerGlobalScope & WorkerGlobalScope;
