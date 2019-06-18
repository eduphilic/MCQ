import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import styled from "styled-components";

export type TextFieldBaseProps = TextFieldProps;

/**
 * Material UI text field, styled as a flat square input.
 */
export const TextFieldBase = styled(TextField).attrs(
  (): TextFieldProps => ({
    variant: "standard",
    InputProps: {
      disableUnderline: true,
    },
    fullWidth: true,
  }),
)`
  margin: ${props => props.theme.spacing(1)}px 0;

  .MuiInput-input {
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

  .MuiInput-input:disabled {
    background-color: #eee;
  }

  .MuiInput-input::placeholder {
    color: #828282;
    opacity: 1;
  }

  .MuiInput-input:focus {
    border-color: #f9d017;
    box-shadow: 0 0 0 0.05rem rgba(249, 208, 23, 0.25);
  }
`;
