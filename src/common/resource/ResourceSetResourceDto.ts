import { ResourceEntity } from "./ResourceEntity";
import { ResourceLastUpdateTime } from "./ResourceLastUpdateTime";

/**
 * Request sent from the client to update or set the resource.
 */
export type ResourceSetResourceDto<Resource> = ResourceEntity<Resource> &
  ResourceLastUpdateTime;
