import { asapScheduler, BehaviorSubject } from "rxjs";
import { scan, subscribeOn } from "rxjs/operators";
import { StoreAction } from "../common";
import { ports$ } from "./portsObservable";

const portsSubject = new BehaviorSubject<MessagePort[]>([]);
const portsSubject$ = portsSubject.asObservable();

ports$
  .pipe(
    scan<MessagePort, MessagePort[]>((accumulator, value) => {
      return accumulator.concat(value);
    }, []),
  )
  .subscribe(portsSubject);

export async function dispatch(action: StoreAction) {
  /* tslint:disable-next-line:no-console */
  console.log("Outgoing action:", action);

  return new Promise<void>(resolve => {
    const subscription = portsSubject$
      .pipe(subscribeOn(asapScheduler))
      .subscribe({
        next: ports => {
          subscription.unsubscribe();
          ports.forEach(port => {
            port.postMessage(action);
          });
          resolve();
        },
      });
  });
}
