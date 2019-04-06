import localforage from "localforage";
import { ConnectableObservable, from, merge, Observable } from "rxjs";
import { filter, map, publishBehavior } from "rxjs/operators";
import { SESSION_STATE_KEY, SessionState, StoreActionType } from "../common";
import { actions$ } from "./actionsObservable";
import { CachedResource } from "./CachedResource";
import { filterAction } from "./filterAction";

export const credential$ = merge(
  from(localforage.getItem<CachedResource | null>(SESSION_STATE_KEY)).pipe(
    map(resource => {
      if (resource) return (resource.data as SessionState).apiKey;
      return null;
    }),
  ),
  actions$.pipe(
    filterAction(StoreActionType.SetState),
    filter(action => action.payload.resourceName === SESSION_STATE_KEY),
    map(action => (action.payload.data as SessionState).apiKey),
  ),
).pipe(publishBehavior<string | null>(null));

(credential$ as ConnectableObservable<
  ObservableValue<typeof credential$>
>).connect();

type ObservableValue<T> = T extends Observable<infer U> ? U : never;
