import React from "react";
import { ThemeProviderDark } from "site-components/theme";
import styled from "styled-components";
import heroImageJpg from "site-components/assets/heroImage.jpg";

const OnboardingDarkBackdropBase = styled.div`
  color: #f2f2f2;
  background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url("${heroImageJpg}");
  background-size: cover;
  padding: 24px;
`;

/* eslint-disable-next-line import/prefer-default-export, react/prop-types */
export const OnboardingDarkBackdrop = ({ children }) => (
  <ThemeProviderDark>
    <OnboardingDarkBackdropBase>{children}</OnboardingDarkBackdropBase>
  </ThemeProviderDark>
);
