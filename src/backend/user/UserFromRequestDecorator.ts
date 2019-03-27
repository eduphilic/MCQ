import { createParamDecorator } from "@nestjs/common";

// TODO: Tie into session/authentication.
/**
 * Returns the currently authenticated user from the server request.
 */
export const UserFromRequestDecorator = createParamDecorator(
  (_data, _req: Express.Request) => {
    return null;
  },
);
