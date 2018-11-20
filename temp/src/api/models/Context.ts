import { ConfigurationRepository, SessionCookie } from "../persistence";
import {
  CloudinaryService,
  LocalizationService,
  UserService,
} from "../services";

export type Context = {
  sessionCookie: SessionCookie;
  configurationRepository: ConfigurationRepository;
  localizationService: LocalizationService;
  userService: UserService;
  cloudinaryService: CloudinaryService;
};
