import StylesProvider from "@material-ui/styles/StylesProvider";
import { NextAppContext } from "next/app";
import React, { Component, ComponentType } from "react";
import { isNextComponentType } from "../../util";
import { getPageContext, PageContext } from "./getPageContext";

export type WithMaterialUI = {
  pageContext: PageContext;
};

export function withMaterialUIApp<P>(App: ComponentType<P & WithMaterialUI>) {
  return class AppWithMaterialUI extends Component<P> {
    static async getInitialProps(context: NextAppContext) {
      let appProps = {};

      if (isNextComponentType(App)) {
        appProps = await App.getInitialProps!(context);
      }
      /* tslint:disable-next-line:no-console */
      console.log({ withMaterialUiApp: "test" });
      /* tslint:disable-next-line:no-console */
      console.log({ appProps });

      return {
        ...appProps,
      };
    }

    private pageContext = getPageContext();

    render() {
      return (
        <StylesProvider {...this.pageContext}>
          <App {...this.props} pageContext={this.pageContext} />
        </StylesProvider>
      );
    }
  };
}
