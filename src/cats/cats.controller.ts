import { Controller, Get } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get()
  // eslint-disable-next-line class-methods-use-this
  public findAll() {
    return "This action returns all cats6";
  }
}
