import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import { FormikConsumer } from "formik";
import styled from "styled-components";

export function AuthenticationFormButton(props: ButtonProps) {
  return (
    <FormikConsumer>
      {form => <StyledButton disabled={form.isSubmitting} {...props} />}
    </FormikConsumer>
  );
}

const StyledButton = styled(Button)`
  padding: 8px 32px;
  background-color: ${grey[50]};
  font-size: 12px;

  :hover {
    background-color: ${grey[200]};
  }
`;
