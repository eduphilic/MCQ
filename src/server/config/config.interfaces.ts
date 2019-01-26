export type Config = {
  recaptcha: {
    site_key: string;
  };
};

export interface ConfigLoader<T extends object> {
  getConfig(): T | null;
}
