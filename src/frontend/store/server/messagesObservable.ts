import { EMPTY, fromEventPattern, merge } from "rxjs";
import { mergeMap, publish, refCount, switchMap, tap } from "rxjs/operators";
import { ports$ } from "./portsObservable";

/**
 * Returns an `Observable` of `MessageEvent` which emits message events from all
 * connected browser tabs.
 */
export const messages$ = ports$.pipe(
  mergeMap(port =>
    merge(fromPortMessages(port), fromPortErrors(port)).pipe(
      tap(() => port.start()),
      // tslint:disable-next-line:no-console
      tap(() => console.log(port)),
    ),
  ),
  publish(),
  refCount(),
);

function fromPortMessages(port: MessagePort) {
  return fromEventPattern<MessageEvent>(handler => {
    port.onmessage = handler;
  });
}

function fromPortErrors(port: MessagePort) {
  return fromEventPattern<ErrorEvent>(handler => {
    port.onmessageerror = handler;
  }).pipe(
    switchMap(messageEvent => {
      /* tslint:disable-next-line:no-console */
      console.error(messageEvent.error);

      return EMPTY;
    }),
  );
}
