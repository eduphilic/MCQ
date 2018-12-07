import * as yup from "yup";
import { HtmlConfig, LogoConfig } from "./generated.server";
import { LocalizationStringKey, LocalizedString } from "./models";

export type FirebaseRemoteConfigSchema = ReturnType<
  (typeof firebaseRemoteConfigSchema)["validateSync"]
>;

const localizedString = yup.object<LocalizedString>().shape({
  en: yup.string().required(),
  hi: yup.string(),
});

const translations = yup
  .object<Record<LocalizationStringKey, LocalizedString>>()
  .shape(
    (Object.keys(LocalizationStringKey) as LocalizationStringKey[]).reduce(
      (accumulator, key) => {
        accumulator[key] = localizedString.required();
        return accumulator;
      },
      // tslint:disable-next-line:no-object-literal-type-assertion
      {} as Record<LocalizationStringKey, typeof localizedString>,
    ),
  );

export const firebaseRemoteConfigSchema = yup
  .object<{
    htmlConfig: Required<HtmlConfig>;
    logoConfig: Required<LogoConfig>;

    translations: Record<LocalizationStringKey, LocalizedString>;
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
      })
      .required(),
    logoConfig: yup
      .object<Required<LogoConfig>>()
      .shape({
        url: yup.string().required(),
      })
      .required(),

    translations,
  });

type Required<T> = { [P in keyof T]-?: T[P] };
