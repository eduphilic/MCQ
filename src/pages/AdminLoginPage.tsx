import { Link, RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { createRef, SFC } from "react";
import { Mutation } from "react-apollo";
import { LandingLayout } from "../layouts";
import { SessionLoginRequestResult } from "../models/SessionLoginRequestResult";

const LOGIN = gql`
  mutation Login($phoneNumber: String!, $password: String!) {
    login(phoneNumber: $phoneNumber, password: $password)
  }
`;

type Result = SessionLoginRequestResult;
type Variables = {
  phoneNumber: string;
  password: string;
};

export const AdminLoginPage: SFC<RouteComponentProps> = () => {
  const phoneNumberInput = createRef<HTMLInputElement>();
  const passwordInput = createRef<HTMLInputElement>();

  return (
    <LandingLayout>
      <div>Admin Login Page</div>
      <Link to="/">Home</Link>

      <Mutation<Result, Variables> mutation={LOGIN}>
        {(mutate, result) => (
          <>
            {!result.called && (
              <form
                onSubmit={event => {
                  event.preventDefault();

                  // tslint:disable-next-line:no-floating-promises
                  mutate({
                    variables: {
                      phoneNumber: phoneNumberInput.current!.value,
                      password: passwordInput.current!.value,
                    },
                  });
                  passwordInput.current!.value = "";
                }}
              >
                <p>Phone Number: (0000)</p>
                <p>
                  <input ref={phoneNumberInput} />
                </p>
                <p>Password: (00000000)</p>
                <p>
                  <input ref={passwordInput} type="password" />
                </p>
                <button type="submit">Login</button>
              </form>
            )}
            {result.loading && <p>Loading...</p>}
            {result.data && <p>Result: {JSON.stringify(result.data)}</p>}
          </>
        )}
      </Mutation>
    </LandingLayout>
  );
};
