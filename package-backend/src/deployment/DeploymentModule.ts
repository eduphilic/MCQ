import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { ConfigModule } from "../config";
import { FirebaseAdminModule } from "../firebase-admin";
import { DeploymentController } from "./DeploymentController";
import { DeploymentMulterConfigService } from "./DeploymentMulterConfigService";
import { DeploymentMulterFirebaseCompatibilityMiddleware } from "./DeploymentMulterFirebaseCompatibilityMiddleware";
import { DeploymentService } from "./DeploymentService";

@Module({
  controllers: [DeploymentController],
  imports: [
    ConfigModule,
    FirebaseAdminModule,
    MulterModule.registerAsync({
      useClass: DeploymentMulterConfigService,
    }),
  ],
  providers: [DeploymentService],
})
export class DeploymentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DeploymentMulterFirebaseCompatibilityMiddleware)
      .forRoutes({ path: "/api/deploy", method: RequestMethod.POST });
  }
}
