import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import nextJs from "next";
import { ConfigService } from "../config";

const isProduction = process.env.NODE_ENV === "production";

@Injectable()
export class NextRendererMiddleware implements NestMiddleware {
  private nextApp = nextJs({ dev: !isProduction });
  private nextPreparationStatus: Promise<void> | null = null;

  constructor(private configService: ConfigService) {}

  resolve(): MiddlewareFunction<Request, Response> {
    return async (req, res, next) => {
      if (!req || !res) {
        throw new Error(
          "NextRendererMiddleware expects Express request and response objects to be provided.",
        );
      }

      req.config = this.configService.getConfig();

      try {
        const nextApp = await this.getNextApp();
        await nextApp.handleRequest(req, res);
      } catch (e) {
        if (next) next(e);
        else throw e;
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
