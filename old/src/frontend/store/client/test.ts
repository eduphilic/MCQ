import { sharedWorker } from "./sharedWorker";

export function test() {
  if (!sharedWorker) throw new Error("Shared worker was not initialized.");
  sharedWorker.onerror = errorEvent => {
    /* tslint:disable-next-line:no-console */
    console.error(errorEvent.error);
  };

  const port = sharedWorker.port;

  port.onmessage = messageEvent => {
    /* tslint:disable-next-line:no-console */
    console.log(messageEvent);
  };

  port.onmessageerror = errorEvent => {
    /* tslint:disable-next-line:no-console */
    console.error(errorEvent);
  };

  setTimeout(() => {
    port.postMessage("test");
  }, 1000);
}
