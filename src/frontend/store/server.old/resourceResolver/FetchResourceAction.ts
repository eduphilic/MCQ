import { StorageAction, StorageActionType } from "../../common.old";

export type FetchResourceAction = Extract<
  StorageAction,
  {
    type: StorageActionType.FetchResource;
  }
>;
