import { IndexConfigResolvers } from "../generated";

export const IndexConfig: IndexConfigResolvers.Type = {
  ...IndexConfigResolvers.defaultResolvers,
  heroBackgroundAlpha: parent => {
    return parseFloat(parent.heroBackgroundAlpha as any);
  },
  heroFeaturesEn: parent => {
    return JSON.parse(parent.heroFeaturesEn as any);
  },
  heroFeaturesHi: parent => {
    return JSON.parse(parent.heroFeaturesHi as any);
  },
  aboutImages: parent => {
    return JSON.parse(parent.aboutImages as any);
  },
};
