import { LoadingSpinnerContextValue } from "@join-uniform/components";
import ApolloClient from "apollo-client";
import { AppProps, DefaultAppIProps } from "next/app";
import { MUICssContext } from "./material-ui";

export type RenderingAppProps = DefaultAppIProps &
  AppProps & {
    serverSideApolloClient?: ApolloClient<any>;
    apolloState?: object;
    apolloClient?: ApolloClient<any>;
    muiCssContext?: MUICssContext;
    loadingSpinnerConfig?: LoadingSpinnerContextValue;
  };
