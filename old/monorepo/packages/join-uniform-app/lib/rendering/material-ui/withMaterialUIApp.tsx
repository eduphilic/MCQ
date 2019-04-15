import { AppComponentType, DefaultAppIProps, NextAppContext } from "next/app";
import React, { Component as ReactComponent } from "react";
import { RenderingAppProps } from "../RenderingAppProps";
import { createMuiCssContext } from "./createMUICssContext";

export function withMaterialUIApp(
  App: AppComponentType<RenderingAppProps, DefaultAppIProps>,
) {
  const WithMaterialUIApp: AppComponentType<
    RenderingAppProps,
    DefaultAppIProps
  > = class extends ReactComponent<RenderingAppProps> {
    static readonly displayName = "WithMaterialUIApp(App)";
    private readonly muiCssContext = createMuiCssContext();

    static async getInitialProps(context: NextAppContext) {
      // tslint:disable-next-line:no-object-literal-type-assertion
      let initialProps = {} as DefaultAppIProps;
      if (App.getInitialProps) {
        initialProps = await App.getInitialProps(context);
      }
      return initialProps;
    }

    render() {
      return <App {...this.props} muiCssContext={this.muiCssContext} />;
    }
  };

  return WithMaterialUIApp;
}
