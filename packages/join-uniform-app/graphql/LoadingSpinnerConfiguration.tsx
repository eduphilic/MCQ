import {
  LoadingSpinnerContextValue,
  LoadingSpinnerProvider,
} from "@join-uniform/components";
import {
  GetLogoConfigDocument,
  GetLogoConfigQuery,
} from "@join-uniform/graphql";
import ApolloClient from "apollo-client";
import React, { ReactNode, useEffect, useReducer } from "react";
import { createResponsiveImageUrl } from "../lib";

type LoadingSpinnerConfigurationProps = {
  children?: ReactNode;
  apolloClient: ApolloClient<any>;
};

type LoadingSpinnerConfigurationState = {
  contextValue: LoadingSpinnerContextValue | null;
  loading: boolean;
  loaded: boolean;
  error: string | null;
};

type LoadingSpinnerConfigurationActions =
  | { type: "FETCH" }
  | { type: "FETCH_SUCCESS"; logoUrl: string }
  | { type: "FETCH_FAILED"; error: string };

const initialState: LoadingSpinnerConfigurationState = {
  contextValue: null,
  loading: false,
  loaded: false,
  error: null,
};

/**
 * Provides a configured LogoSpinnerProvider. It fetches the logo url from the
 * GraphQL store and sets the responsive logo image urls.
 */
export function LoadingSpinnerConfiguration(
  props: LoadingSpinnerConfigurationProps,
) {
  const [state, dispatch] = useReducer<
    LoadingSpinnerConfigurationState,
    LoadingSpinnerConfigurationActions
  >((prevState, action) => {
    switch (action.type) {
      case "FETCH": {
        props.apolloClient
          .query<GetLogoConfigQuery>({
            query: GetLogoConfigDocument,
          })
          .then(result => {
            dispatch({
              type: "FETCH_SUCCESS",
              logoUrl: result.data.logoConfig.url,
            });
          })
          .catch(error => {
            dispatch({ type: "FETCH_FAILED", error: error.toString() });
          });

        return { ...prevState, loading: true };
      }
      case "FETCH_SUCCESS": {
        return {
          ...prevState,
          contextValue: {
            src1_0x: createResponsiveImageUrl(action.logoUrl, {
              w: "72",
              h: "72",
              format: "png",
            }),
            src1_5x: createResponsiveImageUrl(action.logoUrl, {
              w: "105",
              h: "105",
              format: "png",
            }),
            src2_0x: createResponsiveImageUrl(action.logoUrl, {
              w: "144",
              h: "144",
              format: "png",
            }),
          },
          loading: false,
          loaded: true,
        };
      }
      case "FETCH_FAILED": {
        /* tslint:disable-next-line:no-console */
        console.error(`Failed to fetch logo url: ${action.error}`);

        return {
          ...prevState,
          loading: false,
          error: action.error,
        };
      }
      default:
        return prevState;
    }
  }, initialState);

  useEffect(() => {
    if (!state.loading && !state.loaded && !state.error) {
      dispatch({ type: "FETCH" });
    }
  }, []);

  if (!state.loaded || !state.contextValue) return null;

  return (
    <LoadingSpinnerProvider {...state.contextValue}>
      {props.children}
    </LoadingSpinnerProvider>
  );
}
