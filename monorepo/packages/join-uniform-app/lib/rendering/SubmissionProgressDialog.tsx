import { SubmissionProgressDialog as BaseSubmissionProgressDialog } from "@join-uniform/components";
import React, { ReactNode, useEffect, useReducer } from "react";

/**
 * Current count of inflight Apollo mutation operations.
 */
let mutationsInProgressCounter = 0;

/**
 * Memoized status value to prevent unnecessary re-renders.
 */
let lastMutationsInFlight = false;

/**
 * Observers of the mutations operation counter.
 */
let subscribers: ((mutationsInFlight: boolean) => void)[] = [];

/**
 * Increments the count of current inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a submission dialog
 * while mutations are in progress.
 */
export function mutationCounterIncrement() {
  mutationsInProgressCounter += 1;
  if (mutationsInProgressCounter > 0 === lastMutationsInFlight) return;
  lastMutationsInFlight = mutationsInProgressCounter > 0;
  subscribers.forEach(s => s(true));
}

/**
 * Decrements the count of current inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a submission dialog
 * while mutations are in progress.
 */
export function mutationCounterDecrement() {
  mutationsInProgressCounter -= 1;
  if (mutationsInProgressCounter > 0 === lastMutationsInFlight) return;
  lastMutationsInFlight = mutationsInProgressCounter > 0;
  subscribers.forEach(s => s(mutationsInProgressCounter > 0));
}

/**
 * Subscribes to the status of current Apollo mutations currently inflight.
 *
 * @param cb
 * Callback called when inflight Apollo mutations are in progress or when they
 * have all completed.
 */
function mutationCounterSubscribe(cb: (mutationsInFlight: boolean) => void) {
  subscribers.push(cb);
  return unsubscribe;

  function unsubscribe() {
    subscribers = subscribers.filter(s => s !== cb);
  }
}

if (process.env.NODE_ENV === "development") {
  mutationCounterSubscribe(mutationsInFlight => {
    /* tslint:disable-next-line:no-console */
    console.log("Mutations inflight:", mutationsInFlight);
    /* tslint:disable-next-line:no-console */
    console.log("Subscriber count:", subscribers.length);
  });
}

/**
 * Displays the LoadingSpinner component in a non-dismissible dialog while
 * Apollo mutation operations are currently in progress.
 */
export function SubmissionProgressDialog(props: { children?: ReactNode }) {
  const { children } = props;

  const [open, setOpen] = useReducer<boolean, boolean>((_state, action) => {
    return action;
  }, false);

  useEffect(() => {
    const dispose = mutationCounterSubscribe(handleMutationCounterChange);

    return () => {
      dispose();
    };

    function handleMutationCounterChange(mutationsInFlight: boolean) {
      setOpen(mutationsInFlight);
    }
  }, []);

  return (
    <>
      {children}

      {/* Disable hydration warnings here to prevent errors from differences
          between the server side rendered React tree and the client version.

          On the server we avoid rendering the dialog.
      */}
      <div style={{ display: "none" }} suppressHydrationWarning>
        {process.browser ? <BaseSubmissionProgressDialog open={open} /> : null}
      </div>
    </>
  );
}
