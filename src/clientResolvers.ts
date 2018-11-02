import merge from "lodash.merge";
import { resolvers as localizationResolvers } from "./features/localization/resolvers.client";

export const resolvers = merge({}, localizationResolvers);
