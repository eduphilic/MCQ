import { Injectable } from "@nestjs/common";
import { SecurityService } from "../security";
import { CreateUserDto } from "./dtos";

@Injectable()
export class UserService {
  constructor(private securityService: SecurityService) {}

  async createUser(createUserDto: CreateUserDto) {
    await this.securityService.verifyRecaptchaResponse({
      action: "create-user",
      response: createUserDto.recaptchaToken,
    });

    /* tslint:disable-next-line:no-console */
    console.log({ createUserDto });
    return "success";
  }
}
