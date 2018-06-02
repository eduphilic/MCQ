import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import strings from "l10n";
import React, { SFC } from "react";
import styled from "styled";

// FIXME: Base this on ResponsiveToolbarTypographyButton.

export interface LogoutButtonProps {
  className?: string;

  /** Called when clicked. */
  onClick?: () => void;

  /** Hide description text even on non-mobile. */
  dense?: boolean;
}

/** Logout button. */
export const LogoutButton: SFC<LogoutButtonProps> = props => {
  const { className, onClick, dense } = props;

  // Wrap button contents in tooltip on mobile.
  // Hide text on mobile.
  // Treat dense mode as mobile always.
  const LogoutButtonWithWidth = withWidth()(({ width }) => {
    const isMobile = dense || isWidthDown("xs", width);

    const button = (
      <StyledButton className={className} onClick={onClick}>
        <PowerSettingsNew />
        {!isMobile && (
          <>
            <Padding />
            {strings.logoutButtonText}
          </>
        )}
      </StyledButton>
    );

    return isMobile ? <Tooltip title="Logout">{button}</Tooltip> : button;
  });

  return <LogoutButtonWithWidth />;
};

const Padding = styled.div`
  width: ${props => props.theme.spacing.unit}px;
`;

const StyledButton = styled(Button)`
  min-width: inherit;
  margin-right: -12px;
  color: #910f0f;
  text-transform: none;
`;
