import { Entry } from "~/generated";

export type DBEntry = Omit<Entry, "id" | "categories"> & {
  categories: string[];
};
