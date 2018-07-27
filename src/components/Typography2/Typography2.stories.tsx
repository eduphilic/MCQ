import { withInfo } from "@storybook/addon-info";
import { boolean, selectV2 } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { styleTable } from "./styleTable";
import { Face, Font } from "./types";
import { Typography2, Typography2Variant } from "./Typography2";

storiesOf("Components", module)
  .addDecorator((story, context) => withInfo({ source: false })(story)(context))
  .addDecorator(story => (
    <StorybookContentCenterWrapper>{story()}</StorybookContentCenterWrapper>
  ))
  .add("Typography2", () => {
    const align = selectV2(
      "Align",
      ["inherit", "left", "center", "right", "justify"],
      "inherit",
    );

    const color = selectV2(
      "Color",
      ["inherit", "primary", "secondary", "default", "textSecondary", "error"],
      "default",
    );

    const gutterBottom = boolean("Gutter Bottom", false);

    const noWrap = boolean("No Wrap", false);

    const paragraph = boolean("Paragraph", false);

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Scale Category</TableCell>
            <TableCell>Typeface</TableCell>
            <TableCell>Font</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Case</TableCell>
            <TableCell>Letter Spacing</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(Object.keys(Typography2Variant) as Typography2Variant[]).map(
            variant => {
              const [typeface, font, size, casing, spacing] = styleTable[
                variant
              ];

              return (
                <TableRow key={variant}>
                  <TableCell>
                    <Typography2
                      variant={variant}
                      align={align}
                      color={color}
                      gutterBottom={gutterBottom}
                      noWrap={noWrap}
                      paragraph={paragraph}
                    >
                      {variant}
                    </Typography2>
                  </TableCell>

                  <TableCell>{key(Face, typeface)}</TableCell>

                  <TableCell>
                    {key(Font, font)} ({font})
                  </TableCell>

                  <TableCell>
                    {size / 16}rem / {size}px
                  </TableCell>

                  <TableCell>{capitalize(casing)}</TableCell>

                  <TableCell>{spacing}</TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      </Table>
    );
  });

const key = <T extends object>(object: T, value: string) => {
  const name = Object.keys(object).find(
    k => (object as { [P: string]: string })[k] === value,
  );

  return name;
};

const capitalize = (s: string) => s.slice(0, 1).toUpperCase() + s.slice(1);