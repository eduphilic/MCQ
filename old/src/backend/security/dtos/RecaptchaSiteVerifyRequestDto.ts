/**
 * Body of request sent to Recaptcha's server side verification endpoint.
 */
export type RecaptchaSiteVerifyRequestDto = {
  /**
   * The shared key between the server and the Recaptcha service.
   */
  secret: string;

  /**
   * The response token from the client side Recaptcha library.
   */
  response: string;

  /**
   * The user's ip address.
   */
  remoteip?: string;
};
