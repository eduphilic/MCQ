/**
 * Represents a user account.
 */
// tslint:disable-next-line: interface-name
export interface IUser {
  /** Account ID. */
  id: string;
  /** Whether the user is an administrator. */
  isAdmin: boolean;

  /** User's full name. */
  fullName: string;
  /** User's display name, for use in interface components. */
  displayName: string;

  /** User's mobile number, used as the sign in username. */
  phoneNumber: string;
  /** User's email address. */
  email: string;
}
