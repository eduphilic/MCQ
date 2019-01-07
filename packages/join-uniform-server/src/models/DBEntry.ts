import { Entry } from "@join-uniform/graphql/server";

export type DBEntry = Omit<Entry, "id" | "categories"> & {
  categories: string[];
};
