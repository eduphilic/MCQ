import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as firebase from "firebase/app";
import { Form, withFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { AuthenticationFormButton } from "./AuthenticationFormButton";
import { AuthenticationFormCardActions } from "./AuthenticationFormCardActions";
import { AuthenticationFormCardHeader } from "./AuthenticationFormCardHeader";
// import { AuthenticationFormGoogleButton } from "./AuthenticationFormGoogleButton";
import { AuthenticationFormLink } from "./AuthenticationFormLink";
import { AuthenticationFormStatus } from "./AuthenticationFormStatus";
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
        <AuthenticationFormStatus />
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
        <AuthenticationFormButton type="submit">
          Sign up
        </AuthenticationFormButton>
        {/* <AuthenticationFormGoogleButton /> */}
        <AuthenticationFormLink to="/recover">
          Forgot your password?
        </AuthenticationFormLink>
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
  handleSubmit: async (values, form) => {
    form.setFieldValue("password", "");
    form.setFieldTouched("password", false);
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);

      /* tslint:disable-next-line:no-console */
      console.log({ credential });

      form.setStatus(null);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use": {
          form.setStatus("Email address is unavailable.");
          break;
        }

        case "auth/invalid-email": {
          form.setStatus("Please enter a valid email.");
          break;
        }

        case "auth/operation-not-allowed": {
          form.setStatus("Registrations are currently disabled.");
          break;
        }

        case "auth/weak-password": {
          form.setStatus("Please enter a stronger password.");
          break;
        }

        default: {
          form.setStatus("Authentication is temporarily unavailable.");
          // tslint:disable-next-line: no-console
          console.error(error);
          throw error;
        }
      }
    } finally {
      form.setSubmitting(false);
    }
  },
})(AuthenticationFormBase);
