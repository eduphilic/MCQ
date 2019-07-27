import { Module } from "@nestjs/common";
import { TempController } from "./TempController";

@Module({
	controllers: [TempController],
})
export class AppModule {}
