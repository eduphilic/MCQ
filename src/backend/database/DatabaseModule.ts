import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { DatabaseService } from "./DatabaseService";

/**
 * Provides access to the Firebase database (Firestore).
 */
@Module({
  imports: [ConfigModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
