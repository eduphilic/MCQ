import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import styled from "styled-components";

export const SelectionContainer = styled(Grid).attrs({
  container: true,
})``;

export const SelectionSectionContainer = styled(Grid).attrs({
  item: true,
  xs: 12,
  md: 6,
})``;

export const SelectionLabel = styled(Typography).attrs({
  variant: "subheading",
})``;
