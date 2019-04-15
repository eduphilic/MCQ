import { Category } from "~/generated";

export type DBCategory = Omit<Category, "id">;
