import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { DeploymentController } from "./DeploymentController";

@Module({
  imports: [ConfigModule],
  controllers: [DeploymentController],
})
export class DeploymentModule {}
