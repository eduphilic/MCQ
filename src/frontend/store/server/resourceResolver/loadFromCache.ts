import localforage from "localforage";
import { from, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { FetchResourceAction } from "./FetchResourceAction";
import { ResourceLoadResult } from "./ResourceLoadResult";
import { ResourceState } from "./ResourceState";

/**
 * Returns a cached resource if it is present.
 */
export const loadFromCache = () => (source: Observable<FetchResourceAction>) =>
  source.pipe(
    switchMap(action =>
      from(localforage.getItem<ResourceState | null>(action.payload.key)).pipe(
        map(
          (resourceStateOrNull): ResourceLoadResult => ({
            action,
            resourceState: resourceStateOrNull,
            isExpired: !(
              resourceStateOrNull !== null &&
              resourceStateOrNull.fetchedAt + action.payload.expirationTime >
                Date.now()
            ),
            fetchError: null,
          }),
        ),
      ),
    ),
  );
