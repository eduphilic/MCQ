import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";

const LogoTextBase = styled(Typography).attrs({
  children: strings.heroHeader,
  variant: "headline",
})`
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
`;

export interface LogoTextProps {
  /** Allows override of styles. */
  className?: string;
}

/**
 * Logo text used in Logo component.
 */
export const LogoText: SFC<LogoTextProps> = ({ className }) => (
  <LogoTextBase className={className} />
);
