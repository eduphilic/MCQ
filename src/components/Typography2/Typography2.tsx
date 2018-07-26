import React, { SFC } from "react";
import styled from "styled";
import { styleTable } from "./styleTable";
import { Style, Variant } from "./types";

export { Variant as Typography2Variant };

export type Typography2Props = {
  className?: string;

  style?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >["style"];

  /** Variant (scale category). */
  variant?: keyof typeof Variant;
};

/**
 * Typography component based on the second iteration of the Material Design
 * specifications.
 *
 * @see https://material.io/design/typography/the-type-system.html
 */
export const Typography2: SFC<Typography2Props> = (props: Typography2Props) => {
  const { variant = Variant.Body1, ...rest } = props;

  const TypographyComponent = styles[variant];

  return <TypographyComponent {...rest} />;
};

const styles: Record<Variant, Style> = Object.entries(styleTable).reduce(
  (accumulator, [variantKey, [typeface, font, size, casing, spacing]]) => {
    const variant = variantKey as Variant;

    accumulator[variant] = styled.span`
      font-family: ${typeface};
      font-weight: ${font};
      font-size: ${size / 16}rem;
      ${casing === "all caps" && "text-transform: uppercase"};
      letter-spacing: ${spacing / size}rem;
    `;

    return accumulator;
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  {} as Record<Variant, Style>,
);
