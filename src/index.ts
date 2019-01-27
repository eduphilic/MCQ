// The purpose of this file is to polyfill the environment variable
// "FIREBASE_CONFIG". This variable is normally provided only in a Firebase
// environment. To enable running the server locally without using the Firebase
// emulator, it is polyfilled here.

// Disable TypeScript module warning due to the "isolatedModules" option being
// set to true.
// @ts-ignore
// eslint-disable-next-line
if (true) {
}

const firebaseCredentials =
  process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS;
const firebaseConfigEnv = process.env.FIREBASE_CONFIG;
const firebaseConfig: import("firebase-admin").AppOptions = firebaseConfigEnv
  ? JSON.parse(firebaseConfigEnv)
  : {
      databaseUrl: process.env.FIREBASE_DATABASE_URL,
      storageBucket: `${firebaseCredentials.project_id}.appspot.com`,
      projectId: firebaseCredentials.project_id,
    };

process.env.FIREBASE_CONFIG = JSON.stringify(firebaseConfig);
process.env.IS_FIREBASE_FUNCTION = JSON.stringify(!!firebaseConfigEnv);

const main: (typeof import("./main"))["main"] = require("./main").main;

module.exports.main = main;
