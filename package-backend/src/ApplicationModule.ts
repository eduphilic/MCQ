import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DeployableAppsEnum, DeploymentModule } from "./deployment";
import { HostingModule } from "./hosting";
// import { StaticModule } from "./static";

@Module({
  imports: [
    ConfigModule,
    DeploymentModule,

    // StaticModule.forRoot({
    //   app: DeployableAppsEnum.PackageLanding,
    //   mountPath: "/",
    // }),

    HostingModule.forRoot({
      app: DeployableAppsEnum.PackageLanding,
      mountPath: "/app",
    }),
  ],
})
export class ApplicationModule {}
