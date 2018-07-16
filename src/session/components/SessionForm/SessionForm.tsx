import { Formik } from "formik";
import React, { cloneElement, ReactElement, SFC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { State } from "store";
// import { actions } from "../../actions";
import { Values } from "./Values";

// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

// import { Button } from "components/Button";
import { CardMobileFlat } from "components/CardMobileFlat";
import { FormHeader } from "components/FormHeader";
import { TextField, TextFieldProps } from "components/TextField";
import { getLocalizedFieldProps } from "./getLocalizedFieldProps";

type OwnProps = {
  type: "user-sign-in" | "user-sign-up" | "admin-sign-in";
};
export { OwnProps as SessionFormProps };

type DispatchProps = {
  onUserSigninSubmit: (phoneNumber: string, password: string) => any;
  onUserSignupSubmit: (
    fullName: string,
    phoneNumber: string,
    password: string,
    emailAddress: string,
  ) => any;
  onAdminSigninSubmit: (phoneNumber: string, password: string) => any;
};

type StateProps = {
  isSubmitting: boolean;
};

type Props = OwnProps & DispatchProps & StateProps & RouteComponentProps<{}>;

type Fields = { element: ReactElement<TextFieldProps>; name: keyof Values }[];

const initialValues: Values = {
  fullName: "",
  phoneNumber: "",
  password: "",
  passwordVerify: "",
  emailAddress: "",
};

const handleFormSubmit = (values: Values) => {
  /* tslint:disable-next-line:no-console */
  console.log("values", values);
};

const SessionForm: SFC<Props> = props => {
  const { type } = props;
  const title = "Form Title";

  const fieldProps = getLocalizedFieldProps(type);

  const fields = (Object.keys(initialValues) as (keyof Values)[])
    .map(name => {
      if (name === "fullName" && type !== "user-sign-up") return null;
      if (name === "passwordVerify" && type !== "user-sign-up") return null;

      return {
        name,
        element: <TextField key={name} name={name} {...fieldProps[name]} />,
      };
    })
    .filter(f => f !== null) as Fields;

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, handleChange, handleBlur, errors }) => (
        <form onSubmit={handleSubmit}>
          <CardMobileFlat>
            <CardHeader title={<FormHeader>{title}</FormHeader>} />

            <CardContent>
              {fields.map(({ name, element }) =>
                cloneElement(element, {
                  error: errors[name],
                  label: errors[name],
                  onChange: handleChange,
                  onBlur: handleBlur,
                }),
              )}
            </CardContent>
          </CardMobileFlat>
        </form>
      )}
    </Formik>
  );
};

const noop = () => {
  //
};

const SessionFormContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ session }) => ({ isSubmitting: session.isSubmitting }),
  {
    onUserSigninSubmit: noop,
    onUserSignupSubmit: noop,
    onAdminSigninSubmit: noop,
  },
)(SessionForm);

const SessionFormContainerWithRouter = withRouter(SessionFormContainer);
export { SessionFormContainerWithRouter as SessionForm };
