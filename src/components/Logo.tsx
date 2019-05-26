import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logoImage48 from "./__assets__/logo48.png";
import logoImage64 from "./__assets__/logo64.png";

type Props = {
  className?: string;

  /**
   * Logo image dimensions.
   *
   * @default 48
   */
  size?: 48 | 64;

  /**
   * Render logo using both primary and secondary theme colors rather than just
   * the primary theme color.
   *
   * @default false
   */
  twoTone?: boolean;

  /**
   * Add optional text shadow.
   *
   * @default false
   */
  shadowed?: boolean;
};

function LogoImpl(props: Props) {
  const { size = 48, twoTone = false } = props;

  return (
    <div className={props.className}>
      <LogoImage
        size={size}
        src={size === 48 ? logoImage48 : logoImage64}
        alt=""
      />
      <LogoText component="span" color="primary">
        Join
      </LogoText>
      <LogoText component="span" color={twoTone ? "secondary" : "primary"}>
        Uniform
      </LogoText>
    </div>
  );
}

const LogoImage = styled.img<Required<Pick<Props, "size">>>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

/**
 * Site logo.
 */
export const Logo = styled(LogoImpl)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${({ shadowed }) => shadowed && "text-shadow: 1px 1px #000"};

  ${LogoImage} {
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const LogoText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;
