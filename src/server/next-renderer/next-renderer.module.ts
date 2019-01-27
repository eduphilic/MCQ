import { Module } from "@nestjs/common";
import { NextRendererMiddleware } from "./next-renderer.middleware";
import { ConfigModule } from "../config";

@Module({
  imports: [ConfigModule],
  providers: [NextRendererMiddleware],
})
export class NextRendererModule {}
