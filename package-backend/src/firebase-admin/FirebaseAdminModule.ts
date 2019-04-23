import { Module } from "@nestjs/common";
import { FirebaseAdminService } from "./FirebaseAdminService";

@Module({
  exports: [FirebaseAdminService],
  providers: [FirebaseAdminService],
})
export class FirebaseAdminModule {}
