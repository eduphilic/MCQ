import { useEffect, useMemo, useRef, useState } from "react";

type Firebase = NonNullable<typeof window.firebase>;

let firebaseModule: Firebase | null = null;

const initialization = new Promise<void>(resolve => {
  if (process.browser) {
    if (window.firebase) {
      firebaseModule = window.firebase;
      firebaseModule.initializeApp({});
      resolve();
      return;
    }

    const interval = window.setInterval(() => {
      if (window.firebase) {
        firebaseModule = window.firebase;
        firebaseModule.initializeApp({});
        window.clearInterval(interval);
        resolve();
      }
    }, 100);

    return;
  }

  resolve();
});

/**
 * Get the initialization status and instance of the Firebase client side SDK.
 * This hook is safe for use with service side rendering.
 */
export function useFirebase() {
  const mountedRef = useRef(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    mountedRef.current = true;
    if (process.browser && !isInitialized) {
      // tslint:disable-next-line:no-floating-promises
      initialization.then(() => {
        if (mountedRef.current) setIsInitialized(true);
      });
    }
  }, [isInitialized]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useMemo(
    () => ({ firebaseInitialized: isInitialized, firebase: firebaseModule }),
    [isInitialized],
  );
}
