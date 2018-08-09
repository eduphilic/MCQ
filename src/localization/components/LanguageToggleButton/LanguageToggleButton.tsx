import React from "react";
import styled from "styled";

import { LanguageButton } from "./LanguageButton";

export type LanguageToggleButtonProps = {
  className?: string;
  popup?: boolean;
  localizationLanguage: "en" | "hi";
  onLocalizationLanguageChange: (language: "en" | "hi") => any;
};

export const LanguageToggleButton = styled<LanguageToggleButtonProps>(
  ({ className, localizationLanguage, onLocalizationLanguageChange }) => (
    <div className={className}>
      <LanguageButton
        selected={localizationLanguage === "hi"}
        onClick={() => onLocalizationLanguageChange("hi")}
      >
        हिंदी
      </LanguageButton>

      <LanguageButton
        selected={localizationLanguage === "en"}
        onClick={() => onLocalizationLanguageChange("en")}
      >
        English
      </LanguageButton>
    </div>
  ),
)`
  ${({ popup }) =>
    popup
      ? `
          display: flex;
          flex-direction: column;
          padding: 4px;

          & > *:not(:last-child) {
            margin-bottom: 4px;
          }
        `
      : `
          & > *:not(:last-child) {
            margin-right: 4px;
          }
        `};
`;
