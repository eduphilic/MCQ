import * as yup from "yup";
import {
  HtmlConfig,
  IndexPageAboutImage,
  IndexPageConfig,
  LogoConfig,
} from "./generated.server";
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
    logoConfig: Required<Omit<LogoConfig, "id">>;
    indexPageConfig: IndexPageConfig;

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
      .object<Required<Omit<LogoConfig, "id">>>()
      .shape({
        url: yup.string().required(),
      })
      .required(),

    indexPageConfig: yup
      .object<IndexPageConfig>({
        heroBackgroundImageUrl: yup.string().required(),
        heroBackgroundAlpha: yup.number().required(),
        heroPrimaryText: localizedString.required(),
        heroFeatures: yup.array(localizedString).required(),
        heroFooterText: localizedString.required(),
        aboutTitle: localizedString.required(),
        aboutText: localizedString.required(),
        aboutImages: yup
          .array(
            yup.object<IndexPageAboutImage>({
              imageUrl: yup.string().required(),
              title: localizedString.required(),
              text: localizedString.required(),
            }),
          )
          .required(),
      })
      .required(),

    translations,
  });

type Required<T> = { [P in keyof T]-?: T[P] };
