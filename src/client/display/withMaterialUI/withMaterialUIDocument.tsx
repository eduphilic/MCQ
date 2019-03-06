import {
  AnyPageProps,
  DefaultDocumentIProps,
  NextDocumentContext,
} from "next/document";
import React, { Component, ComponentType } from "react";
import flush from "styled-jsx/server";
import { PageContext } from "./getPageContext";

type PagePropsWithPageContext = AnyPageProps & {
  pageContext: PageContext;
};

export function withMaterialUIDocument<T>(Document: ComponentType<T>) {
  return class WithMaterialUIDocumentHoc extends Component<T> {
    static async getInitialProps(
      context: NextDocumentContext,
    ): Promise<DefaultDocumentIProps> {
      let pageContext: PageContext | undefined;

      const enhancedComponent = (
        PageComponent: ComponentType<PagePropsWithPageContext>,
      ) => {
        const WrappedPageComponent = (props: PagePropsWithPageContext) => {
          pageContext = props.pageContext;
          /* tslint:disable-next-line:no-console */
          console.log({ props });
          return <PageComponent {...props} />;
        };

        return WrappedPageComponent;
      };
      const page = context.renderPage(enhancedComponent);

      let css: string | undefined;
      if (pageContext) {
        css = pageContext.sheetsRegistry.toString();
      }

      /* tslint:disable-next-line:no-console */
      console.log({ css });

      const styles = (
        <>
          {css && (
            <style
              id="jss-server-side"
              dangerouslySetInnerHTML={{ __html: css }}
            />
          )}
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
