import { createWebServer } from "./createWebServer";
import { getInitializedFirebaseEnvironment } from "./getInitializedFirebaseEnvironment";

const { functions } = getInitializedFirebaseEnvironment();

const webServer = createWebServer();

export const main = functions.https.onRequest(webServer);
