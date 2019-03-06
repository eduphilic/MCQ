// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import { NextFunctionComponent } from "next";
import React from "react";
import { Unsubscribe } from "redux";
import { EMPTY, fromEventPattern, merge, of, throwError } from "rxjs";
import { distinctUntilChanged, filter, map, switchMap } from "rxjs/operators";
import { actions, LandingPage, LandingPageProps } from "../landing";
import { AppStore, getStoreFromPageContext, StoreState } from "../store";
import { createFetchReducer, FetchAction, FetchState } from "../util";

const LandingPageContainer: NextFunctionComponent<LandingPageProps> = props => {
  return <LandingPage {...props} />;
};

LandingPageContainer.getInitialProps = async context => {
  const store = getStoreFromPageContext(context);

  const data = startFetchOperation(
    store,
    state => state.landing.config,
    actions.config,
  );

  // data.subscribe({
  //   next: nextData => {
  //     nextData!.
  //   },
  // });

  return {} as any;
};

export default LandingPageContainer;

// 1. Check if data has already been fetch.
// 2. If data already fetched, pass along the data. -> END
// 3. Subscribe to store updates to monitor fetch progress.
// 4. Start fetch.
// 5. If fetch fails, throw error.
// 6. If fetch succeeds, pass along the data.

function observeStore(store: AppStore) {
  return merge(
    of(store.getState()),
    fromEventPattern<void>(
      handler => store.subscribe(handler),
      (_handler, unsubscribe: Unsubscribe) => unsubscribe(),
    ).pipe(map(() => store.getState())),
  ).pipe(distinctUntilChanged());
}

function startFetchOperation<Payload>(
  store: AppStore,
  selector: (state: StoreState) => FetchState<Payload>,
  actions: ReturnType<typeof createFetchReducer>["actions"],
) {
  return observeStore(store).pipe(
    map(selector),
    switchMap(fetchState => )
    filter(fetchState => !fetchState.fetched || fetchState.fetching),
    switchMap(fetchState => {
      if (fetchState.error) return throwError(fetchState.error);
      if (fetchState.fetched) return of(fetchState.data);



      return EMPTY;
    }),
  );
}
