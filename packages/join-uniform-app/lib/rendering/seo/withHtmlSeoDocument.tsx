import {
  GetHtmlConfigDocument,
  GetHtmlConfigQuery,
} from "@join-uniform/graphql";
import {
  DefaultDocumentIProps,
  DocumentComponentType,
  DocumentProps,
  NextDocumentContext,
} from "next/document";
import React, { Component } from "react";
import { initializeApollo } from "../apollo";
import { SeoTags } from "./SeoTags";

export function withHtmlSeoDocument<
  P extends DocumentProps,
  IP extends DefaultDocumentIProps,
  C extends NextDocumentContext
>(Document: DocumentComponentType<P, IP, C>) {
  const WithHtmlSeoDocument: DocumentComponentType<
    P,
    IP,
    C
  > = class extends Component<P> {
    static displayName = "WithHtmlSeoDocument(Document)";

    static async getInitialProps(context: C) {
      const apolloClient = initializeApollo();
      const htmlConfigQueryResult = await apolloClient.query<
        GetHtmlConfigQuery
      >({
        query: GetHtmlConfigDocument,
      });
      const htmlConfig = htmlConfigQueryResult.data.htmlConfig;

      // tslint:disable-next-line:no-object-literal-type-assertion
      let initialProps = {} as IP;
      if (Document.getInitialProps) {
        initialProps = await Document.getInitialProps(context);
      }

      initialProps.styles = (
        <>
          <SeoTags htmlConfig={htmlConfig} />
          {initialProps.styles}
        </>
      );

      return initialProps;
    }

    render() {
      return <Document {...this.props} />;
    }
  };

  return WithHtmlSeoDocument;
}
