import { Controller, Get } from "@nestjs/common";
import { LandingPageConfigModel } from "../../common";

@Controller("landing")
export class LandingController {
  @Get()
  getLandingPageConfig(): LandingPageConfigModel {
    return {
      stickyFooterText: {
        en: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
      },
    };
  }
}
