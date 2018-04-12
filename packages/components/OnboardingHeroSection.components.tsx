import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import styled from "styled";
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
  container: true,
  item: true,
  xs: 12,
})``;

export const OnboardingTextSection = styled(Grid).attrs({
  item: true,
  md: 8,
  xs: 12,
})`
  display: flex;
  align-items: center;
`;

export const OnboardingFormSection = styled(Grid).attrs({
  item: true,
  md: 4,
  xs: 12,
})``;
