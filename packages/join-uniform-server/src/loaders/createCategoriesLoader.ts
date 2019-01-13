import { DataLoadersContext } from "~/DataLoadersContext";
import { DBCategory } from "~/models";
import { createFirestoreLoader } from "./createFirestoreLoader";

export function createCategoriesLoader(context: DataLoadersContext) {
  return createFirestoreLoader<DBCategory>(context, "Category", "categories");
}
