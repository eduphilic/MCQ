import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
  to: string;
  disabled?: boolean;
};

export function AuthenticationFormLink(props: Props) {
  const { children, to, disabled } = props;

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <Link href={to} passHref>
      <StyledA>{children}</StyledA>
    </Link>
  );
}

const StyledA = styled.a`
  color: #0061ff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
