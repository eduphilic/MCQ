import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import nextJs, { Server } from "next";
import { IncomingMessage, ServerResponse } from "http";

const isProduction = process.env.NODE_ENV === "production";

@Injectable()
export class NextRendererMiddleware implements NestMiddleware {
  private nextApp: Server | null = null;

  public resolve(
    ignoredPaths?: RegExp[],
  ): MiddlewareFunction<IncomingMessage, ServerResponse> {
    return async (req, res, next) => {
      if (!req || !res)
        throw new Error("Expected Express request and response objects.");

      if (ignoredPaths && ignoredPaths.find(i => i.test(req.url as string))) {
        return next && next();
      }

      const nextApp = await this.getNextApp();
      return nextApp.handleRequest(req, res);
    };
  }

  private async getNextApp() {
    if (!this.nextApp) {
      this.nextApp = nextJs({ dev: !isProduction });
      await this.nextApp.prepare();
    }

    return this.nextApp;
  }
}
