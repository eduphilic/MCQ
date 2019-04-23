// tslint:disable-next-line:import-name
import muiStyled from "@material-ui/styles/styled";
import {
  CSSProperties,
  StyledComponentProps,
  WithStylesOptions,
} from "@material-ui/styles/withStyles";
import { ElementType } from "react";
import { Omit } from "utility-types";
import { Theme } from "./themes";

/**
 * Copied from `@material-ui/styles/styled` but with the `Theme` generic
 * parameter set.
 */
type ThemedComponentCreator<C extends ElementType> = <Props extends {} = {}>(
  styles:
    | CSSProperties
    | (({ theme, ...props }: { theme: Theme } & Props) => CSSProperties),
  options?: WithStylesOptions<Theme>,
) => React.ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>,
    "classes" | "className"
  > &
    StyledComponentProps<"root"> & { className?: string }
>;

/**
 * Material UI `styled` function with the Theme generic parameter set.
 */
export const styled = muiStyled as <C extends ElementType>(
  Component: C,
) => ThemedComponentCreator<C>;
