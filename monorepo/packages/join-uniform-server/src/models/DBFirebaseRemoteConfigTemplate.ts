import { DBHtmlConfig } from "./DBHtmlConfig";
import { DBIndexCard } from "./DBIndexCard";
import { DBIndexPageConfig } from "./DBIndexPageConfig";
import { DBLogoConfig } from "./DBLogoConfig";

export type DBFirebaseRemoteConfigTemplate = {
  htmlConfig: DBHtmlConfig;
  logoConfig: DBLogoConfig;
  indexPageConfig: DBIndexPageConfig;
  indexCards: DBIndexCard[];
};
