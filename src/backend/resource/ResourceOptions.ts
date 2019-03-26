/**
 * Resource configuration.
 */
export type ResourceOptions = {
  /**
   * Whether the resource is stored per user account or if it is a single public
   * entity.
   */
  isUserResource: boolean;

  /**
   * Resource name, used for both the Firebase collection name and the api
   * route.
   */
  resourceName: string;
};
