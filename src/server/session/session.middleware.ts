import {
  HttpException,
  HttpStatus,
  Injectable,
  MiddlewareFunction,
  NestMiddleware,
} from "@nestjs/common";
import csurf from "csurf";
import { Request, RequestHandler, Response } from "express";
import { CookieSessionMiddleware } from "./cookie-session.middleware";

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  private cookieSessionMiddleware: MiddlewareFunction<Request, Response>;
  private csrfMiddleware: RequestHandler;

  constructor(cookieSessionMiddlewareProvider: CookieSessionMiddleware) {
    this.cookieSessionMiddleware = cookieSessionMiddlewareProvider.resolve();
    this.csrfMiddleware = csurf({
      cookie: false,
      sessionKey: "session",
      value: req => {
        const header = req.headers["x-xsrf-token"];
        if (!header) return "";
        return Array.isArray(header) ? header[0] : header;
      },
    });
  }

  resolve(): MiddlewareFunction<Request, Response> {
    const cookieSessionMiddleware = this.cookieSessionMiddleware;
    const csrfMiddleware = this.csrfMiddleware;

    return (req, res, next) => {
      cookieSessionMiddleware(req!, res!, applyCsrfMiddleware);

      function applyCsrfMiddleware(err?: any) {
        if (err) {
          next!(err);
          return;
        }

        csrfMiddleware(req!, res!, handleCsrfError);
      }

      function handleCsrfError(err?: any) {
        if (err && err.code === "EBADCSRFTOKEN") {
          throw new HttpException("Invalid CSRF token", HttpStatus.FORBIDDEN);
        }

        next!(err);
      }
    };
  }
}
