import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { NextRendererMiddleware } from "./next-renderer.middleware";

@Module({
  imports: [ConfigModule],
  providers: [NextRendererMiddleware],
})
export class NextRendererModule {}
