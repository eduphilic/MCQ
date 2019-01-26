/**
 * The server configuration environment variables. These are exposed by the
 * Firebase cloud environment through environment variables. When running the
 * development emulator, these values are retrieved using the Firebase command
 * line tool.
 */
export type Config = {
  recaptcha: {
    site_key: string;
  };
};