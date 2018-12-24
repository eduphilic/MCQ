import {
  Language,
  WithTranslationAppTranslationComponent,
  WithTranslationAppTranslationQuery,
  WithTranslationAppTranslationVariables,
} from "@join-uniform/graphql";
import { strings } from "@join-uniform/localization";
import { AppComponentType, DefaultAppIProps, NextAppContext } from "next/app";
import React, { Component } from "react";
import { QueryResult } from "react-apollo";
import { RenderingAppProps } from "./RenderingAppProps";

export function withTranslationApp(
  App: AppComponentType<RenderingAppProps, DefaultAppIProps>,
) {
  const WithTranslationApp: AppComponentType<
    RenderingAppProps,
    DefaultAppIProps
  > = class extends Component<RenderingAppProps> {
    static readonly displayName = "WithTranslationApp(App)";
    private loaded = false;

    static async getInitialProps(context: NextAppContext) {
      return App.getInitialProps
        ? App.getInitialProps(context)
        : // tslint:disable-next-line:no-object-literal-type-assertion
          ({} as DefaultAppIProps);
    }

    render() {
      const client =
        this.props.apolloClient || this.props.serverSideApolloClient;

      return (
        <WithTranslationAppTranslationComponent
          client={client}
          variables={{ language: Language.English }}
        >
          {result => {
            this.setTranslation(result);

            return <App {...this.props} />;
          }}
        </WithTranslationAppTranslationComponent>
      );
    }

    setTranslation(
      result: QueryResult<
        WithTranslationAppTranslationQuery,
        WithTranslationAppTranslationVariables
      >,
    ) {
      if (result.loading || result.error) return;
      if (this.loaded) return;
      this.loaded = true;
      strings.setContent({ en: result.data!.translation });
    }
  };

  return WithTranslationApp;
}
