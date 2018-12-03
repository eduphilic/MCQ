// import { Grid } from "@join-uniform/components";
import { styled } from "@join-uniform/theme";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Link from "next/link";
import React, { FC } from "react";
import { Html } from "../layouts";

export default function() {
  return (
    <Html title="Test">
      {/* <Grid>Test</Grid> */}
      <p>Index Page</p>
      <StyledButton title="test">Test</StyledButton>
      <Link href="/page2">
        <a>Page 2</a>
      </Link>
    </Html>
  );
}

const StyledButton = styled(Button as FC<ButtonProps>)`
  color: red;
`;
