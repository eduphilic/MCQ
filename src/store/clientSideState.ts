import { ClientSideQueryResolvers } from "./ClientSideQueryResolvers";

export type ClientSideState = {
  [K in keyof ClientSideQueryResolvers]: Exclude<
    ReturnType<ClientSideQueryResolvers[K]>,
    Promise<any>
  >
};

export const initialState: ClientSideState = {
  localization: {
    __typename: "Localization",
    localizationLanguage: "en",
  },
};
