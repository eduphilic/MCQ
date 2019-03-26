/**
 * Represents a stored resource in Firebase.
 */
export type ResourceEntity<Resource> = {
  version: number;
  data: Resource;
};
