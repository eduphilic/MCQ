import cloudinary from "cloudinary";

let cloudinaryConfigured = false;

export type CloudinaryCredentials = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
};

export class CloudinaryService {
  // @ts-ignore
  constructor(private credentials: CloudinaryCredentials) {
    if (!cloudinaryConfigured) {
      throw new Error(
        `Cloudinary SDK was not initialized. The static method "setConfig" needs to be called.`,
      );
    }
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
