export function initializeStoreWebWorker() {
  /* tslint:disable-next-line:no-console */
  console.log("Placeholder");
}

import { fromEventPattern, merge, Subject } from "rxjs";
import { map, scan, switchMap } from "rxjs/operators";

type PortTrackingAction =
  | {
      type: "add";
      payload: { port: MessagePort };
    }
  | {
      type: "remove";
      payload: { port: MessagePort };
    };

const portsSubject = new Subject<PortTrackingAction>();

const ports$ = portsSubject.pipe(
  scan<PortTrackingAction, MessagePort[]>(
    (accumulator, action) =>
      action.type === "add"
        ? accumulator.concat(action.payload.port)
        : accumulator.filter(port => port !== action.payload.port),
    [],
  ),
);

const messages$ = ports$.pipe(
  switchMap(ports =>
    merge(
      ...ports.map(port =>
        fromEventPattern<MessageEvent>(handler => {
          port.onmessage = handler;
        }).pipe(map(messageEvent => ({ port, messageEvent }))),
      ),
    ),
  ),
);

export function initialize() {
  self.onconnect = e => {
    const port = e.ports[0];
    portsSubject.next({ type: "add", payload: { port } });
  };

  ports$.subscribe({
    next: ports => {
      // tslint:disable-next-line:prefer-template
      ports[0].postMessage("ports length: " + ports.length);
    },
  });

  messages$.subscribe({
    next: ({ port, messageEvent }) => {
      // tslint:disable-next-line:prefer-template
      port.postMessage("Received message: " + messageEvent.data);
    },
  });
}

declare var self: SharedWorker.SharedWorkerGlobalScope & WorkerGlobalScope;
