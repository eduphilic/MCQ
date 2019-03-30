import localforage from "localforage";
import { from, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, mapTo, mergeMap } from "rxjs/operators";
import { ResourceGetResponseDto } from "../../../common";
import {
  resourceLoadError,
  ResourceLoadError,
  ResourceLoadErrorType,
} from "../common";
import { ResourceLoadResult } from "./ResourceLoadResult";

const DEFAULT_BASE_RESOURCE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/dev"
    : "https://production";
// TODO: Wire up credential manager.
// const DEFAULT_CREDENTIAL: string | undefined = undefined;
const DEFAULT_CREDENTIAL: string | undefined =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdUbTV6S3ZPWHVmb3NBUXRqVjhjQzBSdEJNbDIiLCJpYXQiOjE1NTM3OTg3NjksImV4cCI6MTU2MTU3NDc2OX0.AtBeqfcma2rdGglkh_yXEWXzT-lW-iugsLWWBYLwUPE";

/**
 * Updates the `ResourceLoadResult` object using the fetched resource from the
 * backend if the cache is expired.
 */
export const loadFromBackend = () => (source: Observable<ResourceLoadResult>) =>
  source.pipe(
    // TODO: Emit cached result even while requesting updated version to improve
    // initial load app load time.
    mergeMap(resourceLoadResult => {
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
      return ajax
        .getJSON<ResourceGetResponseDto<unknown>>(
          `${DEFAULT_BASE_RESOURCE_URL}${
            resourceLoadResult.action.payload.backendResourceName
          }`,
          {
            Authorization: DEFAULT_CREDENTIAL
              ? `Bearer ${DEFAULT_CREDENTIAL}`
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
          // TODO: Ignore network error if there was a previous cached result.
          catchError(error => {
            /* tslint:disable-next-line:no-console */
            console.log({ error });
            const resourceLoadResultWithError: ResourceLoadResult = {
              ...resourceLoadResult,
              error: getError(error),
            };

            return of(resourceLoadResultWithError);
          }),
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
