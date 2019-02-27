import { Controller, Get, Query, UsePipes } from "@nestjs/common";
import * as yup from "yup";
import { YupValidationPipe } from "../validation";
import { ConfigService } from "./config.service";
import { GetConfigDto, GetConfigResponseDto } from "./dtos";

const queryAcceptableKeys: GetConfigDto["fields"][] = ["recaptchaSiteKey"];

const queryRegex = new RegExp(`^((${queryAcceptableKeys.join("|")}),?)+$`);

const querySchema = yup
  .string()
  .matches(queryRegex)
  .required();

@Controller("config")
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Get()
  @UsePipes(new YupValidationPipe(querySchema))
  getPublicConfig(@Query("fields") fields: string) {
    const fieldKeys = fields
      .split(",")
      .filter(f => f.length) as GetConfigDto["fields"][];

    const publicConfig = this.configService.getPublicConfig();
    const response: GetConfigResponseDto = {};
    fieldKeys.forEach(key => {
      response[key] = publicConfig[key];
    });
    return response;
  }
}
