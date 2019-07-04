import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Field, FieldProps } from "formik";
import React from "react";
import styled from "styled-components";
import { AuthenticationFormLink } from "./AuthenticationFormLink";
import {
  AuthenticationFormTooltip,
  AuthenticationFormValues,
} from "./AuthenticationFormTooltip";

type Props<V extends AuthenticationFormValues> = {
  name: keyof V;
};

export function AuthenticationFormTerms<V extends AuthenticationFormValues>(
  props: Props<V>,
) {
  const { name } = props;

  return (
    <Field name={name}>
      {({ field, form }: FieldProps<V>) => (
        <AuthenticationFormTooltip name={name}>
          <StyledFormControlLabel
            {...field}
            disabled={form.isSubmitting}
            control={<StyledCheckbox />}
            label={
              <span>
                I agree to the{" "}
                <AuthenticationFormLink
                  to="/terms-conditions"
                  disabled={form.isSubmitting}
                >
                  Join Uniform Terms
                </AuthenticationFormLink>
              </span>
            }
          />
        </AuthenticationFormTooltip>
      )}
    </Field>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 12px;
    user-select: none;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiFormControlLabel-label {
      font-size: 14px;
    }
  }
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 0;
  margin-right: 8px;
  border-radius: 0;
`;
