import { Unsubscribe } from "redux";
import { fromEventPattern, merge, of } from "rxjs";
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
  tap,
} from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { AppStore, StoreState } from "../store";
import { createFetchReducer, FetchState } from "./createFetchReducer";

/**
 * Initiates a resource request for the provided FetchReducer. This is intended
 * to be used in the `getInitialProps` static method of page components to
 * perform initial data requests.
 *
 * @param store Redux store.
 *
 * @param endpoint The api endpoint. Ex: `/landing`.
 *
 * @param selector
 * Selector to map the store state to the location of the FetchReducer's state.
 *
 * @param fetchActions The FetchReducer's actions object.
 */
export function fetchDataForFetchReducer<Payload>(
  store: AppStore,
  endpoint: string,
  selector: (state: StoreState) => FetchState<Payload>,
  fetchActions: ReturnType<typeof createFetchReducer>["actions"],
) {
  return createStoreStateObservable(store).pipe(
    // Retrieve the FetchReducer's state.
    map(selector),

    // Throw previous fetch error.
    switchMap(fetchState => {
      if (fetchState.error) throw new Error(fetchState.error);
      return of(fetchState);
    }),

    // Do nothing if currently fetching.
    filter(fetchState => !fetchState.fetching),

    // Return data from state if resource was already retrieved.
    // Initiate a request if it was not and return the retrieved resource.
    switchMap(fetchState => {
      if (fetchState.fetched) return of(fetchState.data!);

      store.dispatch(fetchActions.fetchBegin());

      // FIXME: Determine API route from config and environment.
      return request({ url: `http://localhost:3000/api/${endpoint}` }).pipe(
        map(ajaxResponse => ajaxResponse.response as Payload),
        catchError(error => {
          store.dispatch(fetchActions.fetchError(error.message));
          throw error;
        }),
        tap(payload => {
          store.dispatch(fetchActions.fetchSuccess(payload));
        }),
      );
    }),
    take(1),
  );
}

/**
 * Returns the current Redux store state and future mutations.
 *
 * @param store Redux store.
 */
function createStoreStateObservable(store: AppStore) {
  return merge(
    of(store.getState()),
    fromEventPattern<void>(
      handler => store.subscribe(handler),
      (_handler, unsubscribe: Unsubscribe) => unsubscribe(),
    ).pipe(map(() => store.getState())),
  ).pipe(distinctUntilChanged());
}
