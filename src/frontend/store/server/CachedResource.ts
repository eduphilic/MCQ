/**
 * Cached resource.
 */
export type CachedResource = {
  /**
   * The resource structure version. Used for handling structure migrations.
   */
  version: number;

  /**
   * The cached resource value.
   */
  data: unknown;

  /**
   * The last time the resource was registered as by mutated at the server end.
   * This is sent back to the server so the server can determine if a state
   * update is being performed against non-stale state.
   */
  lastUpdateTime: number;

  /**
   * The time/date the resource was last fetched. This is used to calculate
   * resource expiration.
   */
  fetchedAt: number;
};
