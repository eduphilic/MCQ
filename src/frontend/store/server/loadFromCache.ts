import localforage from "localforage";
import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import {
  resourceLoadError,
  ResourceLoadErrorType,
  StoreActionGetState,
} from "../common";
import { CachedResource } from "./CachedResource";
import { ResourceLoadResult } from "./ResourceLoadResult";

const DEFAULT_RESOURCE_EXPIRATION_TIME = 1000 * 10; // 10 seconds.

/**
 * Attempts to load the requested resource from cache.
 */
export function loadFromCache() {
  return function(source$: Observable<StoreActionGetState>) {
    return source$.pipe(
      mergeMap(action => {
        return from(
          localforage
            .getItem<CachedResource | null>(action.payload.resourceName)
            .then(
              (cachedResourceOrNull): ResourceLoadResult => ({
                action,
                expired: isExpired(action, cachedResourceOrNull),
                error:
                  !action.payload.backendResourceName && !cachedResourceOrNull
                    ? resourceLoadError(ResourceLoadErrorType.NotFound)
                    : resourceLoadError(ResourceLoadErrorType.None),
                resource: cachedResourceOrNull,
              }),
            )
            .catch(
              (error): ResourceLoadResult => ({
                action,
                expired: true,
                error: resourceLoadError(
                  ResourceLoadErrorType.Unknown,
                  error.message,
                ),
                resource: null,
              }),
            ),
        );
      }),
    );
  };
}

function isExpired(
  action: StoreActionGetState,
  cachedResourceOrNull: CachedResource | null,
) {
  if (!action.payload.backendResourceName && cachedResourceOrNull) return false;

  if (
    cachedResourceOrNull !== null &&
    cachedResourceOrNull.fetchedAt + DEFAULT_RESOURCE_EXPIRATION_TIME >
      Date.now()
  ) {
    return false;
  }

  return true;
}
