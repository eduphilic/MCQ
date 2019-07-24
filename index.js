// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

/**
 * @typedef NextModule
 * @type {typeof import("next").default}
 */

/**
 * @type {NextModule}
 */
// Disable type check on the next line to use naked import (without ".default")
// postfix. This overcomes an issue with the Next.js type definitions.
// @ts-ignore
const next = require("next");
const nextConfig = require("./next.config");
const functions = require("firebase-functions");
const express = require("express");
const cookieSession = require("cookie-session");
const jsonwebtoken = require("jsonwebtoken");

const cookieMaxAgeMilliseconds = 60 * 60 * 24 * 14 * 1000; // 2 weeks.
const dev = process.env.NODE_ENV !== "production";
const expressApp = express();
const nextApp = next({ dev, conf: nextConfig });
const nextRequestHandler = nextApp.getRequestHandler();

expressApp.use(
	cookieSession({
		// Cookie name must be named "__session" because of how the Firebase
		// caching mechanism works.
		// Ref:
		// https://firebase.google.com/docs/hosting/manage-cache#using_cookies
		name: "__session",
		maxAge: cookieMaxAgeMilliseconds,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		signed: false,
	}),
);
expressApp.use(jwtSessionMiddleware);

expressApp.get("*", (req, res) => {
	return nextRequestHandler(req, res);
});

if (require.main === module) {
	const main = async () => {
		await nextApp.prepare();

		expressApp.listen(3000, err => {
			if (err) throw err;
			console.log("> Ready on http://localhost:3000");
		});
	};

	main().catch(err => {
		console.error(err);
		process.exit(1);
	});
} else {
	/**
	 * @type {Promise<void> | null}
	 */
	let preparation = null;

	exports.next = functions.https.onRequest((req, res) => {
		console.log(`File: ${req.originalUrl}`);

		if (!preparation) preparation = nextApp.prepare();
		return preparation.then(() => expressApp(req, res));
	});
}

/**
 * Session values which are persisted and verified using a JWT stored in a
 * cookie.
 *
 * @typedef JwtSession
 * @type {NonNullable<JwtSessionInterfaces.JwtSessionRequest["jwtSession"]>}
 */

const JwtSecret = "E7l6u!5fQsSi";

/**
 * Default session cookie value.
 *
 * @type {JwtSession}
 */
const jwtDefaultSession = { language: "en" };

/**
 * Makes a `jwtSession` key available on the web server's `Request` object. It
 * encodes its values in a signed JWT which is stored in the session cookie.
 *
 * @param {express.Request} req
 * @param {express.Response} _res
 * @param {express.NextFunction} next
 */
function jwtSessionMiddleware(req, _res, next) {
	const getSession = () => {
		if (!req.session) {
			throw new Error("Session middleware is not present.");
		}

		return req.session;
	};

	const readJwt = () => {
		const session = getSession();
		const jwt = session.jwt;
		/** @type {JwtSession} */ let jwtSession;

		try {
			const {
				iat,
				exp,
				...restJwtSession
			} = /** @type {JwtSession} */ (jsonwebtoken.verify(
				jwt || "",
				JwtSecret,
			));
			jwtSession = restJwtSession;
		} catch (err) {
			jwtSession = { ...jwtDefaultSession };
		}

		return jwtSession;
	};

	/**
	 * @param {JwtSession} jwtSession
	 */
	const writeJwt = jwtSession => {
		const session = getSession();
		session.jwt = jsonwebtoken.sign(jwtSession, JwtSecret, {
			expiresIn: cookieMaxAgeMilliseconds / 1000,
		});
	};

	req.jwtSession = new Proxy(
		{},
		{
			get(_target, property, _receiver) {
				return readJwt()[/** @type {keyof JwtSession} */ (property)];
			},
			set(_target, property, value, _receiver) {
				const jwtSession = { ...readJwt() };
				jwtSession[/** @type {keyof JwtSession} */ (property)] = value;
				writeJwt(jwtSession);
				return true;
			},
		},
	);

	next();
}
