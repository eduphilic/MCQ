import { messages$ } from "./messagesObservable";

export function test() {
  messages$.subscribe({
    // tslint:disable-next-line:no-console no-unbound-method
    next: console.log,
    /* tslint:disable-next-line:no-console no-unbound-method */
    error: console.error,
    complete: () => {
      /* tslint:disable-next-line:no-console */
      console.log("Complete.");
    },
  });
}
