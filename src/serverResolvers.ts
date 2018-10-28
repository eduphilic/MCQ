import { merge } from "lodash";
import { resolvers as adminResolvers } from "./features/admin/resolvers.server";
import { resolvers as landingResolvers } from "./features/landing/resolvers.server";
import { resolvers as localizationResolvers } from "./features/localization/resolvers.server";
import { resolvers as sessionResolvers } from "./features/session/resolvers.server";
import { resolvers as layoutResolvers } from "./layouts/resolvers.server";

export const resolvers = merge(
  {},
  adminResolvers,
  layoutResolvers,
  landingResolvers,
  sessionResolvers,
  localizationResolvers,
);
