import fs from "fs";
import path from "path";

export const schemaString = fs.readFileSync(
  path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "schema-server.graphql"
      : "../schema-server.graphql",
  ),
  "utf8",
);
