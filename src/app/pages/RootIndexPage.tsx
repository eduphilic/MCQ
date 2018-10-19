import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { SFC } from "react";
import { Query } from "react-apollo";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <>
    <p>Root Index Page</p>
    <Button>Test</Button>
    <Button>Test</Button>
    <Hello />
  </>
);

const Hello = () => (
  <Query<{ hello: string }>
    query={gql`
      {
        hello
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error :(</p>;

      return <p>{data!.hello}</p>;
    }}
  </Query>
);
