import { Card, CardContent } from "@material-ui/core";
import { Form, withFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { AuthenticationFormButton } from "./AuthenticationFormButton";
import { AuthenticationFormCardActions } from "./AuthenticationFormCardActions";
import { AuthenticationFormCardHeader } from "./AuthenticationFormCardHeader";
import { AuthenticationFormTerms } from "./AuthenticationFormTerms";
import { AuthenticationFormTextField } from "./AuthenticationFormTextField";

type FormValues = {
  email: string;
  password: string;
  termsAgreed: boolean;
};

function AuthenticationFormBase() {
  return (
    <Card component={(Form as unknown) as "div"}>
      <AuthenticationFormCardHeader
        title="Signup"
        subheader={
          <span>
            Already a Member? <strong>Login</strong>
          </span>
        }
      />
      <CardContent>
        <AuthenticationFormTextField<FormValues>
          name="email"
          placeholder="Enter Email Address"
          type="email"
        />
        <AuthenticationFormTextField<FormValues>
          name="password"
          placeholder="Enter Password"
          type="password"
        />
      </CardContent>
      <AuthenticationFormCardActions>
        <AuthenticationFormTerms<FormValues> name="termsAgreed" />
        <AuthenticationFormButton variant="contained" fullWidth type="submit">
          Sign up
        </AuthenticationFormButton>
      </AuthenticationFormCardActions>
    </Card>
  );
}

const schema = yup.object<FormValues>({
  email: yup.string().required("Please enter an email address"),
  password: yup.string().required("Please enter a password"),
  termsAgreed: yup
    .boolean()
    .oneOf([true], "Please agree to the terms of service")
    .required(),
});

export const AuthenticationForm = withFormik({
  mapPropsToValues: (): FormValues => ({
    email: "",
    password: "",
    termsAgreed: false,
  }),
  validationSchema: schema,
  handleSubmit: values => {
    /* tslint:disable-next-line:no-console */
    console.log({ values });
  },
})(AuthenticationFormBase);
