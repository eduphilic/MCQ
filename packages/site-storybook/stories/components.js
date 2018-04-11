import React from "react";
import { ThemeProviderDark } from "site-components/theme";
import styled from "styled-components";

const OnboardingDarkBackdropBase = styled.div`
  color: #f2f2f2;
  background-color: #000;
  padding: 24px;

  h1,
  h2,
  h3 {
    color: #fff;
  }
`;

/* eslint-disable-next-line import/prefer-default-export, react/prop-types */
export const OnboardingDarkBackdrop = ({ children }) => (
  <ThemeProviderDark>
    <OnboardingDarkBackdropBase>{children}</OnboardingDarkBackdropBase>
  </ThemeProviderDark>
);
