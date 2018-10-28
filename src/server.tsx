import fs from "fs";
import path from "path";

import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { isRedirect, ServerLocation } from "@reach/router";
import { create, SheetsRegistry } from "jss";
import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import JssProvider from "react-jss/lib/JssProvider";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { App } from "./app";
import { Html } from "./layouts";
import { lightTheme } from "./styled/themes";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-koa";
import { SetOption as CookieSetOption } from "cookies";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa, { Context } from "koa";
import csrf from "koa-csrf";
import session from "koa-session";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { HtmlConfig } from "./models";
import { ServerContext } from "./ServerContext";
import { resolvers } from "./serverResolvers";
import {
  getFirebaseRemoteConfigClient,
  getSessionCookieService,
} from "./services";

const jwtSecret = "^aoqJQ5onoOzay0wmFoW";
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
app.keys = ["g233RT^icesV7TUV8ldD", "t#00NkE2yzD88fj7x8x@"];
app.use(
  session(
    {
      key: "__session",
      signed: false,
      maxAge: cookieOptions.maxAge,
    },
    app,
  ),
);
app.use(new csrf({ disableQuery: true }));

if (process.env.NODE_ENV === "development") {
  const serve: typeof import("koa-static") = require("koa-static");
  app.use(serve(process.env.RAZZLE_PUBLIC_DIR!));
}

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
  /* tslint:disable-next-line:no-console */
  console.log({ user });
  return next();
});

// In production the schema file will be colocated with the server bundle.
const schemaString = fs.readFileSync(
  path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "schema.graphql"
      : "../schema.graphql",
  ),
  "utf8",
);

// Used by ApolloServer in server.
const typeDefs = gql`
  ${schemaString}
`;

// Used by ApolloClient in server rendered app.
const schema = makeExecutableSchema({
  typeDefs: gql`
    ${schemaString}
  `,
  resolvers,
});

const contextFactory = ({ ctx }: { ctx: Context }): ServerContext => {
  // Send a current CSRF token so the client's connection is not rejected should
  // its token become stale before its next refresh.
  ctx.set("X-XSRF-TOKEN", ctx.csrf);

  return {
    ctx,
    firebaseDatabase,
    firebaseRemoteConfigClient: getFirebaseRemoteConfigClient({
      projectId: firebaseCredentials.project_id,
      clientEmail: firebaseCredentials.client_email,
      privateKey: firebaseCredentials.private_key,
    }),
    sessionCookieService: getSessionCookieService(
      jwtSecret,
      cookieOptions.maxAge! / 1000,
    ),
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextFactory,
});

server.applyMiddleware({
  app: app as any,
  bodyParserConfig: false,
  cors: false,
});

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

const middlewareRenderApp = async (ctx: Context) => {
  // Firebase Functions emulator won't send cookies otherwise...
  if (process.env.NODE_ENV === "development") {
    ctx.set("Cache-Control", "private");
  }

  const context = contextFactory({ ctx });
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema, context }),
    cache: new InMemoryCache(),
  });

  const htmlConfig = (await context.firebaseRemoteConfigClient.getParameterByKey(
    "htmlConfig",
  )) as HtmlConfig;

  const dataOnlyComponent = (
    <ApolloProvider client={client}>
      <ServerLocation url={ctx.url}>
        <App />
      </ServerLocation>
    </ApolloProvider>
  );
  try {
    await getDataFromTree(dataOnlyComponent);
  } catch (e) {
    /* tslint:disable-next-line:no-console */
    console.log("Server rendering error: ", e);
    throw e;
  }

  // https://material-ui.com/guides/server-rendering/#handling-the-request
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();
  const jss = create({ ...jssPreset() });

  // https://www.styled-components.com/docs/advanced#example
  const sheet = new ServerStyleSheet();

  const component = (
    <StyleSheetManager sheet={sheet.instance}>
      <JssProvider
        jss={jss}
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={lightTheme} sheetsManager={sheetsManager}>
          {dataOnlyComponent}
        </MuiThemeProvider>
      </JssProvider>
    </StyleSheetManager>
  );
  const content = renderToString(component);

  // https://www.styled-components.com/docs/advanced#example
  const styleElements = sheet.getStyleElement();

  const html = (
    <Html
      content={content}
      assets={assets}
      cache={client.cache}
      materialUiCss={sheetsRegistry.toString().split("\n").map(l => l.trim()).join("")} // prettier-ignore
      styledComponentsStyleElements={styleElements}
      csrfToken={ctx.csrf}
      googleAnalyticsId={htmlConfig.googleAnalyticsId}
      metaKeywords={htmlConfig.metaKeywords}
      metaDescription={htmlConfig.metaDescription}
      metaAuthor={htmlConfig.metaAuthor}
      metaAbstract={htmlConfig.metaAbstract}
      metaCopyright={htmlConfig.metaCopyright}
    />
  );

  // Reach Router throws on redirect
  try {
    ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
  } catch (e) {
    if (isRedirect(e)) {
      ctx.redirect(e.uri);
      return;
    }

    throw e;
  }
};

app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
