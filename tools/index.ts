// Performs sanity checks on the environment and acts as the project script
// runner.

import spawn from "cross-spawn";
import fs from "fs";
import path from "path";
import * as yup from "yup";
import { generateFirebaseFunctionsPackageJson } from "./generateFirebaseFunctionsPackageJson";
import { getFirebaseEnvironmentalVariables } from "./getFirebaseEnvironmentalVariables";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Retrieve Firebase environmental variables. They are not available to the
// emulator by default. Download them and create a file that the emulator will
// recognize.
getFirebaseEnvironmentalVariables();

// Make sure the Firebase Admin Service Account credentials are available.
ensureServiceAccountCredentialsAvailable();

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
  start: [
    "wsrun clean",
    generateFirebaseFunctionsPackageJson,
    'cross-env GRAPHQL_URI="http://localhost:5000/graphql" wsrun --exclude @join-uniform/components start',
  ],

  build: ["wsrun clean", generateFirebaseFunctionsPackageJson, "wsrun build"],

  "build:public": [generateFirebaseHostingDummyContents],

  serve: ["firebase serve --only functions,hosting"],

  "serve:production": [
    'cross-env NODE_ENV=production GRAPHQL_URI="http://localhost:5000/graphql" yarn serve',
  ],

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
      shell: true,
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

/*
 * Ensures that the Firebase Admin Service Account credentials are available.
 * The credentials are required to access the Firebase Remote Config API.
 */
function ensureServiceAccountCredentialsAvailable() {
  if (
    !fs.existsSync(
      path.resolve(__dirname, "../firebase-admin-service-account.json"),
    )
  ) {
    throw new Error(`
Firebase Admin Service Account credentials not found.

Ensure that the Firebase Admin Service Account credentials have been saved to a
file called "firebase-admin-service-account.json" in the root of the project
folder. The credentials can be exported from the Firebase dashboard.

These are required to access the Firebase Remote Config api.
`);
  }

  const schema = yup.object().shape({
    client_email: yup.string().required(),
    private_key: yup.string().required(),
    project_id: yup.string().required(),
  });

  const credentials = require("../firebase-admin-service-account.json");

  try {
    schema.validateSync(credentials);
  } catch (e) {
    throw new Error(`
The Firebase Admin Service Account credentials failed validation.

This can occur if the file is in the incorrect format.

Validation error: ${e.message}
`);
  }
}

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
