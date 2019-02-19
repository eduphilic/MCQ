/**
 * Polyfills the `FIREBASE_CONFIG` environment variable. This variable is
 * normally present only in Firebase environments (live/emulator). To enable
 * running the server locally without using the Firebase emulator, it is
 * polyfilled here.
 */
function firebasePolyfill() {
  const firebaseCredentials =
    process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS;
  const firebaseConfigEnv = process.env.FIREBASE_CONFIG;
  const firebaseConfig: import("firebase-admin").AppOptions = firebaseConfigEnv
    ? JSON.parse(firebaseConfigEnv)
    : {
        databaseUrl: process.env.FIREBASE_DATABASE_URL,
        storageBucket: `${firebaseCredentials.project_id}.appspot.com`,
        projectId: firebaseCredentials.project_id,
      };

  process.env.FIREBASE_CONFIG = JSON.stringify(firebaseConfig);
  process.env.IS_FIREBASE_FUNCTION = JSON.stringify(!!firebaseConfigEnv);
}

firebasePolyfill();

export {};
