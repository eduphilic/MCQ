import { ResourceLoadError, StoreActionGetState } from "../common";
import { CachedResource } from "./CachedResource";

/**
 * The result of attempting to load a resource from either cache or network.
 * This type is propagated through the state load process.
 */
export type ResourceLoadResult = {
  action: StoreActionGetState;
  resource: CachedResource | null;
  expired: boolean;
  error: ResourceLoadError;
};
