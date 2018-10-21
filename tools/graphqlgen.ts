import { exec } from "child_process";
import fs from "fs";
import path from "path";

exec(
  "yarn graphqlgen",
  {
    cwd: path.resolve(__dirname, ".."),
    env: process.env,
  },
  (error, stdout, _stderr) => {
    /* tslint:disable-next-line:no-console */
    console.log(stdout);

    if (error) return;
    if (process.platform !== "win32") return;

    const files = walkSync(path.resolve(__dirname, "../src/graphql/generated"));
    Array.from(files).forEach(file => {
      const originalContents = fs.readFileSync(file, "utf8");
      const revisedContents = originalContents.replace(/\\/g, "/");

      if (originalContents === revisedContents) return;
      fs.writeFileSync(file, revisedContents, "utf8");
    });
  },
);

function* walkSync(dir: string): IterableIterator<string> {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      yield* walkSync(pathToFile);
    } else {
      yield pathToFile;
    }
  }
}
