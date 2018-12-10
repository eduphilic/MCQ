import { LayoutLanding, Typography } from "@join-uniform/components";
import { css } from "@join-uniform/theme";
import React from "react";

export default function IndexPage() {
  return (
    <LayoutLanding>
      <Typography
        variant="h1"
        css={css`
          display: none;
        `}
      >
        Placeholder
      </Typography>
    </LayoutLanding>
  );
}
