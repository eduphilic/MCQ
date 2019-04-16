import { Module } from "@nestjs/common";
import { ConfigModule } from "./config";
import { DeploymentModule } from "./deployment";

@Module({ imports: [ConfigModule, DeploymentModule] })
export class ApplicationModule {}
