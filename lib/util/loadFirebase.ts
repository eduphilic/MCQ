let cachedApp: firebase.app.App | null = null;

export async function loadFirebase() {
	if (cachedApp) return cachedApp;

	const firebaseModule = await import("firebase/app");
	await import("firebase/auth");

	const app = firebaseModule.initializeApp(process.env.FIREBASE_APP_CONFIG);
	if (process.browser) cachedApp = app;

	app.auth().setPersistence(firebaseModule.auth.Auth.Persistence.NONE);

	return app;
}
