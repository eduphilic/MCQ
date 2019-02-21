import { useEffect, useRef, useState } from "react";
import { AsyncSubject, defer, EMPTY, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { useRecaptchaContext } from "./RecaptchaContext";

const RECAPTCHA_ELEMENT_ID = "recaptcha-js";
const RECAPTCHA_SCRIPT_SRC = "https://www.google.com/recaptcha/api.js?render=%KEY%"; // prettier-ignore

export function useRecaptcha() {
  const recaptchaSiteKey = useRecaptchaContext();
  const initialize = useRef(initializeRecaptcha(recaptchaSiteKey));
  const [recaptcha, setRecaptcha] = useState<Recaptcha | null>(null);

  useEffect(() => {
    if (!process.browser) return;

    const subscription = initialize.current.subscribe({
      next: () => setRecaptcha(grecaptcha),
    });
    return subscription.unsubscribe.bind(subscription);
  }, [recaptchaSiteKey]);

  return recaptcha;
}

function initializeRecaptcha(recaptchaSiteKey: string | null) {
  if (!recaptchaSiteKey) return EMPTY;
  return defer(() => of(document.getElementById(RECAPTCHA_ELEMENT_ID))).pipe(
    switchMap(elementOrNull => {
      if (elementOrNull !== null) of(null);

      const onLoadSubject = new AsyncSubject<void>();

      const scriptElement = document.createElement("script");
      scriptElement.id = RECAPTCHA_ELEMENT_ID;
      scriptElement.src = RECAPTCHA_SCRIPT_SRC.replace(
        "%KEY%",
        recaptchaSiteKey,
      );
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
