import React, { Component, ReactNode } from "react";
import {
  OperationVariables,
  Query,
  QueryProps,
  QueryResult,
} from "react-apollo";
import { LoadingSpinner } from "./LoadingSpinner";

export class QueryWithLoading<
  TData = any,
  TVariables = OperationVariables
> extends Component<QueryWithLoadingProps<TData, TVariables>> {
  render() {
    const { children, ...queryProps } = this.props;

    return (
      <Query<TData, TVariables> {...queryProps}>
        {({ loading, data, ...rest }) => {
          if (loading || !data) {
            return <LoadingSpinner fadeIn />;
          }

          return this.props.children({ data: data!, ...rest });
        }}
      </Query>
    );
  }
}

/**
 * Apollo QueryResult with the "loading" field removed and "data" as
 * non-nullable.
 */
export type QueryWithLoadingResult<
  TData = any,
  TVariables = OperationVariables
> = Omit<QueryResult<TData, TVariables>, "data" | "loading"> & {
  data: TData;
};

/**
 * Apollo QueryProps with children function accepting a QueryWithLoadingResults.
 * The result has the "loading" field removed and the "data" field set to
 * non-nullable.
 */
export type QueryWithLoadingProps<
  TData = any,
  TVariables = OperationVariables
> = Omit<QueryProps<TData, TVariables>, "children"> & {
  children: (result: QueryWithLoadingResult<TData, TVariables>) => ReactNode;
};
