import { ServerStyleSheet as StyledComponentsServerStyleSheet } from "@join-uniform/theme";
import {
  DefaultDocumentIProps,
  DocumentComponentType,
  DocumentProps,
  Enhancer,
  NextDocumentContext,
} from "next/document";
import React, { Component } from "react";
import { RenderingPageProps } from "../RenderingPageProps";

export function withStyledComponentsDocument<
  P extends DocumentProps,
  IP extends DefaultDocumentIProps,
  C extends NextDocumentContext
>(Document: DocumentComponentType<P, IP, C>) {
  const WithStyledComponentsDocument: DocumentComponentType<
    P,
    IP,
    C
  > = class extends Component<P> {
    static displayName = "WithStyledComponentsDocument(Document)";

    static async getInitialProps(context: C) {
      const sheet = new StyledComponentsServerStyleSheet();

      const originalRenderPage = context.renderPage;

      context.renderPage = enhancer => {
        const typedEnhancer:
          | Enhancer<RenderingPageProps>
          | undefined = enhancer as any;

        const renderPageResponse = originalRenderPage<RenderingPageProps>(
          App => props => {
            const EnhancedApp = typedEnhancer ? typedEnhancer(App) : App;

            return sheet.collectStyles(<EnhancedApp {...props} />);
          },
        );

        return renderPageResponse;
      };

      // tslint:disable-next-line:no-object-literal-type-assertion
      let initialProps = {} as IP;
      if (Document.getInitialProps) {
        initialProps = await Document.getInitialProps(context);
      }

      initialProps.styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      );

      return initialProps;
    }

    render() {
      return <Document {...this.props} />;
    }
  };

  return WithStyledComponentsDocument;
}