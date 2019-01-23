import {
  Injectable,
  MiddlewareFunction,
  NestMiddleware,
  OnModuleInit,
} from "@nestjs/common";
import nextJs, { Server } from "next";
import { IncomingMessage, ServerResponse } from "http";

const isProduction = process.env.NODE_ENV === "production";

@Injectable()
export class NextRendererMiddleware implements NestMiddleware, OnModuleInit {
  private nextApp: Server | null = null;

  public async onModuleInit() {
    this.nextApp = nextJs({ dev: !isProduction });
    return this.nextApp.prepare();
  }

  public resolve(
    ignoredPaths?: RegExp[],
  ): MiddlewareFunction<IncomingMessage, ServerResponse> {
    return async (req, res, next) => {
      if (!req || !res)
        throw new Error("Expected Express request and response objects.");
      if (!this.nextApp)
        throw new Error("Expected middleware to have been initialized.");

      if (ignoredPaths && ignoredPaths.find(i => i.test(req.url as string))) {
        return next && next();
      }

      return this.nextApp.handleRequest(req, res);
    };
  }
}
