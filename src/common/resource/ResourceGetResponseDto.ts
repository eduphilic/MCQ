import { ResourceEntity } from "./ResourceEntity";
import { ResourceLastUpdateTime } from "./ResourceLastUpdateTime";

/**
 * Response sent to a client containing the requested resource if it exists.
 */
export type ResourceGetResponseDto<Resource> = ResourceEntity<Resource> &
  ResourceLastUpdateTime;
