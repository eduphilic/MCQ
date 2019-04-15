import { createParamDecorator } from "@nestjs/common";
import { Request } from "express";

export const CsrfToken = createParamDecorator((_data: void, req: Request) => {
  return req.csrfToken();
});
