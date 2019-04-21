import { Module } from "@nestjs/common";
import { FirebaseAdminService } from "./FirebaseAdminService";

@Module({
  providers: [FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class FirebaseAdminModule {}
