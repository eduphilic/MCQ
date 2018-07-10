import { actions as localizationActions } from "localization";
import React from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";

import Button, { ButtonProps } from "@material-ui/core/Button";

import { CheckmarkableCircle } from "components/CheckmarkableCircle";

type StateProps = {
  localizationLanguage: "en" | "hi";
};

type DispatchProps = {
  onLocalizationLanguageChange: (language: "en" | "hi") => any;
};

type OwnProps = {
  className?: string;
};
export { OwnProps as LanguageToggleButtonProps };

type Props = StateProps & DispatchProps & OwnProps;

const LanguageToggleButton = styled<Props>(props => {
  const {
    className,
    localizationLanguage,
    onLocalizationLanguageChange,
  } = props;

  return (
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
  );
})`
  > *:not(:last-child) {
    margin-right: 4px;
  }
`;

const LanguageToggleButtonContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ localization }) => ({
    localizationLanguage: localization.localizationLanguage,
  }),
  { onLocalizationLanguageChange: localizationActions.setLocalizationLanguage },
)(LanguageToggleButton);
export { LanguageToggleButtonContainer as LanguageToggleButton };

const LanguageButton = styled<ButtonProps & { selected: boolean }>(
  ({ children, selected, ...rest }) => (
    <Button
      variant="outlined"
      classes={{ label: "language-button-label" }}
      {...rest}
    >
      <span>{children}</span>

      <CheckmarkableCircle checked={selected} />
    </Button>
  ),
)`
  width: 125px;
  text-transform: capitalize;

  .language-button-label {
    display: flex;
    justify-content: space-between;
  }
`;
