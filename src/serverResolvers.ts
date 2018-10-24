import { merge } from "lodash";
import { resolvers as localizationResolvers } from "./features/localization/resolvers.server";
import { resolvers as layoutResolvers } from "./layouts/resolvers.server";

export const resolvers = merge({}, layoutResolvers, localizationResolvers);
