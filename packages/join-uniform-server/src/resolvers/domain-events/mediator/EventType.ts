import { DBCategory, DBEntry } from "~/models";

export type EventType =
  | {
      type: "EntryCreated";
      entry: DBEntry;
      entryId: string;
    }
  | {
      type: "CategoryCreated";
      category: DBCategory;
      categoryId: string;
      entryId: string;
    }
  | {
      type: "CategoriesRemoved";
      categoryIds: string[];
    };
