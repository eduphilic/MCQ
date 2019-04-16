import { Module } from "@nestjs/common";
import { PlaceholderController } from "./PlaceholderController";

@Module({ controllers: [PlaceholderController] })
export class ApplicationModule {}
