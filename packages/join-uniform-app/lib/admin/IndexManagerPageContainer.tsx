import { LoadingSpinner } from "@join-uniform/components";
import React, { ReactType } from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";
import {
  IndexManagerGetIndexPageConfigComponent,
  IndexManagerGetIndexPageConfigProps,
  IndexManagerGetIndexPageConfigQuery,
  IndexManagerUpdateIndexPageComponent,
  IndexManagerUpdateIndexPageMutation,
  IndexManagerUpdateIndexPageProps,
} from "~/lib/client";

type RenderProps = {
  getIndexPageConfig: QueryResult<
    IndexManagerGetIndexPageConfigQuery,
    IndexManagerGetIndexPageConfigProps
  >;
  updateIndexPage: MutationFn<
    IndexManagerUpdateIndexPageMutation,
    IndexManagerUpdateIndexPageProps
  >;
};

const Composed = adopt<RenderProps, {}>({
  getIndexPageConfig: <IndexManagerGetIndexPageConfigComponent />,
  updateIndexPage: <IndexManagerUpdateIndexPageComponent />,
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
