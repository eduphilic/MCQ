import { compareSync } from "bcryptjs";
import { LoginRequestResult, UserRole } from "../generated";
import { SessionCookie, UserAccountRepository } from "../persistence";

export class SessionService {
  constructor(
    private sessionCookie: SessionCookie,
    private userAccountRepository: UserAccountRepository,
  ) {}

  /**
   * Returns the role of the currently logged in user by reading from the
   * session cookie. Returns null if the user is not signed in.
   */
  getCurrentUserRole() {
    const userRoleValue = this.sessionCookie.getSessionValueByKey("role");

    if (!userRoleValue || !Object.values(UserRole).includes(userRoleValue)) {
      this.sessionCookie.setSessionValueByKey("role", null);
      return null;
    }

    return userRoleValue as UserRole;
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

    this.sessionCookie.setSessionValueByKey("role", user.role);
    return LoginRequestResult.VALID;
  }
}
