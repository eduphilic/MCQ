import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import * as functions from "firebase-functions";
import { ApplicationModule } from "./ApplicationModule";
import { ConfigService } from "./config";

const initialize = createInitializer();

export const app = functions.https.onRequest(async (req, res) => {
  const result = await initialize();

  if (result.type === "FAILURE") {
    /* tslint:disable-next-line:no-console */
    console.error(result.error);
    res.status(500);
    res.end();
    return;
  }

  return result.expressServer(req, res);
});

function createInitializer() {
  let result:
    | {
        type: "SUCCESS";
        expressServer: ReturnType<typeof express>;
        nestApp: INestApplication;
      }
    | {
        type: "FAILURE";
        error: unknown;
      };

  return async () => {
    if (result) return result;

    try {
      // Validate server configuration at startup so that Firebase properly logs
      // the exception. Otherwise the function crashes without proper logging.
      // TODO: Inject config service into ApplicationModule somehow.
      new ConfigService().getConfig();
      const expressServer = express();

      const nestApp = await NestFactory.create(
        ApplicationModule,
        new ExpressAdapter(expressServer),
        { logger: console },
      );
      await nestApp.init();

      result = { type: "SUCCESS", expressServer, nestApp };
    } catch (error) {
      result = { type: "FAILURE", error };
    }

    return result;
  };
}
