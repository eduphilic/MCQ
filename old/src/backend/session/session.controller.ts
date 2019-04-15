import { Controller, Get } from "@nestjs/common";

@Controller("session")
export class SessionController {
  @Get("csrf")
  createCsrfToken() {
    //
    return "test";
  }
}
