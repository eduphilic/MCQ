import { LoadingSpinner } from "@join-uniform/components";
import {
  IndexManagerGetIndexPageConfigComponent,
  IndexManagerGetIndexPageConfigProps,
  IndexManagerGetIndexPageConfigQuery,
  IndexManagerUpdateLogoUrlComponent,
  IndexManagerUpdateLogoUrlMutation,
  IndexManagerUpdateLogoUrlProps,
} from "@join-uniform/graphql";
import React, { ReactType } from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";

type RenderProps = {
  getIndexPageConfig: QueryResult<
    IndexManagerGetIndexPageConfigQuery,
    IndexManagerGetIndexPageConfigProps
  >;
  updateLogoUrl: MutationFn<
    IndexManagerUpdateLogoUrlMutation,
    IndexManagerUpdateLogoUrlProps
  >;
};

const Composed = adopt<RenderProps, {}>({
  getIndexPageConfig: <IndexManagerGetIndexPageConfigComponent />,
  updateLogoUrl: <IndexManagerUpdateLogoUrlComponent />,
});

export type IndexManagerPageProps = Omit<RenderProps, "getIndexPageConfig"> & {
  logoUrl: string;
};

export function IndexManagerPageConnectContainer(
  Page: ReactType<IndexManagerPageProps>,
) {
  return IndexManagerPageContainer;

  function IndexManagerPageContainer() {
    return (
      <Composed>
        {({ getIndexPageConfig, ...rest }) => {
          const { loading, error, data } = getIndexPageConfig;
          if (loading || error || !data) return <LoadingSpinner />;

          const {
            logoConfig: { url: logoUrl },
          } = data;

          return <Page logoUrl={logoUrl} {...rest} />;
        }}
      </Composed>
    );
  }
}
