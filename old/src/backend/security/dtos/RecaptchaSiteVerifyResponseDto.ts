// TODO: Refine these type definitions.
// 1. All fields should be optional with the exception of `success`.
// 2. `error-codes` appears to be of type `string[]`.

/**
 * Response received from Recaptcha's server side verification endpoint.
 */
export type RecaptchaSiteVerifyResponseDto = {
  /**
   * Whether the request contained a valid Recaptcha token.
   */
  success: boolean;

  /**
   * The score for the request (0.0 - 1.0).
   */
  score: number;

  /**
   * The name for the request. Important to verify.
   */
  action: string;

  // spell-checker:disable
  /**
   * Timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ).
   */
  challenge_ts: number;
  // spell-checker:enable

  /**
   * The hostname of the site where the Recaptcha was solved.
   */
  hostname: string;

  /**
   * Optional.
   */
  "error-codes"?: unknown[];
};
