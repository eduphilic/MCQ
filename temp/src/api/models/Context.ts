import { ConfigurationRepository, SessionCookie } from "../persistence";
import { LocalizationService, UserService } from "../services";

export type Context = {
  sessionCookie: SessionCookie;
  configurationRepository: ConfigurationRepository;
  localizationService: LocalizationService;
  userService: UserService;
};
