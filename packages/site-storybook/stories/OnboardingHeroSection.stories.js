import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Typography from "material-ui/Typography";
import styled from "styled-components";
import OnboardingHeroSection from "site-components/OnboardingHeroSection";

storiesOf("Components", module).add(
  "OnboardingHeroSection",
  withInfo({})(() => (
    <OnboardingHeroSection
      onboardingTextNode={<Placeholder>Text Section Contents</Placeholder>}
      onboardingFormNode={<Placeholder>Sign-up / Sign-in Contents</Placeholder>}
    />
  )),
);

const Placeholder = styled(Typography).attrs({ variant: "body1" })`
  display: flex;
  align-items: center;
  height: 400px;
`;
