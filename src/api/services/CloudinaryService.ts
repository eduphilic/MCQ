import cloudinary from "cloudinary";

let cloudinaryConfigured = false;

export type CloudinaryCredentials = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
};

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

  static setConfig(credentials: CloudinaryCredentials) {
    cloudinary.config({
      cloud_name: credentials.cloudName,
      api_key: credentials.apiKey,
      api_secret: credentials.apiSecret,
    });
    cloudinaryConfigured = true;
  }
}
