import Grid from "material-ui/Grid";
import { RadioGroup } from "material-ui/Radio";
import Typography from "material-ui/Typography";

import styled from "styled";

export const SelectionContainer = styled(Grid).attrs({
  container: true,
})``;

export const SelectionSectionContainer = styled(Grid).attrs({
  item: true,
  xs: true,
  // xs: 12,
  // sm: 6,
  // md: 6,
})`
  margin: auto 0;

  &:first-child {
    flex-grow: 0;
  }

  &:first-child h3 {
    white-space: nowrap;
    margin-right: 20px;
  }
`;

export const SelectionLabel = styled(Typography).attrs({
  variant: "subheading",
})``;

export const SelectionRadioGroup = styled(RadioGroup).attrs({
  "aria-label": "Select preferred language",
  row: true,
})`
  /* justify-content: space-around; */
`;
