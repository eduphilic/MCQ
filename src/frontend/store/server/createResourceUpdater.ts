import localforage from "localforage";
import { EMPTY, from, merge, of, Subject, zip } from "rxjs";
import {
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
  switchMapTo,
} from "rxjs/operators";
import {
  ResourceSetResourceDto,
  ResourceSetResourceResponseDto,
} from "../../../common";
import { apiClient, storeActions, StoreActionSetState } from "../common";
import { actionsSubject } from "./actionsObservable";
import { CachedResource } from "./CachedResource";
import { credential$ } from "./credentialObservable";

export function createResourceUpdater() {
  const subject = new Subject<StoreActionSetState>();

  // Pass the updated state to other browser tabs.
  const tabUpdates = subject.pipe(
    map(action =>
      storeActions.getStateSuccess(
        action.payload.resourceName,
        action.payload.data,
      ),
    ),
  );

  // Save the updated state to cache.
  const cacheUpdates = subject.pipe(
    debounceTime(100),
    switchMap(action =>
      zip(
        of(action),
        from(
          localforage.getItem<CachedResource | null>(
            action.payload.resourceName,
          ),
        ),
      ),
    ),
    map(([action, cachedResource]) => ({ action, cachedResource })),
    switchMap(({ action, cachedResource }) =>
      from(
        localforage.setItem<CachedResource>(action.payload.resourceName, {
          version: 0,
          data: action.payload.data,
          fetchedAt: Date.now(),
          lastUpdateTime: cachedResource ? cachedResource.lastUpdateTime : 0,
        }),
      ),
    ),
    switchMapTo(EMPTY),
  );

  // Send state updates to the backend. Respond to cache expired error by
  // emitting an event to retrieve new state.
  const backendUpdates = subject.pipe(
    filter(action => action.payload.backendResourceName !== null),
    debounceTime(1000),
    switchMap(action =>
      zip(
        of(action),
        from(
          localforage.getItem<CachedResource | null>(
            action.payload.resourceName,
          ),
        ),
        from(credential$),
      ),
    ),
    map(([action, cachedResource, credential]) => ({
      action,
      cachedResource,
      credential,
    })),
    switchMap(({ action, cachedResource, credential }) => {
      const lastUpdateTime = cachedResource ? cachedResource.lastUpdateTime : 0;
      const resourceSetResourceDto: ResourceSetResourceDto<unknown> = {
        version: 0,
        data: action.payload.data,
        lastUpdateTime,
      };

      return apiClient(
        {
          method: "POST",
          body: resourceSetResourceDto,
          endpoint: `/${action.payload.backendResourceName}`,
        },
        credential,
      ).pipe(
        map(({ response }) => response as ResourceSetResourceResponseDto),
        switchMap(response =>
          from(
            localforage.setItem<CachedResource>(action.payload.resourceName, {
              version: 0,
              data: action.payload.data,
              fetchedAt: Date.now(),
              lastUpdateTime: response.lastUpdateTime,
            }),
          ),
        ),
        switchMapTo(EMPTY),
        catchError(error => {
          /* tslint:disable-next-line:no-console */
          console.error(error);

          if (error.status === 409) {
            actionsSubject.next(
              storeActions.getState(
                action.payload.resourceName,
                action.payload.backendResourceName,
                true,
              ),
            );
          }

          return EMPTY;
        }),
      );
    }),
  );

  const observable = merge(tabUpdates, cacheUpdates, backendUpdates);

  return { subject, observable };
}
