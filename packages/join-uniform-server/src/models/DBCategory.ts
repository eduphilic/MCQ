import { Category } from "@join-uniform/graphql/server";

export type DBCategory = Omit<Category, "id">;
