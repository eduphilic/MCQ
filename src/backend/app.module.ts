import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DatabaseModule } from "./database";
import { LandingModule } from "./landing";
import { ResourceModule } from "./resource";
import { SecurityModule } from "./security";
import { UserModule } from "./user";

import { TestStaticEntity } from "../common";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    LandingModule,
    SecurityModule,
    UserModule,

    ResourceModule.forRoot<TestStaticEntity>({
      isUserResource: false,
      resourceName: "test-static",
    }),
  ],
})
export class ApplicationModule {}
