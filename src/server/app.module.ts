import { Module } from "@nestjs/common";
import { NextRendererModule } from "./next-renderer";

@Module({
  imports: [NextRendererModule],
})
export class ApplicationModule {}
