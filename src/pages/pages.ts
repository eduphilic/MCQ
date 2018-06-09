import * as adminPages from "./admin";
import * as landingPages from "./landing";
import * as userPages from "./user";

/**
 * The application's pages.
 */
export const pages = { ...adminPages, ...landingPages, ...userPages };
