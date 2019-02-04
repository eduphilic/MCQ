import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import nextJs from "next";

const isProduction = process.env.NODE_ENV === "production";

@Injectable()
export class NextRendererMiddleware implements NestMiddleware {
  private nextApp = nextJs({ dev: !isProduction });
  private nextPreparationStatus: Promise<void> | null = null;

  resolve(): MiddlewareFunction<Request, Response> {
    return async (req, res, next) => {
      if (/^\/graphql/.test(req!.url)) {
        next!();
        return;
      }

      try {
        const nextApp = await this.getNextApp();
        await nextApp.handleRequest(req!, res!);
      } catch (e) {
        next!(e);
      }
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
