/**
 * Last time a resource was updated. Meta data returned from Firebase, used to
 * determine if update requests from a client are stale.
 */
export type ResourceLastUpdateTime = {
  lastUpdateTime: number;
};
