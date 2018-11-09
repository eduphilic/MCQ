import { isRedirect } from "@reach/router";

import { NextFunction } from "connect";
import { SetOption as CookieSetOption } from "cookies";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa, { Context } from "koa";
// import csrf from "koa-csrf";
// import { ServerContext } from "./ServerContext";
import { SessionUserRole } from "./models";
import { SessionUserServerResumed } from "./models/SessionUserServerResumed";
// import { resolvers } from "./serverResolvers";
import {
  // getFirebaseRemoteConfigClient,
  getSessionCookieService,
} from "./services";

const jwtSecret = "n#3Tni$X%adp@DE4knaZ";
const cookieOptions: CookieSetOption = {
  maxAge: 60 * 60 * 24 * 14 /* 14 days */ * 1000,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  domain:
    process.env.NODE_ENV === "production" ? "www.joinuniform.com" : "localhost",
};

// Firebase Service Account
const firebaseCredentials = {
  type: "service_account",
  project_id: "joinuniformindia",
  private_key_id: "a9d57dc2383946e746bd5f986e7a028549a80be4",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCz64oOZHhkANNe\nD4Abv2JlIPHSVnaOPWQn8nA6uOtis3i/qPOQOMhhJ0lbXIzy8HxoB8qDYY8ZRZ8F\nkwOxmxibOLHps5hem5E9F9v4BFXOlC1Y4a+/9uIsyIC6QbC625hLhkUqDhnRu0JE\n93aC07/0VEB4BLMplVvr9xvGO/2bYTis0j1W9ogdVfDvSNSvEs2J+4TcOgUk3MWx\nodw9CVpSukpB1aPPZp7gPLnrzBs9YjJunuuxRrgd0ibHrnRUB94NYylBDWSD1zfp\nmWuA7Ek03R+UA5EPMTxKxNGmb4/GYUWd0kO2E9vp4GFwQRwQS0CuNTUaqHDfFz2G\nngOirQs/AgMBAAECggEAD/xMoFm8jpoPgusapUcnArg0yXea11QiCss8vc2XRbDk\nzhaV9AmaLXOe+L9A21w9mW/zxiI2uMvu70EFfNQRvBzYmzHfRwHzG2amyc2iIsAX\nRVnhUnYo2J9vPIfrSrbfEaVvjhHW/m5GWuKnxMOelE1LYGkpJ/fYGnTdTWAgI3Fk\nz0MlQyY+VW+ueQb8aVEmVUXbz0SHIgG7aDs9ZS6oAsOK8yqHLXxgUWpFE0jZmq8V\nMIDR0puC6xO0duCSbmiR2E/jzjT2gtSGhPQyFmamwbSAgq7kyEPMAr4qhm12+EFk\nSMTkvQ5qMgssK0Wm0SxYxVfnswRE3mMSZQ4n48LH0QKBgQDoY8YlwkDopzz0Xe6r\nBy+RL6q+pZ2i3FWp/zEczHJljZGpbcK/4gBRziZhbwTCH7iKazP9rapSNYvzkvjG\nPTOdEQBUZSgG22am2IHyXDxY9Z3WMziEbAE+IycW8c9mvWal/t/fin7ooYmGfrCm\nTDesCTAQhUI2GuWAbZTcWBP5zwKBgQDGMxTY7ONW+jQ4MIk8s4VfHEPu0u9fOAog\nkkfvfy8JZoeCeAUKe+FHhK2E6zjAxNLR/voSghVHPsqoL3gMu1D00m0Kcqd/atum\nUT3aS0ckLQUNk+gRU9ASRFUByuivUOd9X12oackNYKZ7HCjS2OL63oLURySu2UVO\nJ3u6cgbjkQKBgQCF3bOu3I93dZ7vRYzOiH0mLUc2O0DrJ/FQ0+f+pubfCQX3i3q7\n/fwhI5eIWONsz8kGM2rnnrqWULIlxWv5BhhNShXeh8be7FPdmKqCag95T0N0uFy+\nK1kr6iQCW5kVndUbmg5sPuOMLkGCcEhiA1WujDxbx+e0MxoxOO6fXz1ikQKBgFOa\nIGUQJyT9DSHWd0z/fHaN+am3l/jWLo9mpKlFQJX6hZZnAdlWP8RnFrpGbf4CB9tE\nbj94V3lh5yHiRAU6zf8283/AtR5t+JDDHBAESNHdm5AKn40PiWjrIeBLsrKgscSU\ngXEUjhXyesbbLe0iRzwCt7TK/ZIzW6SHywzuJDHBAoGBAJzJtca+wlTVXumCPcgf\n+fLpQ6IvLdt6iO3wkFz1W/CIs0kDAOlXWD42SHBFGHS14WAbD8wcUyqdXqFRJeNT\nyIh6HQ7uS7vVkBqYN9SwkEEvPZZwEZQcfWoQaoTEG/dC88OVpHbaWwpn1Sf4t8sH\n4UfnEPkx44hmCIyzcR0d2mdY\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-a5g58@joinuniformindia.iam.gserviceaccount.com",
  client_id: "105098343987528636412",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a5g58%40joinuniformindia.iam.gserviceaccount.com",
};

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: firebaseCredentials.project_id,
    clientEmail: firebaseCredentials.client_email,
    privateKey: firebaseCredentials.private_key,
  }),
});
const firebaseDatabase = firebaseApp.firestore();
firebaseDatabase.settings({
  timestampsInSnapshots: true,
});

const app = new Koa();
// app.use(new csrf({ disableQuery: true }));

// Load user from session cookie.
app.use((ctx, next) => {
  const sessionCookie = ctx.session!.user;
  if (!sessionCookie) {
    ctx.session!.user = null;
    ctx.state.user = null;
    return next();
  }
  const user = getSessionCookieService(
    jwtSecret,
    cookieOptions.maxAge! / 1000,
  ).validateSessionCookie(sessionCookie);
  ctx.state.user = user;
  return next();
});

const logoutRouteMiddleware = async (ctx: Context, next: NextFunction) => {
  if (ctx.url === "/logout") {
    let redirectDestination = "/login";
    const user = ctx.state.user as SessionUserServerResumed | null;
    if (user && user.role === SessionUserRole.ADMIN) {
      redirectDestination = "/admin/login";
    }
    ctx.state.user = null;
    if (process.env.NODE_ENV === "development") {
      ctx.set("Cache-Control", "private");
    }
    ctx.session = null;
    ctx.redirect(redirectDestination);
    return;
  }

  await next();
};

// Reach Router throws on redirect.
const routerDirectMiddleware = async (ctx: Context, next: NextFunction) => {
  try {
    await next();
  } catch (e) {
    if (isRedirect(e)) {
      ctx.redirect(e.uri);
      return;
    }
    throw e;
  }
};

app.use(logoutRouteMiddleware);
app.use(routerDirectMiddleware);

export const main = functions.https.onRequest(app.callback());
