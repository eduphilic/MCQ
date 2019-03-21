import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos";
import { UserService } from "./UserService";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(createUserDto);
  }
}
