import { SchemaDirectiveVisitor } from "apollo-server-koa";
import {
  defaultFieldResolver,
  GraphQLEnumType,
  GraphQLField,
  GraphQLNonNull,
} from "graphql";
import { LocalizationSupportedLanguages } from "../../models";

/**
 * Directive for the Apollo GraphQL server which translates localized string
 * objects of the form:
```
{ "en": "...", "hi": "..." }
```
 * to a string. It adds a required "language" argument to marked field
 * definitions.
 */
export class LocalizationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;

    field.args.push({
      name: "language",
      type: new GraphQLNonNull(
        new GraphQLEnumType({
          name: "LocalizationLanguage",
          values: {
            ENGLISH: {},
            HINDI: {},
          },
        }),
      ),
    });

    field.resolve = async (
      source,
      { language, ...otherArgs },
      context,
      info,
    ) => {
      const value: LocalizedString | LocalizedString[] = await resolve.call(
        this,
        source,
        otherArgs,
        context,
        info,
      );

      if (Array.isArray(value)) {
        return value.map(localizedString =>
          this.getLocalizedString(localizedString, language),
        );
      }

      return this.getLocalizedString(value, language);
    };
  }

  private getLocalizedString(
    localizedString: LocalizedString,
    language: LocalizationSupportedLanguages,
  ) {
    switch (language) {
      case LocalizationSupportedLanguages.English:
        return localizedString.en;
      case LocalizationSupportedLanguages.Hindi:
        return localizedString.hi || localizedString.en;
      default:
        throw new Error(`Localization language must be "ENGLISH" or "HINDI".`);
    }
  }
}

type LocalizedString = { en: string; hi?: string };
