import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import { Request, Response, RequestHandler, NextFunction } from "express";
import cookieSession from "cookie-session";
import { ConfigService } from "../config";

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  private cookieSessionMiddleware: RequestHandler;

  constructor(configService: ConfigService) {
    const config = configService.getConfig();

    const cookieExpireMilliseconds = parseAndVerifyCookieExpireMilliseconds(
      config.session.expire_milliseconds,
    );

    this.cookieSessionMiddleware = cookieSession({
      // This is the only cookie name supported by Firebase.
      // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
      name: "__session",
      maxAge: cookieExpireMilliseconds,
      sameSite: "lax",
      signed: false,
    });
  }

  resolve(): MiddlewareFunction<Request, Response> {
    return (req, res, next) => {
      // Set the cache header, otherwise the cookie is discarded.
      // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
      res!.setHeader("Cache-Control", "private");

      this.cookieSessionMiddleware(req!, res!, next as NextFunction);
    };
  }
}

// These are the cookie expiration ranges supported by Firebase.
// https://firebase.google.com/docs/auth/admin/manage-cookies
const MIN_FIREBASE_SESSION_MILLISECONDS = 300000;
const MAX_FIREBASE_SESSION_MILLISECONDS = 1209600000;

function parseAndVerifyCookieExpireMilliseconds(expirationString: string) {
  let expiration: number;
  try {
    expiration = parseInt(expirationString, 10);
    if (
      expiration < MIN_FIREBASE_SESSION_MILLISECONDS ||
      expiration > MAX_FIREBASE_SESSION_MILLISECONDS
    )
      throw new Error(
        `Cookie expire milliseconds must be between ${MIN_FIREBASE_SESSION_MILLISECONDS} and ${MAX_FIREBASE_SESSION_MILLISECONDS}. Was: ${expiration}.`,
      );
  } catch (e) {
    throw new Error(
      `Cookie expiration milliseconds was set to an invalid value: ${e}`,
    );
  }
  return expiration;
}
