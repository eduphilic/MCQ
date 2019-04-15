import { gql } from "apollo-server-koa";
import fs from "fs";
import { DocumentNode } from "graphql";
import path from "path";

let typeDefs: DocumentNode | null = null;

/**
 * Creates the type definitions used by Apollo Server and the server side
 * rendered Apollo Client.
 *
 * It uses the merged "schema.graphql" produced by the production build or the
 * individual schema files in "/src/api/schema" in development.
 *
 * The generated typeDefs are cached.
 */
export function createApolloTypeDefs() {
  if (typeDefs) return typeDefs;

  let schemaString: string;

  if (process.env.NODE_ENV === "production") {
    schemaString = fs.readFileSync(
      path.resolve(__dirname, "schema.graphql"),
      "utf8",
    );
  } else {
    schemaString = fs
      .readdirSync(path.resolve(__dirname, "../src/api/schema"))
      .filter(filename => /\.graphql$/.test(filename))
      .map(filename =>
        fs.readFileSync(
          path.resolve(__dirname, "../src/api/schema", filename),
          "utf8",
        ),
      )
      .reduce((accumulator, fileContents) => {
        return accumulator + fileContents;
      }, "");
  }

  typeDefs = gql`
    ${schemaString}
  `;
  return typeDefs;
}
