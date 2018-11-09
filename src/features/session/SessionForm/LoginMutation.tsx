import gql from "graphql-tag";
import React, { ConsumerProps, SFC } from "react";
import { Mutation, MutationFn } from "react-apollo";
import { LoginMutationArgs, Mutation as MutationResolver } from "../../../api";

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

type Response = Pick<MutationResolver, "login">;

type Variables = LoginMutationArgs;

export const LoginMutation: SFC<
  ConsumerProps<MutationFn<Response, Variables>>
> = ({ children }) => (
  <Mutation<Response, Variables> mutation={LOGIN}>{children}</Mutation>
);

export type LoginMutationFn = MutationFn<Response, Variables>;
