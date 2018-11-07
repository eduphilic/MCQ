import { SessionCookie } from "../persistence";
import { LocalizationService, UserService } from "../services";

export type Context = {
  sessionCookie: SessionCookie;
  localizationService: LocalizationService;
  userService: UserService;
};
