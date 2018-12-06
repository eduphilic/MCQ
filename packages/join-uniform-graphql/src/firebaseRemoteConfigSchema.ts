import * as yup from "yup";
import { HtmlConfig, LogoConfig } from "./generated.server";

export type FirebaseRemoteConfigSchema = ReturnType<
  (typeof firebaseRemoteConfigSchema)["validateSync"]
>;

export const firebaseRemoteConfigSchema = yup
  .object<{
    htmlConfig: Required<HtmlConfig>;
    logoConfig: Required<LogoConfig>;
  }>()
  .shape({
    htmlConfig: yup
      .object<Required<HtmlConfig>>()
      .shape({
        googleAnalyticsId: yup.string(),
        metaKeywords: yup.string(),
        metaDescription: yup.string(),
        metaAuthor: yup.string(),
        metaAbstract: yup.string(),
        metaCopyright: yup.string(),
        landingFooter: yup.string(),
      })
      .required(),
    logoConfig: yup
      .object<Required<LogoConfig>>()
      .shape({
        url: yup.string().required(),
      })
      .required(),
  });

type Required<T> = { [P in keyof T]-?: T[P] };
