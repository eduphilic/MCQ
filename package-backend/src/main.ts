import express from "express";
import * as functions from "firebase-functions";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./ApplicationModule";
import { ExpressAdapter } from "@nestjs/platform-express";

let initialization: Promise<ReturnType<typeof express>> | null = null;

export const app = functions.https.onRequest((req, res) => {
  getExpressServer()
    .then(expressServer => expressServer(req, res))
    .catch(error => {
      /* tslint:disable-next-line:no-console */
      console.error(error);

      res.writeHead(500);
      res.end();
    });
});

function getExpressServer() {
  if (initialization) return initialization;

  initialization = createExpressServer();
  return initialization;
}

async function createExpressServer() {
  const expressServer = express();

  const nestApp = await NestFactory.create(
    ApplicationModule,
    new ExpressAdapter(expressServer),
  );
  await nestApp.init();

  return expressServer;
}
