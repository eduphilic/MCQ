import fs from "fs";
import path from "path";

const credentials = fs.readFileSync(
  path.resolve(__dirname, "../firebase-admin-service-account.staging.json"),
  "utf8",
);

process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS = JSON.parse(
  credentials,
);
process.env.FIREBASE_DATABASE_URL =
  "https://joinuniformindia-test.firebaseio.com/";

// tslint:disable-next-line:no-var-requires
require("./firebasePolyfill");
