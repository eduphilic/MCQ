import gql from "graphql-tag";
import React, { ConsumerProps, SFC } from "react";
import { Mutation, MutationFn } from "react-apollo";
import { SessionLoginRequestResult } from "../../../models";

const LOGIN = gql`
  mutation Login($phoneNumber: String!, $password: String!) {
    userLogin(phoneNumber: $phoneNumber, password: $password)
  }
`;
type Response = {
  userLogin: SessionLoginRequestResult;
};
type Variables = {
  phoneNumber: string;
  password: string;
};

export const LoginMutation: SFC<
  ConsumerProps<MutationFn<Response, Variables>>
> = ({ children }) => (
  <Mutation<Response, Variables> mutation={LOGIN}>{children}</Mutation>
);

export type LoginMutationFn = MutationFn<Response, Variables>;
