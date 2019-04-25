/**
 * Due to a bug in how child processes are handles by the Firebase Emulator, we
 * use this to spawn the emulator to avoid `500` responses from too many
 * connections. Not sure why that is happening.
 *
 * Tear down of the emulator processes has to be done by calling the appropriate
 * functions in the `firebase-tools` library.
 *
 * @see https://github.com/firebase/firebase-tools/issues/1063
 */

import firebaseTools from "firebase-tools";
import { stop as stopFunctions } from "firebase-tools/lib/serve/functions";
import { stop as stopHosting } from "firebase-tools/lib/serve/hosting";
import path from "path";

process.on("SIGINT", () => kill(0));

firebaseTools
  .serve({
    port: 5000,
    cwd: path.resolve(__dirname, "../.."),
  })
  .then(() => kill(0))
  .catch(error => {
    /* tslint:disable-next-line:no-console */
    console.error(error);
    return kill(1);
  });

async function kill(code: number) {
  await Promise.all([stopFunctions(), stopHosting()]);
  process.exit(code);
}
