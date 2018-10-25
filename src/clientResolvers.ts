import { merge } from "lodash";
import { resolvers as localizationResolvers } from "./features/localization/resolvers.client";

export const resolvers = merge({}, localizationResolvers);
