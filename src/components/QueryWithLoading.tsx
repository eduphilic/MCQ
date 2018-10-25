import { Fade } from "@material-ui/core";
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
            return (
              <Fade in style={{ transitionDelay: "800ms" }}>
                <LoadingSpinner />
              </Fade>
            );
          }

          return this.props.children(queryResult);
        }}
      </Query>
    );
  }
}
