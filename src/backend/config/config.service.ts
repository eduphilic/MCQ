import { Injectable } from "@nestjs/common";
import { Config } from "./interfaces";

@Injectable()
export class ConfigService {
  /**
   * Returns the server and application configuration. The values returned
   * contain sensitive server information and should not be exposed directly.
   */
  getServerConfig(): Config {
    return {
      // spell-checker:disable
      recaptcha: {
        secret_key: "6LfE44wUAAAAACXTTT_FhLXDoRk4sZxbF3tPqLal",
      },
      session: {
        expire_milliseconds: 1209600000,
        key: "Nus9NV50s5Am",
      },
      // spell-checker:enable
    };
  }
}
