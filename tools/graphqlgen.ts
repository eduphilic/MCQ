import { ChildProcess, exec, ExecException } from "child_process";
import fs from "fs";
import { mergeTypes } from "merge-graphql-schemas";
import path from "path";

const bin = path.resolve(
  __dirname,
  `../node_modules/.bin/graphqlgen${
    process.platform === "win32" ? ".cmd" : ""
  }`,
);

async function bootstrap() {
  try {
    await Promise.all([
      performGeneration("server"),
      performGeneration("client"),
    ]);
    // prettier-ignore
    const types = [
    fs.readFileSync(path.resolve(__dirname, "../schema-server.graphql"), "utf8"),
    fs.readFileSync(path.resolve(__dirname, "../schema-client.graphql"), "utf8"),
  ];
    const merged = mergeTypes(types);
    // prettier-ignore
    fs.writeFileSync(path.resolve(__dirname, "../schema-merged.graphql"), merged, "utf8");
  } catch (e) {
    /* tslint:disable-next-line:no-console */
    console.log("error:", e.message);
  }
}
// tslint:disable-next-line:no-floating-promises
bootstrap();

function performGeneration(store: "client" | "server") {
  return new Promise((resolve, reject) => {
    forwardChildProcessConsole(
      exec(
        bin,
        {
          cwd: path.resolve(__dirname, `../src/store-${store}`),
          env: process.env,
        },
        createPostProcessor(store, resolve, reject),
      ),
      store,
    );
  });
}

function createPostProcessor(
  store: "client" | "server",
  resolve: () => void,
  reject: (error: ExecException) => void,
) {
  return (error: ExecException | null) => {
    if (error) {
      reject(error);
      return;
    }
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
    resolve();
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

function forwardChildProcessConsole(
  childProcess: ChildProcess,
  store: "client" | "server",
) {
  const trimEndingNewline = (data: string) => data.replace(/\n$/, "");
  childProcess.stdout.on("data", data => {
    /* tslint:disable-next-line:no-console */
    console.log(`${store}: stdout: ${trimEndingNewline(data)}`);
  });
  childProcess.stderr.on("data", data => {
    /* tslint:disable-next-line:no-console */
    console.log(`${store}: stderr: ${data}`);
  });
  childProcess.on("close", code => {
    /* tslint:disable-next-line:no-console */
    console.log(`${store}: exit code: ${code}`);
  });
}
