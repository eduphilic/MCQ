namespace NodeJS {
  interface ProcessEnv {
    /**
     * Firebase database url.
     *
     * Injected by Webpack.
     */
    FIREBASE_DATABASE_URL: string;

    /**
     * Firebase admin service account credentials.
     *
     * Injected by Webpack.
     */
    FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS: {
      type: "service_account";
      project_id: string;
      private_key_id: string;
      client_email: string;
      client_id: string;
      auth_uri: string;
      token_uri: string;
      auth_provider_x509_cert_url: string;
      client_x509_cert_url: string;
    };

    // Injected when operating in Firebase cloud environment by Firebase.
    // Polyfilled when operating outside of Firebase.

    /**
     * Firebase project config. This is injected by the Firebase cloud
     * environment. It is not available when operating within the Firebase
     * emulator or node environment.
     *
     * The application entry point polyfills this value.
     *
     * This is serialed JSON of the following:
```
{
  databaseUrl: string;
  storageBucket: string;
  projectId: string;
}
```
     */
    FIREBASE_CONFIG: string;

    /**
     * A JSON serialized boolean indicating whether or not the application was
     * started within a Firebase environment. It is true if the application was
     * started through the Firebase emulator or from a live environment.
     *
     * Set by index.ts.
     */
    IS_FIREBASE_FUNCTION: string;
  }
}
