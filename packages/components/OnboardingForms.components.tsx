import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import styled from "styled";
import { FlatTextField } from "./atoms/FlatTextField";

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

export const FormInput = FlatTextField;

export const FormButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.unit * 2}px;
`;

export const FormButton = styled(Button).attrs({
  classes: {
    label: "label",
  },
  size: "small",
  variant: "raised",
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
