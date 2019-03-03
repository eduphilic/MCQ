/**
 * Server and application configuration.
 */
export interface Config {
  recaptcha: {
    secret_key: string;
  };
  session: {
    key: string;
    expire_milliseconds: number;
  };
}
