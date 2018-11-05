import { compareSync } from "bcryptjs";
import { LoginRequestResult, UserRole } from "../generated";
import { UserAccount } from "../models";
import { SessionCookie, UserAccountRepository } from "../persistence";

export class SessionService {
  constructor(
    private sessionCookie: SessionCookie,
    private userAccountRepository: UserAccountRepository,
  ) {}

  /**
   * Returns the current logged in user account or null if the user is not
   * logged in.
   */
  async getCurrentUserAccount() {
    const userId = this.sessionCookie.getSessionValueByKey("id");
    if (!userId) return null;

    return this.userAccountRepository.getUserById(userId);
  }

  /**
   * Updates the specified user account.
   * Throws an error if an "id" field is included in "update" or if the user
   * account does not exist.
   *
   * @param id User account to update.
   * @param update Fields to update.
   */
  async updateUserAccount(
    id: string,
    update: Partial<Omit<UserAccount, "id">>,
  ) {
    await this.userAccountRepository.updateUser(id, update);
  }

  /**
   * Returns the role of the currently logged in user by reading from the
   * session cookie. Returns null if the user is not signed in.
   */
  getCurrentUserRole() {
    const userRole = this.sessionCookie.getSessionValueByKey(
      "role",
    ) as UserRole | null;

    if (!userRole || !Object.values(UserRole).includes(userRole)) {
      this.sessionCookie.setSessionValueByKey("id", null);
      this.sessionCookie.setSessionValueByKey("role", null);
      return null;
    }

    return userRole;
  }

  /**
   * Attempt to login user using the provided credentials. Sets a session cookie
   * so that the user remains logged in. Returns the login attempt result.
   *
   * @param username Username.
   * @param password Password.
   */
  async loginUser(username: string, password: string) {
    const user = await this.userAccountRepository.getUserByUsername(username);

    if (!user) {
      return LoginRequestResult.INVALID;
    }

    const valid = compareSync(password, user.passwordHash);
    if (!valid) return LoginRequestResult.INVALID;

    this.sessionCookie.setSessionValueByKey("id", user.id);
    this.sessionCookie.setSessionValueByKey("role", user.role);
    return LoginRequestResult.VALID;
  }
}
