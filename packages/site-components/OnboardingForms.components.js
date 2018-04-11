import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import styled from "styled-components";

export const FormsContainer = styled.article`
  display: flex;
  flex-direction: column;

  & form:not(:first-child) {
    margin-top: ${props => props.theme.spacing.unit * 2}px;
  }
`;

export const FormPaper = styled(Paper).attrs({ elevation: 0 })`
  padding: ${props => props.theme.spacing.unit * 2}px;
`;

export const FormTitle = styled(Typography).attrs({
  variant: "title",
})`
  margin-bottom: ${props => props.theme.spacing.unit}px;
  font-size: 16px;
  text-transform: uppercase;
`;

export const FormInput = styled(TextField).attrs({
  fullWidth: true,
  InputProps: {
    disableUnderline: true,
    classes: {
      root: "root",
      input: "input",
    },
  },
})`
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

  .input::placeholder {
    color: #828282;
    opacity: 1;
  }

  .input:focus {
    border-color: #f9d017;
    box-shadow: 0 0 0 0.05rem rgba(249, 208, 23, 0.25);
  }
`;

export const FormButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.unit * 2}px;
`;

export const FormButton = styled(Button).attrs({
  variant: "raised",
  size: "small",
  classes: {
    label: "label",
  },
})`
  height: 30px;
  padding: 8px 32px;
  background-color: transparent;

  &:hover {
    background-color: #f3f3f3;
  }

  .label {
    font-size: 12px;
    text-transform: none;
  }
`;

export const FormPasswordResetButton = styled(FormButton).attrs({
  variant: undefined,
})`
  padding: 8px 8px;
`;
