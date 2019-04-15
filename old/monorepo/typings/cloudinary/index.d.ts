declare module "cloudinary" {
  export interface CloudinaryConfig {
    cloud_name: string;
    api_key: string;
    api_secret: string;
  }

  export function config(options: CloudinaryConfig);

  export const utils: {
    api_sign_request(paramsToSign: any, apiSecret: string): string;
  };
}
