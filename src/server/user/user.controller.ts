import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("user")
export class UserController {
  @Get()
  test() {
    return "test";
  }

  @Post()
  createUser(@Req() req: Request) {
    return JSON.stringify(req.headers, null, 2);
  }
}
