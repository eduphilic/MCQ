import { ResourceEntity } from "./ResourceEntity";

/**
 * Stored Firebase resource belonging to a particular user.
 */
export type ResourceEntityWithUserId<Resource> = ResourceEntity<Resource> & {
  userId: string;
};
