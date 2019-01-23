import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module";
import { NextRendererModule } from "./next-renderer";

@Module({
  imports: [CatsModule, NextRendererModule],
})
export class ApplicationModule {}
