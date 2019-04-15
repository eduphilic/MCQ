import { Module } from "@nestjs/common";
import { ConfigModule } from "../config";
import { SecurityService } from "./SecurityService";

/**
 * Provides services relating to the verification of client side requests. It
 * validates Recaptcha response tokens.
 */
@Module({
  imports: [ConfigModule],
  providers: [SecurityService],
  exports: [SecurityService],
})
export class SecurityModule {}
