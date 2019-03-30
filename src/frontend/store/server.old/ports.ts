import { ConnectableObservable, fromEventPattern } from "rxjs";
import { map, publishBehavior, scan } from "rxjs/operators";

const incomingConnections$ = fromEventPattern<MessageEvent>(handler => {
  self.onconnect = handler;
}).pipe(map(messageEvent => messageEvent.ports[0]));

/**
 * Observable which emits the most recent list of pages connected to the web
 * worker. It will contain ports to pages which have been closed.
 */
export const ports$ = incomingConnections$.pipe(
  scan<MessagePort, MessagePort[]>(
    (accumulator, port) => accumulator.concat(port),
    [],
  ),
  publishBehavior<MessagePort[]>([]),
);

(ports$ as ConnectableObservable<MessagePort[]>).connect();

declare var self: SharedWorker.SharedWorkerGlobalScope & WorkerGlobalScope;
