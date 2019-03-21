import { CreateUserBaseDto } from "./create-user-base.dto";

export type CreateUserUsingPhoneNumberDto = CreateUserBaseDto & {
  phoneNumber: string;
};
