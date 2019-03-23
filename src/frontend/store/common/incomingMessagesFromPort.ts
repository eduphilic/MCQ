import { EMPTY, fromEventPattern, merge } from "rxjs";
import { switchMap } from "rxjs/operators";

/**
 * Returns an observable which emits the received messages from the specified
 * web worker port.
 *
 * @param port Port to subscribe to.
 */
export function incomingMessagesFromPort(port: MessagePort) {
  const messages$ = fromEventPattern<MessageEvent>(handler => {
    port.onmessage = handler;
  });

  const errors$ = fromEventPattern<ErrorEvent>(handler => {
    port.onmessageerror = handler;
  }).pipe(
    switchMap(errorEvent => {
      // tslint:disable-next-line:no-console
      console.error(errorEvent);
      return EMPTY;
    }),
  );

  return merge(messages$, errors$);
}
