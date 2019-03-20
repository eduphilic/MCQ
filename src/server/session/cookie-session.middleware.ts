import { Injectable, NestMiddleware } from "@nestjs/common";
import cookieSession from "cookie-session";
import { Request, RequestHandler, Response } from "express";
import { ConfigService } from "../config";

@Injectable()
export class CookieSessionMiddleware implements NestMiddleware {
  private cookieSessionMiddleware: RequestHandler;

  constructor(configService: ConfigService) {
    const config = configService.getServerConfig();

    const cookieExpireMilliseconds = verifyCookieExpireMilliseconds(
      config.session.expire_milliseconds,
    );

    this.cookieSessionMiddleware = cookieSession({
      // This is the only cookie name supported by Firebase.
      // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
      name: "__session",
      maxAge: cookieExpireMilliseconds,
      signed: false,
    });
  }

  use(req: Request, res: Response, next: () => void) {
    // Set the cache header, otherwise the cookie is discarded.
    // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
    res.setHeader("Cache-Control", "private");

    this.cookieSessionMiddleware(req, res, next);
  }
}

// These are the cookie expiration ranges supported by Firebase.
// https://firebase.google.com/docs/auth/admin/manage-cookies
export const MIN_FIREBASE_SESSION_MILLISECONDS = 300000;
export const MAX_FIREBASE_SESSION_MILLISECONDS = 1209600000;

function verifyCookieExpireMilliseconds(expiration: number) {
  if (
    expiration < MIN_FIREBASE_SESSION_MILLISECONDS ||
    expiration > MAX_FIREBASE_SESSION_MILLISECONDS
  ) {
    throw new Error(
      `Cookie expire milliseconds must be between ${MIN_FIREBASE_SESSION_MILLISECONDS} and ${MAX_FIREBASE_SESSION_MILLISECONDS}. Was: ${expiration}.`,
    );
  }

  return expiration;
}
