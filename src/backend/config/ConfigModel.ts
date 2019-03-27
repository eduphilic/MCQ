/**
 * Server and application configuration.
 */
export interface ConfigModel {
  recaptcha: {
    secret_key: string;
  };
  session: {
    key: string;
    expire_milliseconds: number;
  };
  serviceAccount: unknown;
  databaseURL: string;
}
