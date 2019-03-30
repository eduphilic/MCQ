import { EMPTY, fromEventPattern, merge, of, throwError } from "rxjs";
import { publish, refCount, switchMap } from "rxjs/operators";
import { sharedWorker } from "./sharedWorker";

/**
 * Observable emitting the shared worker's port.
 */
export const ports$ = of(sharedWorker).pipe(
  switchMap(sharedWorkerOrNull =>
    sharedWorkerOrNull
      ? merge(
          of(sharedWorkerOrNull.port),
          fromEventPattern<ErrorEvent>(handler => {
            sharedWorkerOrNull.onerror = handler;
          }).pipe(
            switchMap(error => {
              /* tslint:disable-next-line:no-console */
              console.error({ error });

              return throwError(error);
            }),
          ),
        )
      : EMPTY,
  ),
  publish(),
  refCount(),
);
