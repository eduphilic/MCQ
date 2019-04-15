import {
  AnyPageProps,
  DefaultDocumentIProps,
  NextDocumentContext,
} from "next/document";
import React, { Component, ComponentType } from "react";
import flush from "styled-jsx/server";
import { getPageContext, PageContext } from "./getPageContext";

type AppPropsWithPageContext = AnyPageProps & {
  pageContext: PageContext;
};

export function withMaterialUIDocument<T>(Document: ComponentType<T>) {
  return class WithMaterialUIDocumentHoc extends Component<T> {
    static async getInitialProps(
      context: NextDocumentContext,
    ): Promise<DefaultDocumentIProps> {
      const pageContext = getPageContext();

      const enhanceApp = (App: ComponentType<AppPropsWithPageContext>) => {
        const WrappedApp = (props: AppPropsWithPageContext) => (
          <App {...props} pageContext={pageContext} />
        );

        return WrappedApp;
      };

      const page = context.renderPage({ enhanceApp });
      const css = pageContext.sheetsRegistry.toString();

      const styles = (
        <>
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </>
      );

      return {
        ...page,
        styles,
      };
    }

    render() {
      return <Document {...this.props} />;
    }
  };
}
