import { Injectable, OnModuleInit } from "@nestjs/common";
import * as functions from "firebase-functions";

@Injectable()
export class ConfigService implements OnModuleInit {
  onModuleInit() {
    const config = functions.config();

    // eslint-disable-next-line no-console
    console.log({ config });
  }
}
