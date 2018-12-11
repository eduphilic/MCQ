import { PageProps } from "next/document";
import { MUICssContext } from "./material-ui";

export type RenderingPageProps = PageProps & {
  muiCssContext?: MUICssContext;
};
