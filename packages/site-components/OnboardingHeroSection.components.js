import styled from "styled-components";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import heroImageJpg from "./assets/heroImage.jpg";

export const Section = styled.section`
  padding: 24px;
  background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url("${heroImageJpg}");
  background-size: cover;
`;

export const ContentsContainer = styled(Grid).attrs({
  container: true,
})``;

export const PageTitleContainer = styled(Grid).attrs({
  item: true,
  xs: 12,
})``;

export const PageTitle = styled(Typography).attrs({
  variant: "title",
})``;

export const OnboardingContainer = styled(Grid).attrs({
  item: true,
  xs: 12,
  container: true,
})``;

export const OnboardingTextSection = styled(Grid).attrs({
  item: true,
  xs: 12,
  md: 8,
})``;

export const OnboardingFormSection = styled(Grid).attrs({
  item: true,
  xs: 12,
  md: 4,
})``;
