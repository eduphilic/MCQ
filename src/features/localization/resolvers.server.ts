import { IResolvers } from "apollo-server-koa";
import { GraphQLScalarType } from "graphql";
import { LocalizationSupportedLanguages } from "../../models";
import { ServerContext } from "../../ServerContext";
import { LocalizationState } from "./LocalizationState";

export const resolvers: IResolvers<{}, ServerContext> = {
  Query: {
    // Client default state.
    // TODO: Set default localization
    localization: (_parent, _args, _ctx): LocalizationState => {
      return {
        __typename: "Localization",
        language: LocalizationSupportedLanguages.English,
      };
    },
  },
  LocalizedString: new GraphQLScalarType({
    name: "LocalizedString",
    serialize(value) {
      return value;
    },
    parseValue(value) {
      return value;
    },
    parseLiteral(_ast) {
      return null;
    },
  }),
};
