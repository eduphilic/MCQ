import { EMPTY, fromEventPattern, merge, Observable } from "rxjs";
import { mergeMap, publish, refCount, switchMap } from "rxjs/operators";

export function portMessages() {
  return function(source$: Observable<MessagePort>) {
    return source$.pipe(
      mergeMap(port => merge(fromPortMessages(port), fromPortErrors(port))),
      publish(),
      refCount(),
    );
  };
}

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
