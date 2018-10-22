import { QueryResolvers } from "./generated";

export type State = {
  [K in keyof QueryResolvers.Type]: Exclude<
    ReturnType<QueryResolvers.Type[K]>,
    Promise<any>
  > & {
    __typename: string;
  }
};

export const initialState: State = {
  localization: {
    __typename: "Localization",
    localizationLanguage: "en",
  },
};
