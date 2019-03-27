/**
 * Sent from the client during user account creation.
 */
export type CreateUserDto = {
  displayName: string;
  phoneNumber: string;
  password: string;
  recaptchaToken: string;
};
