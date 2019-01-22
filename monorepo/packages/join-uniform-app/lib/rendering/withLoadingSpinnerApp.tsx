import { LoadingSpinnerContextValue } from "@join-uniform/components";
import { AppComponentType, DefaultAppIProps, NextAppContext } from "next/app";
import React, { Component } from "react";
import { WithLoadingSpinnerAppLogoConfigComponent } from "~/lib/client";
import { createResponsiveImageUrl } from "../utils";
import { RenderingAppProps } from "./RenderingAppProps";

export function withLoadingSpinnerApp(
  App: AppComponentType<RenderingAppProps, DefaultAppIProps>,
) {
  const WithLoadingSpinnerApp: AppComponentType<
    RenderingAppProps,
    DefaultAppIProps
  > = class extends Component<RenderingAppProps> {
    static readonly displayName = "WithLoadingSpinnerApp(App)";

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
        <WithLoadingSpinnerAppLogoConfigComponent client={client}>
          {result => {
            const logoUrl =
              !result.loading && !result.error
                ? result.data!.logoConfig.url
                : "";

            return (
              <App
                {...this.props}
                loadingSpinnerConfig={createLoadingSpinnerConfig(logoUrl)}
              />
            );
          }}
        </WithLoadingSpinnerAppLogoConfigComponent>
      );
    }
  };

  return WithLoadingSpinnerApp;
}

function createLoadingSpinnerConfig(
  logoUrl: string,
): LoadingSpinnerContextValue {
  return {
    src1_0x: createResponsiveImageUrl(logoUrl, {
      w: "72",
      h: "72",
      format: "png",
    }),
    src1_5x: createResponsiveImageUrl(logoUrl, {
      w: "105",
      h: "105",
      format: "png",
    }),
    src2_0x: createResponsiveImageUrl(logoUrl, {
      w: "144",
      h: "144",
      format: "png",
    }),
    transitionDelay: 2000,
  };
}
