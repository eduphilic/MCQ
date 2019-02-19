import { useEffect, useRef, useState } from "react";
import { AsyncSubject, defer, of } from "rxjs";
import { switchMap } from "rxjs/operators";

const RECAPTCHA_ELEMENT_ID = "recaptcha-js";
// TODO: Pull this from environment variable passed from server.
const RECAPTCHA_SCRIPT_SRC = "https://www.google.com/recaptcha/api.js?render=6LfE44wUAAAAAEcPLTPdUgi59UoFR5gR4kDON5A4"; // prettier-ignore

export function useRecaptcha() {
  const initialize = useRef(initializeRecaptcha());
  const [recaptcha, setRecaptcha] = useState<Recaptcha | null>(null);

  useEffect(() => {
    if (!process.browser) return;

    const subscription = initialize.current.subscribe({
      next: () => setRecaptcha(grecaptcha),
    });
    return subscription.unsubscribe.bind(subscription);
  }, []);

  return recaptcha;
}

function initializeRecaptcha() {
  return defer(() => of(document.getElementById(RECAPTCHA_ELEMENT_ID))).pipe(
    switchMap(elementOrNull => {
      if (elementOrNull !== null) of(null);

      const onLoadSubject = new AsyncSubject<void>();

      const scriptElement = document.createElement("script");
      scriptElement.id = RECAPTCHA_ELEMENT_ID;
      scriptElement.src = RECAPTCHA_SCRIPT_SRC;
      scriptElement.onload = () => {
        onLoadSubject.next();
        onLoadSubject.complete();
      };
      document.body.appendChild(scriptElement);

      return onLoadSubject.asObservable();
    }),
    switchMap(() => {
      const onLoadSubject = new AsyncSubject<void>();

      grecaptcha.ready(() => {
        onLoadSubject.next();
        onLoadSubject.complete();
      });

      return onLoadSubject.asObservable();
    }),
  );
}

declare global {
  var grecaptcha: Recaptcha;

  interface Recaptcha {
    ready: (cb: () => void) => void;
  }
}
