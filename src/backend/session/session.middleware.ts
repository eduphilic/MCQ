import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import csurf from "csurf";
import { Request, RequestHandler, Response } from "express";
import { CookieSessionMiddleware } from "./cookie-session.middleware";

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  private cookieSessionMiddleware: RequestHandler;
  private csrfMiddleware: RequestHandler;

  constructor(cookieSessionMiddlewareProvider: CookieSessionMiddleware) {
    this.cookieSessionMiddleware = cookieSessionMiddlewareProvider.use.bind(
      cookieSessionMiddlewareProvider,
    );
    this.csrfMiddleware = csurf({
      cookie: false,
      sessionKey: "session",
      value: req => {
        const header = req.headers["x-xsrf-token"];
        if (!header) return "";
        return Array.isArray(header) ? header[0] : header;
      },
    });
    /* tslint:disable-next-line:no-console */
    console.log({ TEST: "TEst" });
  }

  use(req: Request, res: Response, next: () => void) {
    composeMiddleware({
      req,
      res,
      next,
      middlewares: [
        this.cookieSessionMiddleware.bind(this),
        this.csrfMiddlewareWithErrorHandler.bind(this),
      ],
    });
  }

  csrfMiddlewareWithErrorHandler(
    req: Request,
    res: Response,
    next: (err?: Error) => void,
  ) {
    this.csrfMiddleware(req, res, (err: unknown) => {
      if (
        typeof err === "object" &&
        err != null &&
        // spell-checker:ignore EBADCSRFTOKEN
        (err as { code?: any }).code === "EBADCSRFTOKEN"
      ) {
        next(new HttpException("Invalid CSRF token", HttpStatus.FORBIDDEN));
        return;
      }

      next();
    });
  }
}

function composeMiddleware(options: ComposeMiddlewareConfig) {
  if (options.middlewares.length > 0) {
    options.middlewares[0](options.req, options.res, err => {
      if (err) throw err;

      composeMiddleware({
        ...options,
        middlewares: options.middlewares.slice(1),
      });
      return;
    });
  }

  options.next();
}

type ComposeMiddlewareConfig<R = Request, S = Response> = {
  req: R;
  res: S;
  next: () => void;
  middlewares: ((req: R, res: S, next: (err?: Error) => void) => void)[];
};
