import { Controller, Get } from "@nestjs/common";
import { LandingPageConfig } from "../../common";

@Controller("landing")
export class LandingController {
  @Get()
  getLandingPageConfig(): LandingPageConfig {
    return {
      stickyFooterText: {
        en: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
      },
    };
  }
}
