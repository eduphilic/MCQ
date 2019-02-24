import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("user")
export class UserController {
  @Post()
  createUser(@Req() req: Request) {
    return JSON.stringify(req.headers, null, 2);
  }
}
