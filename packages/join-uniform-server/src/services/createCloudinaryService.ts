import cloudinary from "cloudinary";
import crypto from "crypto";
import { CloudinaryMediaWidgetAuthenticationToken } from "~/generated";

let cloudinaryConfigured = false;

export type CloudinaryCredentials = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
  username: string;
};

export function createCloudinaryService(credentials: CloudinaryCredentials) {
  CloudinaryService.setConfig(credentials);
  return new CloudinaryService(credentials);
}

export class CloudinaryService {
  constructor(private credentials: CloudinaryCredentials) {
    if (!cloudinaryConfigured) {
      throw new Error(
        `Cloudinary SDK was not initialized. The static method "setConfig" needs to be called.`,
      );
    }
  }

  /**
   * Signs the parameters passed by the Cloudinary Upload Widget using the api
   * secret.
   *
   * @param paramsToSign Parameters passed by the Cloudinary Upload Widget.
   * @see https://cloudinary.com/documentation/upload_widget#signed_uploads
   */
  generateSignature(paramsToSign: any) {
    return cloudinary.utils.api_sign_request(
      paramsToSign,
      this.credentials.apiSecret,
    );
  }

  /**
   * Returns the Cloudinary "cloudName".
   */
  getCloudName() {
    return this.credentials.cloudName;
  }

  /**
   * Returns the Cloudinary "apiKey".
   */
  getApiKey() {
    return this.credentials.apiKey;
  }

  /**
   * Returns an authentication token for use in authenticating the
   * Cloudinary session for use with the Cloudinary Media Library Widget.
   *
   * @see https://cloudinary.com/documentation/media_library_widget#2_optional_generate_the_authentication_signature
   */
  generateMediaUploadWidgetAuthenticationToken(): CloudinaryMediaWidgetAuthenticationToken {
    const timestamp = Date.now().toString();
    const fragments = [
      ["cloud_name", this.credentials.cloudName],
      ["timestamp", timestamp],
      ["username", this.credentials.username],
    ];
    const authenticationSignature = fragments
      .map(f => `${f[0]}=${f[1]}`)
      .join("&")
      .concat(this.credentials.apiSecret);
    const hash = crypto.createHash("SHA256");
    hash.update(authenticationSignature);

    return {
      api_key: this.credentials.apiKey,
      cloud_name: this.credentials.cloudName,
      signature: hash.digest("hex").toUpperCase(),
      timestamp,
      username: this.credentials.username,
    };
  }

  static setConfig(credentials: CloudinaryCredentials) {
    cloudinary.config({
      cloud_name: credentials.cloudName,
      api_key: credentials.apiKey,
      api_secret: credentials.apiSecret,
    });
    cloudinaryConfigured = true;
  }
}
