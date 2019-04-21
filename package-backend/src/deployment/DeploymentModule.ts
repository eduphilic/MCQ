import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "../config";
import { DeploymentController } from "./DeploymentController";
import { MulterModule } from "@nestjs/platform-express";
import { DeploymentMulterFirebaseCompatibilityMiddleware } from "./DeploymentMulterFirebaseCompatibilityMiddleware";
import { DeploymentMulterConfigService } from "./DeploymentMulterConfigService";
import { DeploymentService } from "./DeploymentService";
import { FirebaseAdminModule } from "../firebase-admin";

@Module({
  imports: [
    ConfigModule,
    FirebaseAdminModule,
    MulterModule.registerAsync({
      useClass: DeploymentMulterConfigService,
    }),
  ],
  providers: [DeploymentService],
  controllers: [DeploymentController],
})
export class DeploymentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DeploymentMulterFirebaseCompatibilityMiddleware)
      .forRoutes({ path: "/api/deploy", method: RequestMethod.POST });
  }
}
