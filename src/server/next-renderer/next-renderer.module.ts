import { Module } from "@nestjs/common";
import { NextRendererMiddleware } from "./next-renderer.middleware";

@Module({
  providers: [NextRendererMiddleware],
})
export class NextRendererModule {}
