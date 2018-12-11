import Document, { Main, NextScript } from "next/document";
import React from "react";
import {
  withMaterialUIDocument,
  withStyledComponentsDocument,
} from "../lib/rendering";

class MyDocument extends Document {
  render() {
    const { styles } = this.props;

    return (
      <html>
        <body>
          <Main />
          <NextScript />
          {styles}
        </body>
      </html>
    );
  }
}

export default withMaterialUIDocument(withStyledComponentsDocument(MyDocument));
