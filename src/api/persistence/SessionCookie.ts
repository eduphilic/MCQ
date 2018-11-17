import { sign, verify } from "jsonwebtoken";
import { Context } from "koa";

export type SessionCookieOptions = {
  jwtSecret: string;
  jwtExpirationSeconds: number;
  koaContext: Context;
};

type JwtContents = {
  value: string;
};

export class SessionCookie {
  constructor(private options: SessionCookieOptions) {}

  /**
   * Returns the requested value from the session cookie if present and not
   * expired.
   *
   * @param key Key for requested value.
   */
  getSessionValueByKey(key: string) {
    const session = this.getSession();

    try {
      const encodedJwt: string = session[key];
      const decodedJwt = verify(
        encodedJwt,
        this.options.jwtSecret,
      ) as JwtContents;
      return decodedJwt.value;
    } catch (e) {
      session[key] = null;
      return null;
    }
  }

  /**
   * Signs and stores the requested value.
   *
   * @param key Key in which to store value.
   *
   * @param value
   * Value which will be encoded and signed using JWT. An expiration time will
   * be attached. If the value is null, the field is cleared.
   */
  setSessionValueByKey(key: string, value: string | null) {
    const session = this.getSession();

    if (value === null) {
      session[key] = null;
      return;
    }

    const jwtContents: JwtContents = { value };
    const encodedJwt = sign(jwtContents, this.options.jwtSecret, {
      expiresIn: this.options.jwtExpirationSeconds,
    });
    session[key] = encodedJwt;
  }

  private getSession() {
    const session = this.options.koaContext.session;
    if (!session) {
      throw new Error(
        "Could not read session. Koa session middleware was not initialized.",
      );
    }
    return session;
  }
}
