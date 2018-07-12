import { strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import Typography from "@material-ui/core/Typography";

const LogoTextBase = styled(Typography).attrs({
  children: strings.components_LogoText_HeroHeader,
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
