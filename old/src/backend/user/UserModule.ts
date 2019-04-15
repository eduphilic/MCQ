import { Module } from "@nestjs/common";
import { SecurityModule } from "../security";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

@Module({
  imports: [SecurityModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
