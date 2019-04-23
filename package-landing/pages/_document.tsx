/**
 * This page is rendered only server side. This page is used to add the
 * stylesheet from the Material UI library to the rendered HTML page.
 */

/* tslint:disable:import-name */
import { ServerStyleSheets } from "@material-ui/styles";
import NextDocumentPage, {
  DefaultDocumentIProps,
  DocumentProps,
  NextDocumentContext,
} from "next/document";
import React from "react";
import flush from "styled-jsx/server";

type DocumentPageProps = DefaultDocumentIProps & DocumentProps;

function DocumentPage(props: DocumentPageProps) {
  return <NextDocumentPage {...props} />;
}

DocumentPage.getInitialProps = async (
  context: NextDocumentContext,
): Promise<DefaultDocumentIProps> => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await NextDocumentPage.getInitialProps(context);

  return {
    ...initialProps,
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default DocumentPage;
