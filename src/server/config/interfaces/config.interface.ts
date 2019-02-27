/**
 * Server and application configuration.
 */
export interface Config {
  recaptcha: {
    site_key: string;
    secret_key: string;
  };
  session: {
    key: string;
    expire_milliseconds: number;
  };
}
