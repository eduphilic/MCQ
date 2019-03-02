import { ConfigPublic } from "../../../common";

export type GetConfigDto = {
  fields: keyof ConfigPublic;
};
