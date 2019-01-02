import { Entry } from "@join-uniform/graphql/server";

export type DBEntry = Omit<Entry, "categories"> & {
  categories: string[];
};
