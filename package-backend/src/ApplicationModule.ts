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
      developmentServerPort: 5003,
    }),
  ],
})
export class ApplicationModule {}
