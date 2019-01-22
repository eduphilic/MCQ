import { Firestore } from "@google-cloud/firestore";
import { Context } from "./models";
import {
  ConfigurationRepository,
  FirebaseCredentials,
  SessionCookie,
  SessionCookieOptions,
  UserAccountRepository,
} from "./persistence";
import {
  CloudinaryCredentials,
  CloudinaryService,
  LocalizationService,
  UserService,
} from "./services";

type Options = SessionCookieOptions & {
  db: Firestore;
  remoteConfigCredentials: FirebaseCredentials;
  cloudinaryCredentials: CloudinaryCredentials;
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
  const cloudinaryService = new CloudinaryService(
    options.cloudinaryCredentials,
  );

  const context: Context = {
    sessionCookie,
    configurationRepository,
    localizationService,
    userService,
    cloudinaryService,
  };

  return context;
}
