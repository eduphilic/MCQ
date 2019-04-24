import { DeployableAppsEnum } from "../deployment";

export type HostingModuleConfig = {
  /**
   * Deployed application to serve.
   */
  app: DeployableAppsEnum;

  /**
   * Path where app is mounted.
   */
  mountPath: string;

  /**
   * Whether or not the app should be treated as a single page app. This means
   * that all routes without a file extension will be routed will be routed
   * to the root index.html file.
   *
   * @default false
   */
  spa?: boolean;
};
