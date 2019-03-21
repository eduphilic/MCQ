import { ForbiddenException, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ConfigService } from "../config";
import {
  RecaptchaSiteVerifyRequestDto,
  RecaptchaSiteVerifyResponseDto,
} from "./dtos";
import { VerifyRecaptchaResponseRequestType } from "./types";

/**
 * Provides methods to verify client side requests.
 */
@Injectable()
export class SecurityService {
  constructor(private configService: ConfigService) {}

  // spell-checker:ignore siteverify
  /**
   * Validates Recaptcha response tokens using the Recaptcha's `siteverify`
   * endpoint. It ensures the Recaptcha action name matches on both the client
   * and the server. Failures throw a `ForbiddenException`.
   *
   * @param verifyRecaptchaResponseRequest Recaptcha request to verify.
   */
  async verifyRecaptchaResponse(
    verifyRecaptchaResponseRequest: VerifyRecaptchaResponseRequestType,
  ) {
    const recaptchaSiteVerifyRequestDto: RecaptchaSiteVerifyRequestDto = {
      secret: this.configService.getServerConfig().recaptcha.secret_key,
      response: verifyRecaptchaResponseRequest.response,
      // TODO: Send user's IP address.
      // remoteip: ""
    };

    return request({
      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recaptchaSiteVerifyRequestDto),
    })
      .pipe(
        map(({ response }) => response as RecaptchaSiteVerifyResponseDto),
        map(recaptchaSiteVerifyResponseDto => {
          if (
            !recaptchaSiteVerifyResponseDto.success ||
            recaptchaSiteVerifyResponseDto.action !==
              verifyRecaptchaResponseRequest.action
          ) {
            throw new ForbiddenException("Recaptcha verification failed.");
          }
        }),
      )
      .toPromise();
  }
}
