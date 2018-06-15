import * as adminPages from "./admin";
import * as examPages from "./exam";
import * as landingPages from "./landing";
import * as userPages from "./user";

/**
 * The application's pages.
 */
export const pages = {
  ...adminPages,
  ...examPages,
  ...landingPages,
  ...userPages,
};
