import strings from "l10n";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import React, { ChangeEventHandler, Component, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled";
import { Button } from "../../atoms/Button";
import { FormHeader } from "../../atoms/FormHeader";
import { TextField } from "../../atoms/TextField";

export interface FormField {
  name: string;
  description: string;
  placeholder: string;
  type?: "text" | "tel" | "password" | "email";
}

export interface AuthenticationFormProps {
  /** Form header label. */
  title: string;
  /** Input fields. */
  fields: FormField[];
  /**
   * React Router link to the right of the Submit button for a secondary action
   * like performing a password reset.
   */
  secondaryAction?: {
    href: string;
    label: string;
  };
  /** Called on form submit with field name / value pairs. */
  onSubmit: (values: { [key: string]: string }) => void;
}

interface AuthenticationFormState {
  values: { [key: string]: string };
  errors: { [key: string]: string };
}

/**
 * Provides an input form for use on the landing page and admin login page
 * with basic validation.
 *
 * Accepts an optional secondary action (password reset link) for use with React
 * Router.
 */
export class AuthenticationForm extends Component<
  AuthenticationFormProps,
  AuthenticationFormState
> {
  constructor(props: AuthenticationFormProps) {
    super(props);

    const initialValues = props.fields.map(f => f.name).reduce(
      (acc, name) => {
        acc[name] = "";
        return acc;
      },
      // tslint:disable-next-line:no-object-literal-type-assertion
      {} as AuthenticationFormState["values"],
    );
    const initialErrors = { ...initialValues };

    this.state = { values: initialValues, errors: initialErrors };
  }

  handleFormSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const { errors, values } = this.state;
    let hasError = false;

    Object.entries(values).forEach(([name, value]) => {
      const desc = this.props.fields.find(f => f.name === name)!.description;

      /* tslint:disable-next-line:no-console */
      if (value.trim() === "") {
        // tslint:disable-next-line:no-invalid-template-strings
        const errorMessage = strings.formFieldIsRequired.replace("${1}", desc);
        errors[name] = errorMessage;
        hasError = true;
      } else errors[name] = "";
    });

    let valuesForSubmission: typeof values | null = null;
    if (!hasError) {
      valuesForSubmission = { ...values };

      // Clear any password fields on submission.
      this.props.fields.forEach(f => {
        if (f.type !== "password") return;
        values[f.name] = "";
      });
    }
    this.setState({ errors, values });

    if (valuesForSubmission) this.props.onSubmit(valuesForSubmission);
  };

  handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { target } = event;

    const values = { ...this.state.values };
    values[target.name] = target.value;

    // Clear errors on typing
    const errors = { ...this.state.errors };
    Object.keys(errors).forEach(name => {
      errors[name] = "";
    });

    this.setState({ errors, values });
  };

  render() {
    const { title, fields, secondaryAction } = this.props;

    const textFields = fields.map(f => {
      const { name, placeholder, type } = f;
      const value = this.state.values[name];
      const error = this.state.errors[name];
      const hasError = Boolean(error);

      return (
        <TextField
          key={name}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={this.handleChange}
          value={value}
          error={hasError}
          label={error}
        />
      );
    });

    const secondaryActionLink = secondaryAction ? (
      <Link to={secondaryAction.href} style={{ marginLeft: "auto" }}>
        <Button variant="flat">{secondaryAction.label}</Button>
      </Link>
    ) : null;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Card>
          <CardHeader title={<FormHeader>{title}</FormHeader>} />
          <CardContent>{textFields}</CardContent>
          <CardActionsMarginBottom>
            <Button type="submit">Submit</Button>
            {secondaryActionLink}
          </CardActionsMarginBottom>
        </Card>
      </form>
    );
  }
}

export default AuthenticationForm;

const CardActionsMarginBottom = styled(CardActions)`
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  padding-bottom: ${props => props.theme.spacing.unit * 2}px;

  ${props => props.theme.breakpoints.up("sm")} {
    padding-left: ${props => props.theme.spacing.unit * 3}px;
  }
`;
