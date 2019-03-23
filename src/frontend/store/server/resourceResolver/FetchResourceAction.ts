import { StorageAction, StorageActionType } from "../../common";

export type FetchResourceAction = Extract<
  StorageAction,
  {
    type: StorageActionType.FetchResource;
  }
>;
