import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";

const HeroLogoTextBase = styled(Typography).attrs({
  children: strings.heroHeader,
  variant: "headline",
})`
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
`;

export const HeroLogoText: SFC<{ className?: string }> = ({ className }) => (
  <HeroLogoTextBase className={className} />
);
