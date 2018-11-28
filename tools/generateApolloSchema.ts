import fs from "fs";
import path from "path";

/**
 * Combines GraphQL schema files into single file for inclusion with Firebase
 * Functions folder.
 */
export function generateApolloSchema() {
  const schemaFilenames = fs
    .readdirSync(path.resolve(__dirname, "../graphql/schema"))
    .filter(filename => /\.graphql$/.test(filename))
    .map(filename => path.resolve(__dirname, "../graphql/schema", filename));

  const schema = schemaFilenames.reduce((accumulator, filename) => {
    return accumulator.concat(fs.readFileSync(filename, "utf8"));
  }, "");

  fs.writeFileSync(
    path.resolve(__dirname, "../dist/functions/schema.graphql"),
    schema,
    "utf8",
  );
}
