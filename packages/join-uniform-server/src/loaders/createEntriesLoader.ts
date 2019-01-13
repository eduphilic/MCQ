import { DataLoadersContext } from "~/DataLoadersContext";
import { DBEntry } from "~/models";
import { createFirestoreLoader } from "./createFirestoreLoader";

export function createEntriesLoader(context: DataLoadersContext) {
  return createFirestoreLoader<DBEntry>(context, "Entry", "entries");
}
