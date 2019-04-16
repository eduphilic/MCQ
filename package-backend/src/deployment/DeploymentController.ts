import { Controller, Post, UseGuards } from "@nestjs/common";
import { ConfigService } from "../config";
import { DeploymentApiKeyGuard } from "./DeploymentApiKeyGuard";

@Controller("api/deploy")
@UseGuards(DeploymentApiKeyGuard)
export class DeploymentController {
  constructor(private configService: ConfigService) {}

  @Post()
  async deploy() {
    /* tslint:disable-next-line:no-console */
    console.log({ config: this.configService.getConfig() });
    /* tslint:disable-next-line:no-console */
    console.log({ env: process.env.FIREBASE_CONFIG });
    /* tslint:disable-next-line:no-console */
    console.log({ dev: process.env.NODE_ENV });
  }
}
