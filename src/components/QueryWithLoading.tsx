import React, { Component } from "react";
import { OperationVariables, Query, QueryProps } from "react-apollo";
import { LoadingSpinner } from "./LoadingSpinner";

export class QueryWithLoading<
  TData = any,
  TVariables = OperationVariables
> extends Component<QueryProps<TData, TVariables>> {
  render() {
    return (
      <Query<TData, TVariables> {...this.props}>
        {queryResult => {
          if (queryResult.loading) {
            return <LoadingSpinner fadeIn />;
          }

          return this.props.children(queryResult);
        }}
      </Query>
    );
  }
}
