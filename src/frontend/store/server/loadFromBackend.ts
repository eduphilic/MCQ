import localforage from "localforage";
import { EMPTY, from, merge, Observable, of, zip } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, mapTo, mergeMap, switchMap } from "rxjs/operators";
import { ResourceGetResponseDto } from "../../../common";
import {
  resourceLoadError,
  ResourceLoadError,
  ResourceLoadErrorType,
} from "../common";
import { credential$ } from "./credentialObservable";
import { resourceBaseUrl$ } from "./resourceBaseUrlObservable";
import { ResourceLoadResult } from "./ResourceLoadResult";

/**
 * Updates the `ResourceLoadResult` object using the fetched resource from the
 * backend if the cache is expired.
 */
export const loadFromBackend = () => (source: Observable<ResourceLoadResult>) =>
  source.pipe(
    mergeMap(resourceLoadResult => {
      if (resourceLoadResult.action.payload.forceRefetch) {
        resourceLoadResult.expired = true;
      }

      // If resource is in cache and not expired, use it.
      if (resourceLoadResult.resource && !resourceLoadResult.expired) {
        return of(resourceLoadResult);
      }

      // If the resource does not sync with the backend, then return the current
      // result.
      if (!resourceLoadResult.action.payload.backendResourceName) {
        return of(resourceLoadResult);
      }

      // Retrieve resource from backend.
      return merge(
        // Send the cached result while request to backend is in flight to speed
        // up initial loading.
        resourceLoadResult.resource ? of(resourceLoadResult) : EMPTY,
        zip(resourceBaseUrl$, credential$).pipe(
          switchMap(([resourceBaseUrl, credential]) =>
            ajax
              .getJSON<ResourceGetResponseDto<unknown>>(
                `${resourceBaseUrl}${
                  resourceLoadResult.action.payload.backendResourceName
                }`,
                {
                  Authorization: credential
                    ? `Bearer ${credential}`
                    : undefined,
                },
              )
              .pipe(
                // Add retrieved resource to resource load result.
                map(
                  (response): ResourceLoadResult => ({
                    ...resourceLoadResult,
                    expired: false,
                    resource: {
                      version: response.version,
                      data: response.data,
                      lastUpdateTime: response.lastUpdateTime,
                      fetchedAt: Date.now(),
                    },
                  }),
                ),
                // Store retrieved resource to cache.
                mergeMap(updatedResourceLoadResult =>
                  from(
                    localforage.setItem(
                      updatedResourceLoadResult.action.payload.resourceName,
                      updatedResourceLoadResult.resource,
                    ),
                  ).pipe(mapTo(updatedResourceLoadResult)),
                ),
                // If retrieval fails, return the existing load result so that cached
                // result or the error message can be used.
                // TODO: Handle case where authentication fails (session expired).
                catchError(error => {
                  /* tslint:disable-next-line:no-console */
                  console.log({ error });

                  const resourceLoadResultWithError: ResourceLoadResult = {
                    ...resourceLoadResult,
                    error: getError(error),
                  };

                  // If there was a cached version, do nothing here because the
                  // cached version was sent ahead above. The cached version that
                  // was sent for performance reasons above will also act as the
                  // fallback during network down time.
                  // Send along authentication failures though so that the app can
                  // perform login flow.
                  if (
                    resourceLoadResult.resource &&
                    resourceLoadResultWithError.error.type !==
                      ResourceLoadErrorType.Unauthenticated
                  ) {
                    return EMPTY;
                  }

                  return of(resourceLoadResultWithError);
                }),
              ),
          ),
        ),
      );
    }),
  );

function getError(error: unknown): ResourceLoadError {
  if (
    typeof error !== "object" ||
    error === null ||
    typeof (error as any).status !== "number"
  ) {
    return resourceLoadError(
      ResourceLoadErrorType.Unknown,
      (error as any).toString(),
    );
  }

  const networkError = error as {
    message: string;
    status: number;
  };

  const message = networkError.message;
  let type: ResourceLoadErrorType;

  switch (networkError.status) {
    case 401:
      type = ResourceLoadErrorType.Unauthenticated;
      break;
    case 404:
      type = ResourceLoadErrorType.NotFound;
      break;
    default:
      type = ResourceLoadErrorType.Unknown;
  }

  return resourceLoadError(type, message);
}
