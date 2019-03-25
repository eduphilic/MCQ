import localforage from "localforage";
import { from, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, mapTo, switchMap } from "rxjs/operators";
import { ResourceLoadResult } from "./ResourceLoadResult";

/**
 * Updates the `ResourceLoadResult` object using the fetched resource from the
 * backend if the cache is expired.
 */
export const loadFromBackend = () => (source: Observable<ResourceLoadResult>) =>
  source.pipe(
    switchMap(resourceLoadResult => {
      // If resource is in cache and not expired, use it.
      if (resourceLoadResult.resourceState && !resourceLoadResult.isExpired) {
        return of(resourceLoadResult);
      }

      // Retrieve resource from backend.
      return ajax
        .getJSON(resourceLoadResult.action.payload.url, {
          Authorization: resourceLoadResult.action.payload.credential
            ? resourceLoadResult.action.payload.credential
            : undefined,
        })
        .pipe(
          // Add retrieved resource to resource load result.
          map(
            (response): ResourceLoadResult => ({
              ...resourceLoadResult,
              isExpired: false,
              resourceState: {
                fetchedAt: Date.now(),
                value: response,
              },
            }),
          ),
          // Store retrieved resource to cache.
          switchMap(updatedResourceLoadResult =>
            from(
              localforage.setItem(
                updatedResourceLoadResult.action.payload.key,
                updatedResourceLoadResult.resourceState,
              ),
            ).pipe(mapTo(updatedResourceLoadResult)),
          ),
          // If retrieval fails, return the existing load result so that cached
          // result or the error message can be used.
          catchError(error =>
            of({
              ...resourceLoadResult,
              fetchError: error.message,
            }),
          ),
        );
    }),
  );
