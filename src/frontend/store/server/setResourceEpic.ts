import localforage from "localforage";
import { BehaviorSubject, from, Observable, of, zip } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  debounce,
  filter,
  map,
  mapTo,
  switchMap,
  tap,
} from "rxjs/operators";
import {
  ResourceSetResourceDto,
  ResourceSetResourceResponseDto,
} from "../../../common";
import {
  StoreAction,
  storeActions,
  StoreActionSetState,
  StoreActionType,
} from "../common";
import { CachedResource } from "./CachedResource";
import { credential$ } from "./credentialObservable";
import { filterAction } from "./filterAction";
import { resourceBaseUrl$ } from "./resourceBaseUrlObservable";

const submitting = new BehaviorSubject(false);

/**
 * Epic to react to local updates to user state. When a state update occurs it
 * submits the updated state to the backend.
 *
 * If a request is already in-flight, it discards all update events until the
 * update request finishes. It will then submit the most recent update.
 */
export function setResourceEpic(actions$: Observable<StoreAction>) {
  return actions$.pipe(
    // Respond only to state update actions.
    filterAction(StoreActionType.SetState),
    // Discard update actions while an update is already in flight. Send along
    // the most recent action once the current request completes.
    debounce(() => submitting.pipe(filter(isSubmitting => !isSubmitting))),
    tap(() => submitting.next(true)),
    // Submit the state update to the backend.
    switchMap(action => submitStateUpdate(action)),
    tap(() => submitting.next(false)),
  );
}

function submitStateUpdate(action: StoreActionSetState) {
  return from(
    localforage.getItem<CachedResource | null>(action.payload.resourceName),
  ).pipe(
    switchMap(cachedResource => {
      const resourceSetResourceDto: ResourceSetResourceDto<unknown> = {
        version: 0,
        lastUpdateTime: cachedResource ? cachedResource.lastUpdateTime : 0,
        data: action.payload.data,
      };

      if (!action.payload.backendResourceName) {
        return of({
          action,
          lastUpdateTime: resourceSetResourceDto.lastUpdateTime,
        });
      }

      return zip(resourceBaseUrl$, credential$).pipe(
        switchMap(([resourceBaseUrl, credential]) =>
          ajax
            .post(
              `${resourceBaseUrl}${action.payload.backendResourceName}`,
              resourceSetResourceDto,
              {
                Authorization: credential ? `Bearer ${credential}` : undefined,
                "Content-Type": "application/json",
              },
            )
            .pipe(
              map(response => {
                const lastUpdateTime = (response.response as ResourceSetResourceResponseDto)
                  .lastUpdateTime;
                return { action, lastUpdateTime };
              }),
              catchError(error => {
                // TODO: Handle authentication expiration.
                /* tslint:disable-next-line:no-console */
                console.error(error);

                return of({
                  action,
                  lastUpdateTime: resourceSetResourceDto.lastUpdateTime,
                });
              }),
            ),
        ),
      );
    }),
    switchMap(result => {
      const cachedResource: CachedResource = {
        data: result.action.payload.data,
        fetchedAt: Date.now(),
        lastUpdateTime: result.lastUpdateTime,
        version: 0,
      };

      return from(
        localforage.setItem<CachedResource>(
          result.action.payload.resourceName,
          cachedResource,
        ),
      ).pipe(mapTo(result.action));
    }),
    map(result =>
      storeActions.getStateSuccess(
        result.payload.resourceName,
        result.payload.data,
      ),
    ),
  );
}
