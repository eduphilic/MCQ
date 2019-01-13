import DataLoader from "dataloader";
import { DataLoadersContext } from "~/DataLoadersContext";
import { DBEntry } from "~/models";
import { createEntriesLoader } from "./createEntriesLoader";

export type DataLoaders = {
  entries: DataLoader<string, DBEntry>;
};

export function createLoaders(context: DataLoadersContext): DataLoaders {
  return {
    entries: createEntriesLoader(context),
  };
}
