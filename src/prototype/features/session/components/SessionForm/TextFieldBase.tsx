import React, { SFC } from "react";
import styled from "styled-components";

// tslint:disable-next-line:import-name
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";

export type TextFieldBaseProps = TextFieldProps;

const TextFieldMuiBase: SFC<TextFieldBaseProps> = props => (
  <MuiTextField
    {...props}
    InputProps={{
      classes: { input: "input", root: "root" },
      disableUnderline: true,
    }}
    fullWidth
  />
);

/** Material UI text field styled as a flat square input. */
export const TextFieldBase = styled(TextFieldMuiBase)`
  margin: ${props => props.theme.spacing.unit}px 0;

  .root {
    padding: 0;
  }

  .input {
    width: calc(100% - 24px);
    height: inherit;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    background-color: #fcfcfc;
    transition: ${props =>
      props.theme.transitions.create(["border-color", "box-shadow"])};
  }

  .input:disabled {
    background-color: #eee;
  }

  .input::placeholder {
    color: #828282;
    opacity: 1;
  }

  .input:focus {
    border-color: #f9d017;
    box-shadow: 0 0 0 0.05rem rgba(249, 208, 23, 0.25);
  }
`;
