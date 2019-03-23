import { FetchResourceAction } from "./FetchResourceAction";
import { ResourceState } from "./ResourceState";

export type ResourceLoadResult = {
  action: FetchResourceAction;
  resourceState: ResourceState | null;
  isExpired: boolean;
  fetchError: string | null;
};
