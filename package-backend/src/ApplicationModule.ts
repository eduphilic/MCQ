import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DeployableAppsEnum, DeploymentModule } from "./deployment";
import { HostingModule } from "./hosting";
// import { StaticModule } from "./static";

@Module({
  imports: [
    ConfigModule,
    DeploymentModule,

    HostingModule.forRoot({
      app: DeployableAppsEnum.PackageLanding,
      mountPath: "/",
    }),
  ],
})
export class ApplicationModule {}
