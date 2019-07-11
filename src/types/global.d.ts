declare namespace NodeJS {
	interface Process {
		/**
		 * Whether or not the code is executing in a user's browser. If `false`, the
		 * code is executing in the server's backend Node.js process.
		 */
		browser: boolean;
	}

	interface ProcessEnv {
		FIREBASE_CONFIG: {
			type: "production" | "staging";
			apiKey: string;
			authDomain: string;
			databaseURL: string;
			projectId: string;
			storageBucket: string;
			messagingSenderId: string;
			appID: string;
		};
	}
}

/**
 * Strict version of the built in `Omit` helper. It enforces that the keys to be
 * omitted actually exist on the target type.
 *
 * TypeScript 3.5 introduced the `Omit` type into the core language. It was
 * decided that the helper would not be strict.
 *
 * @see https://github.com/Microsoft/TypeScript/pull/30552
 */
type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
