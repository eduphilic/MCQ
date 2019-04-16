import { Controller, Get } from "@nestjs/common";

@Controller()
export class PlaceholderController {
  @Get()
  index() {
    return "Placeholder";
  }
}
