import DataLoader from "dataloader";
import { DataLoadersContext } from "~/DataLoadersContext";
import { DBCategory, DBEntry } from "~/models";
import { createCategoriesLoader } from "./createCategoriesLoader";
import { createEntriesLoader } from "./createEntriesLoader";

export type DataLoaders = {
  entries: DataLoader<string, DBEntry>;
  categories: DataLoader<string, DBCategory>;
};

export function createLoaders(context: DataLoadersContext): DataLoaders {
  return {
    entries: createEntriesLoader(context),
    categories: createCategoriesLoader(context),
  };
}
