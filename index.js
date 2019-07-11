// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

const functions = require("firebase-functions");
/** @type {typeof import("next").default} */
// @ts-ignore
const next = require("next");

const app = next({
	dev: false,
});

const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
	console.log("File: " + req.originalUrl);
	return app.prepare().then(() => handle(req, res));
});
