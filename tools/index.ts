// Performs sanity checks on the environment and acts as the project script
// runner.

import spawn from "cross-spawn";
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
  serve            - Start Firebase server emulator.
  serve:production - Start Firebase server emulator in production mode (NODE_ENV).
  clean            - Remove build assets.

`;

// tslint:disable-next-line:ban-types
const commands: Record<string, (string | Function)[]> = {
  start: ["wsrun clean", generateFirebaseFunctionsPackageJson, "wsrun start"],
  build: ["wsrun clean", generateFirebaseFunctionsPackageJson, "wsrun build"],
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
