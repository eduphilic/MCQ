import { exec, ExecException } from "child_process";
import fs from "fs";
import path from "path";

const bin = path.resolve(
  __dirname,
  `../node_modules/.bin/graphqlgen${
    process.platform === "win32" ? ".cmd" : ""
  }`,
);

exec(
  bin,
  {
    cwd: path.resolve(__dirname, "../src/store-server"),
    env: process.env,
  },
  createPostProcessor("server"),
);

function createPostProcessor(store: "client" | "server") {
  return (error: ExecException | null, stdout: string, stderr: string) => {
    /* tslint:disable-next-line:no-console */
    console.log(stdout);
    /* tslint:disable-next-line:no-console */
    console.log(stderr);

    if (error) return;
    if (process.platform !== "win32") return;

    const files = walkSync(
      path.resolve(__dirname, `../src/store-${store}/generated`),
    );
    Array.from(files).forEach(file => {
      const originalContents = fs.readFileSync(file, "utf8");
      const revisedContents = originalContents.replace(/\\/g, "/");

      if (originalContents === revisedContents) return;
      fs.writeFileSync(file, revisedContents, "utf8");
    });
  };
}

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
