// Performs sanity checks on the environment and acts as the project script
// runner.

import spawn from "cross-spawn";
import fs from "fs";
import path from "path";
import { generateFirebaseFunctionsPackageJson } from "./generateFirebaseFunctionsPackageJson";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Make sure we're using a Node.js version compatible with Firebase.
if (!/^v?8\./.test(process.version)) {
  /* tslint:disable-next-line:no-console */
  console.log(
    `Firebase requires Node.js 8. Current version is: ${process.version}.`,
  );
  process.exit(1);
}

const usage = `
Join Uniform Tools
------------------

  start            - Start development servers.
  build            - Build for production.
  build:public     - Add dummy contents to Firebase Hosting directory.
  serve            - Start Firebase server emulator.
  serve:production - Start Firebase server emulator in production mode (NODE_ENV).
  clean            - Remove build assets.

`;

// tslint:disable-next-line:ban-types
const commands: Record<string, (string | Function)[]> = {
  start: ["wsrun clean", generateFirebaseFunctionsPackageJson, "wsrun start"],
  build: ["wsrun clean", generateFirebaseFunctionsPackageJson, "wsrun build"],
  "build:public": [generateFirebaseHostingDummyContents],
  serve: ["firebase serve --only functions,hosting"],
  "serve:production": ["cross-env NODE_ENV=production yarn serve"],
  clean: ["rimraf dist"],
};

if (
  process.argv.length !== 3 ||
  !Object.keys(commands).includes(process.argv[2])
) {
  /* tslint:disable-next-line:no-console */
  console.log(usage);
  process.exit(1);
}

const steps = commands[process.argv[2] as keyof typeof commands];

steps.forEach(step => {
  if (typeof step === "string") {
    const [app, ...args] = step.split(" ");

    const result = spawn.sync(app, args, {
      cwd: path.resolve(__dirname, ".."),
      env: process.env,
      stdio: "inherit",
    });

    if (result.signal) {
      if (result.signal === "SIGKILL") {
        // tslint:disable-next-line:no-console
        console.log(
          "The build failed because the process exited too early. " +
            "This probably means the system ran out of memory or someone called " +
            "`kill -9` on the process.",
        );
      } else if (result.signal === "SIGTERM") {
        // tslint:disable-next-line:no-console
        console.log(
          "The build failed because the process exited too early. " +
            "Someone might have called `kill` or `killall`, or the system could " +
            "be shutting down.",
        );
      }
      process.exit(1);
    }

    if (result.status !== 0) process.exit(result.status);
  }

  if (typeof step === "function") {
    step();
  }
});

/**
 * Add a dummy file to Firebase Hosting directory to prevent an error about it
 * being empty.
 */
function generateFirebaseHostingDummyContents() {
  const publicPath = path.resolve(__dirname, "../dist/public");
  mkDirByPathSync(publicPath);
  fs.writeFileSync(path.join(publicPath, "dummy.html"), "", "utf8");
}

// https://stackoverflow.com/questions/31645738/how-to-create-full-path-with-nodes-fs-mkdirsync
function mkDirByPathSync(
  targetDir: string,
  { isRelativeToScript = false } = {},
) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  const baseDir = isRelativeToScript ? __dirname : ".";

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === "EEXIST") {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === "ENOENT") {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ["EACCES", "EPERM", "EISDIR"].indexOf(err.code) > -1;
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
}
