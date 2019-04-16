import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { ConfigService } from "../config";
import { ExtractJwt } from "passport-jwt";

/**
 * Ensures that the deployment api key is provided for requests accessing the
 * `DeploymentController`.
 */
@Injectable()
export class DeploymentApiKeyGuard implements CanActivate {
  private jwtFromRequest: (request: Request) => string | null;
  private deploymentApiKey: string;

  constructor(configService: ConfigService) {
    this.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    this.deploymentApiKey = configService.getConfig().DEPLOYMENT_API_KEY;
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = this.jwtFromRequest(request);

    return apiKey === this.deploymentApiKey;
  }
}
