import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { HostedAppEnum, HostingModule } from "./hosting";

@Module({
  imports: [
    ConfigModule,

    HostingModule.forRoot({
      app: HostedAppEnum.PackageLanding,
      mountPath: "/",
      spa: false,
      ignoredPaths: [],
    }),
  ],
})
export class ApplicationModule {}
