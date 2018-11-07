import { Firestore } from "@google-cloud/firestore";
import { Context } from "./models";
import {
  SessionCookie,
  SessionCookieOptions,
  UserAccountRepository,
} from "./persistence";
import { LocalizationService, UserService } from "./services";

type Options = SessionCookieOptions & {
  db: Firestore;
};

export function createContext(options: Options) {
  const sessionCookie = new SessionCookie(options);
  const userAccountRepository = new UserAccountRepository(options.db);
  const userService = new UserService(sessionCookie, userAccountRepository);
  const localizationService = new LocalizationService(
    sessionCookie,
    userService,
  );

  const context: Context = {
    sessionCookie,
    localizationService,
    userService,
  };

  return context;
}
