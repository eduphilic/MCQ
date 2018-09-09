import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import styled from "styled";

import Add from "@material-ui/icons/Add";
import { Typography } from "../Typography";
import { Button, ButtonProps, colors } from "./Button";

storiesOf("Components", module).add("Button", () => {
  //

  return (
    <div>
      <Wrapper>
        {(["text", "outlined", "contained", "fab"] as NonNullable<
          ButtonProps["variant"]
        >[]).map(variant => (
          <Fragment key={variant}>
            <Typography variant="H6" paragraph>
              {capitalize(variant)} Buttons
            </Typography>

            {colors.map(color => (
              <Button key={color} variant={variant} color={color}>
                {variant !== "fab" ? capitalize(color) : <Add />}
              </Button>
            ))}

            {variant === "fab" && (
              <Button key="fab" variant="extendedFab" color="red">
                <Add />
                Extended
              </Button>
            )}

            <Button key="disabled" variant={variant} disabled>
              {variant !== "fab" ? "Disabled" : <Add />}
            </Button>
          </Fragment>
        ))}
      </Wrapper>
    </div>
  );
});

const Wrapper = styled.div`
  padding: 3rem;
  background-color: #eee;

  button {
    margin-right: 16px;
    margin-bottom: 24px;
  }
`;

const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
