import { createWebServer } from "./createWebServer";
import { getInitializedEnvironment } from "./getInitializedEnvironment";

const { functions } = getInitializedEnvironment();

const webServer = createWebServer();

export const main = functions.https.onRequest(webServer);
