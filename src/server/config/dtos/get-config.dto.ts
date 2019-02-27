import { ConfigPublic } from "../interfaces";

export type GetConfigDto = {
  fields: keyof ConfigPublic;
};
