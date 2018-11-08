import { Firestore } from "@google-cloud/firestore";
import { Context } from "./models";
import {
  ConfigurationRepository,
  FirebaseCredentials,
  SessionCookie,
  SessionCookieOptions,
  UserAccountRepository,
} from "./persistence";
import { LocalizationService, UserService } from "./services";

type Options = SessionCookieOptions & {
  db: Firestore;
  remoteConfigCredentials: FirebaseCredentials;
};

export function createContext(options: Options) {
  const sessionCookie = new SessionCookie(options);
  const userAccountRepository = new UserAccountRepository(options.db);
  const userService = new UserService(sessionCookie, userAccountRepository);
  const localizationService = new LocalizationService(
    sessionCookie,
    userService,
  );
  const configurationRepository = new ConfigurationRepository(
    options.remoteConfigCredentials,
  );

  const context: Context = {
    sessionCookie,
    configurationRepository,
    localizationService,
    userService,
  };

  return context;
}
