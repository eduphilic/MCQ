import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DeployableAppsEnum, DeploymentModule } from "./deployment";
import { StaticModule } from "./static";

@Module({
  imports: [
    ConfigModule,
    DeploymentModule,

    StaticModule.forRoot({
      app: DeployableAppsEnum.PackageLanding,
      mountPath: "/",
    }),
  ],
})
export class ApplicationModule {}
