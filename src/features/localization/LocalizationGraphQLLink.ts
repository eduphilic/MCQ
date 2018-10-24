import {
  ApolloLink,
  FetchResult,
  NextLink,
  Observable,
  Operation,
} from "apollo-link";
import { hasDirectives } from "apollo-utilities";
import {
  ArgumentNode,
  OperationDefinitionNode,
  SelectionSetNode,
} from "graphql";
import { LocalizationSupportedLanguages } from "../../models";

/**
 * Transform the @l10n directive into a field variable called "language"
 * expected by the server's localization module.
 */
export class LocalizationGraphQLLink extends ApolloLink {
  request(
    operation: Operation,
    forward: NextLink,
  ): Observable<FetchResult> | null {
    const isLocalized = hasDirectives(["l10n"], operation.query);
    if (!isLocalized) return forward(operation);

    (operation.query.definitions as OperationDefinitionNode[]).forEach(
      definition => {
        this.processSelectionSet(definition.selectionSet);
      },
    );

    return forward(operation);
  }

  private processSelectionSet(selectionSet?: SelectionSetNode) {
    if (!selectionSet || !selectionSet.selections) return;
    /* tslint:disable-next-line:no-console */
    console.log({ selectionSet });

    selectionSet.selections.forEach(selection => {
      const directives = selection.directives;
      if (!directives) return;

      directives.forEach(directive => {
        /* tslint:disable-next-line:no-console */
        console.log({ directive });
        if (directive.name.value !== "l10n") return;
        if (!directive.arguments || directive.arguments.length !== 1) {
          throw new Error("@l10n requires one argument.");
        }
        const argument = directive.arguments[0];
        if (
          argument.name.value !== "language" ||
          ((argument.value as any).value !==
            LocalizationSupportedLanguages.English &&
            (argument.value as any).value !==
              LocalizationSupportedLanguages.Hindi)
        ) {
          throw new Error(
            "@l10n requires language parameter be set to a supported language.",
          );
        }
        if (selection.kind !== "Field" && selection.kind !== "InlineFragment") {
          throw new Error("@l10n only supported on Field and InlineFragment.");
        }
        // @ts-ignore
        selection.arguments = selection.arguments || [];
        const args: ArgumentNode[] = (selection as any).arguments;
        const languageArgIndex = args.findIndex(
          a => a.name.value === "language",
        );
        if (languageArgIndex > -1) {
          args.splice(languageArgIndex, 1);
        }
        args.push({
          kind: "Argument",
          name: { kind: "Name", value: "language" },
          value: { kind: "EnumValue", value: (argument.value as any).value },
        });
      });

      if (selection.kind === "Field" || selection.kind === "InlineFragment") {
        this.processSelectionSet(selection.selectionSet);
      }
    });
  }
}
