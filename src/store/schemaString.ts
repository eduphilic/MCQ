import fs from "fs";
import path from "path";

export const schemaString = fs.readFileSync(
  path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "schema.graphql"
      : "../schema.graphql",
  ),
  "utf8",
);
