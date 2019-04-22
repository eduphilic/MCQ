import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DeploymentModule } from "./deployment";
import { StaticModule } from "./static";

@Module({ imports: [ConfigModule, DeploymentModule, StaticModule] })
export class ApplicationModule {}
