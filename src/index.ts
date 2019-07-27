import express from "express";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./api";
// import { jwt_secret as jwtSecret } from "./api/credentials/jwt-secret.json";
import firebaseAdminServiceAccountProduction from "./api/credentials/firebase-admin-service-account.production.json";
import firebaseAdminServiceAccountStaging from "./api/credentials/firebase-admin-service-account.staging.json";
import firebaseAppConfigProduction from "./api/credentials/firebase-app-config.production.json";
import firebaseAppConfigStaging from "./api/credentials/firebase-app-config.staging.json";

/**
 * Whether or not the current script was executed directly using Node, or if it
 * was imported by the runtime environment of Firebase or its development
 * emulator.
 */
const environment = require.main === module ? "standalone" : "firebase";

/**
 * Promise which resolves to the bootstrapped `Express` app. This is used to
 * delay the processing of responses to potentially multiple simultaneous
 * requests until the app has initialized. This prevents multiple
 * Nest.js/Next.js instances from being erroneously initialized.
 */
let pendingExpressApp = initializeExpressApp();

/**
 * Initializes the `firebase-admin` package by detecting which Firebase project
 * is selected and providing the associated service account credentials.
 */
async function initializeFirebaseAdminSDK() {
	let projectId: string | null = null;
	let deploymentEnvironment: "production" | "staging";

	if (environment === "standalone") {
		// If this module is being executed directly, get the current Firebase
		// project id using "firebase-tools".
		const client = require("firebase-tools");
		const webConfig = await client.setup.web();
		projectId = webConfig.projectId;
	} else {
		// If this module was imported, we can assume it is executing within the
		// context of the Firebase emulator or deployed environment.
		// Retrieve the current Firebase project id by reading the
		// FIREBASE_CONFIG environment variable.
		// See: https://firebase.google.com/docs/functions/config-env#automatically_populated_environment_variables
		if (process.env.FIREBASE_CONFIG) {
			projectId = JSON.parse(process.env.FIREBASE_CONFIG).projectId;
		}
	}

	if (projectId === "joinuniformindia") {
		deploymentEnvironment = "production";
	} else if (projectId === "joinuniformindia-test") {
		deploymentEnvironment = "staging";
	} else {
		throw new Error(
			`Unsupported Firebase project is selected: ${projectId}`,
		);
	}

	console.log(
		`Deployment environment: ${deploymentEnvironment}, project-id: ${projectId}`,
	);

	// This is imported here instead of at the top of the module because
	// firebase-admin will emit a warning message about it not having been
	// configured. It does a check to verify it was initialized immediately
	// after import.
	const admin: typeof import("firebase-admin") = require("firebase-admin");

	const clientAppConfig =
		deploymentEnvironment === "staging"
			? firebaseAppConfigStaging
			: firebaseAppConfigProduction;

	// The type definitions for `firebase-admin` don't seem to be defined
	// properly, and as such, will not accept the shape of the credential JSON.
	// Casting to "any" here works fine.
	const credential = admin.credential.cert((deploymentEnvironment ===
	"staging"
		? firebaseAdminServiceAccountStaging
		: firebaseAdminServiceAccountProduction) as any);

	admin.initializeApp({
		databaseURL: clientAppConfig.databaseURL,
		storageBucket: clientAppConfig.storageBucket,
		projectId: clientAppConfig.projectId,
		credential,
	});

	return {
		clientAppConfig,
		type: deploymentEnvironment,
	};
}

/**
 * Create `Express` app instance with attached `Nest.js` app.
 */
async function initializeExpressApp() {
	const clientAppConfig = await initializeFirebaseAdminSDK();
	console.log({ clientAppConfig });
	const expressApp = express();
	const nestApp = await NestFactory.create(
		AppModule,
		new ExpressAdapter(expressApp),
	);
	await nestApp.init();
	return expressApp;
}

/**
 * Returns a Firebase `HttpsFunction` when operating within the Firebase cloud
 * environment or Firebase development emulator. Returns `null` if the module
 * was executed directly, i.e., directly using Node.
 */
function createFirebaseCloudFunction() {
	if (environment === "standalone") return null;
	const functions: typeof import("firebase-functions") = require("firebase-functions");
	return functions.https.onRequest(async (req, res) => {
		const expressApp = await pendingExpressApp;
		return expressApp(req, res);
	});
}

export const app = createFirebaseCloudFunction();

async function main() {
	const expressApp = await pendingExpressApp;
	expressApp.listen(3000, err => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
}

if (environment === "standalone") main();
