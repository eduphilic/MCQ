import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "../config";
import { DeploymentController } from "./DeploymentController";
import { DeploymentMulterFirebaseCompatibilityMiddleware } from "./DeploymentMulterFirebaseCompatibilityMiddleware";

@Module({
  imports: [ConfigModule],
  controllers: [DeploymentController],
})
export class DeploymentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DeploymentMulterFirebaseCompatibilityMiddleware)
      .forRoutes({ path: "/api/deploy", method: RequestMethod.POST });
  }
}
