import {
  DefaultDocumentIProps,
  DocumentComponentType,
  DocumentProps,
  Enhancer,
  NextDocumentContext,
} from "next/document";
import React, { Component } from "react";
import { RenderingPageProps } from "../RenderingPageProps";
import { MUICssContext } from "./createMUICssContext";

export function withMaterialUIDocument<
  P extends DocumentProps,
  IP extends DefaultDocumentIProps,
  C extends NextDocumentContext
>(Document: DocumentComponentType<P, IP, C>) {
  const WithMaterialUIDocument: DocumentComponentType<
    P,
    IP,
    C
  > = class extends Component<P> {
    static displayName = "WithStyledComponentsDocument(Document)";

    static async getInitialProps(context: C) {
      const originalRenderPage = context.renderPage;

      let muiCssContext: MUICssContext | undefined;

      context.renderPage = enhancer => {
        const typedEnhancer:
          | Enhancer<RenderingPageProps>
          | undefined = enhancer as any;

        const renderPageResponse = originalRenderPage<RenderingPageProps>(
          App => props => {
            const EnhancedApp = typedEnhancer ? typedEnhancer(App) : App;
            muiCssContext = props.muiCssContext;

            return <EnhancedApp {...props} />;
          },
        );

        return renderPageResponse;
      };

      // tslint:disable-next-line:no-object-literal-type-assertion
      let initialProps = {} as IP;
      if (Document.getInitialProps) {
        initialProps = await Document.getInitialProps(context);
      }

      if (!muiCssContext) {
        throw new Error("_app must be decorated with withMaterialUIApp.");
      }

      initialProps.styles = (
        <>
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{
              __html: muiCssContext.sheetsRegistry.toString(),
            }}
          />
          <noscript id="jss-insertion-point" />
          {initialProps.styles}
        </>
      );

      return initialProps;
    }

    render() {
      return <Document {...this.props} />;
    }
  };

  return WithMaterialUIDocument;
}
