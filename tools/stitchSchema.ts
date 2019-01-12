import fs from "fs";
import { printSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";

const fsPromises = fs.promises;
const schemaDirectoryPath = path.join(
  __dirname,
  "../packages/join-uniform-server/src/resolvers",
);
const stitchedSchemaOutputPath = path.resolve(
  __dirname,
  "../schema.generated.graphql",
);

async function main() {
  const schemaFilePaths = await getSchemaFilePaths(schemaDirectoryPath);
  const schemaFiles = await Promise.all(
    schemaFilePaths.map(schemaFilePath =>
      fsPromises.readFile(schemaFilePath, "utf8"),
    ),
  );

  const typeDefs = schemaFiles.join("\n");
  const schema = makeExecutableSchema({ typeDefs });

  const stitchedSchema = `# This is an automatically generated file.
# DO NOT MODIFY
# Use the command: "yarn graphql" to regenerate.

${printSchema(schema, { commentDescriptions: true })}`;

  await fsPromises.writeFile(stitchedSchemaOutputPath, stitchedSchema, "utf8");
}

async function getSchemaFilePaths(directoryPath: string) {
  const directoryNodeFilenames = await fsPromises.readdir(directoryPath);
  const schemaFilePaths: string[] = [];

  await Promise.all(
    directoryNodeFilenames.map(async nodeFilename => {
      const nodePath = path.join(directoryPath, nodeFilename);

      if (/\.graphql$/.test(nodePath)) {
        schemaFilePaths.push(nodePath);
        return;
      }

      const isDirectory = (await fsPromises.stat(nodePath)).isDirectory();
      if (isDirectory) {
        const additionalSchemaFilePaths = await getSchemaFilePaths(nodePath);
        schemaFilePaths.push(...additionalSchemaFilePaths);
      }
    }),
  );

  return schemaFilePaths;
}

// tslint:disable-next-line:no-floating-promises
main();
