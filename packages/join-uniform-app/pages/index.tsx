// import { Grid } from "@join-uniform/components";

import Button from "@material-ui/core/Button";
import React from "react";
// import { styled } from "@join-uniform/theme";
import styled from "styled-components";
import { Html } from "../layouts";

export default function() {
  return (
    <Html title="Test">
      {/* <Grid>Test</Grid> */}
      <p>Index Page</p>
      <StyledButton title="test">Test</StyledButton>
      <Button title="test">Test</Button>
    </Html>
  );
}

const StyledButton = styled(Button)`
  color: red;
`;
