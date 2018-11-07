import { LocalizationLanguage } from "../generated";
import { SessionCookie } from "../persistence";
import { UserService } from "./UserService";

export class LocalizationService {
  constructor(
    private sessionCookie: SessionCookie,
    private userService: UserService,
  ) {}

  /**
   * Returns the current user's language preference or the default of "ENGLISH"
   * if no user is signed in.
   */
  async getLanguagePreference() {
    const language = (await this.sessionCookie.getSessionValueByKey(
      "language",
    )) as LocalizationLanguage | null;

    return language || (await this.getLanguagePreferenceFromUserAccount());
  }

  /**
   * Updates the current user's language preference. If the user is logged in it
   * updates their user account record.
   *
   * @param language New language preference.
   */
  async setLanguagePreference(language: LocalizationLanguage) {
    this.sessionCookie.setSessionValueByKey("language", language);

    const user = await this.userService.getCurrentUserAccount();
    if (!user) return;

    await this.userService.updateUserAccount(user.id, { language });
  }

  /**
   * Returns the language preference from the user's account or returns a
   * default if the user is not logged in.
   *
   * The returned language preference is persisted to the session cookie to
   * prevent further database lookups.
   */
  private async getLanguagePreferenceFromUserAccount() {
    const user = await this.userService.getCurrentUserAccount();

    const language: LocalizationLanguage = user
      ? user.language
      : LocalizationLanguage.ENGLISH;

    this.sessionCookie.setSessionValueByKey("language", language);
    return language;
  }
}
