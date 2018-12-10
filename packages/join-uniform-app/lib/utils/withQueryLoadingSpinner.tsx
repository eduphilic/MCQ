import { LoadingSpinner } from "@join-uniform/components";
import React, { ComponentType, ReactNode } from "react";
import { OperationVariables, QueryProps, QueryResult } from "react-apollo";

export function withQueryLoadingSpinner<
  TData = any,
  TVariables = OperationVariables
>(
  QueryComponent: ComponentType<Partial<QueryProps<TData, TVariables>>>,
  children: (result: LoadedQueryResult<TData, TVariables>) => ReactNode,
) {
  return (
    <QueryComponent>
      {result => {
        if (result.loading || result.error) return <LoadingSpinner />;

        return children(result as LoadedQueryResult<TData, TVariables>);
      }}
    </QueryComponent>
  );
}

export type LoadedQueryResult<
  TData = any,
  TVariables = OperationVariables
> = Omit<QueryResult<TData, TVariables>, "data"> & {
  data: NonNullable<QueryResult<TData, TVariables>["data"]>;
};
