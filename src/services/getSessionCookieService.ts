import { sign, verify } from "jsonwebtoken";
import { SessionUserServerResumed } from "../models/SessionUserServerResumed";

export function getSessionCookieService(
  jwtSecret: string,
  jwtExpiresInSeconds: number,
) {
  return new SessionCookieService(jwtSecret, jwtExpiresInSeconds);
}

class SessionCookieService {
  constructor(private jwtSecret: string, private jwtExpiresInSeconds: number) {}

  createSessionCookie(user: SessionUserServerResumed) {
    const jwtContents: SessionUserServerResumed = {
      accountId: user.accountId,
      role: user.role,
      language: user.language,
    };
    const sessionCookie = sign(jwtContents, this.jwtSecret, {
      expiresIn: this.jwtExpiresInSeconds,
    });

    return sessionCookie;
  }

  validateSessionCookie(
    sessionCookie: string,
  ): SessionUserServerResumed | null {
    let sessionUserResumed: SessionUserServerResumed | null = null;

    try {
      sessionUserResumed = verify(
        sessionCookie,
        this.jwtSecret,
      ) as SessionUserServerResumed;
    } catch (e) {
      return null;
    }
    return {
      accountId: sessionUserResumed.accountId,
      role: sessionUserResumed.role,
      language: sessionUserResumed.language,
    };
  }
}
