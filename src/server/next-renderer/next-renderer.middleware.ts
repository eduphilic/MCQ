import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import nextJs from "next";
import { IncomingMessage, ServerResponse } from "http";

const isProduction = process.env.NODE_ENV === "production";

@Injectable()
export class NextRendererMiddleware implements NestMiddleware {
  private nextApp = nextJs({ dev: !isProduction });
  private nextPreparationStatus: Promise<void> | null = null;

  resolve(
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
    if (!this.nextPreparationStatus) {
      this.nextPreparationStatus = this.nextApp.prepare();
    }

    await this.nextPreparationStatus;
    return this.nextApp;
  }
}
