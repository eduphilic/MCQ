import StylesProvider from "@material-ui/styles/StylesProvider";
import { NextAppContext } from "next/app";
import React, {
  Component,
  ComponentClass,
  ComponentType,
  ReactNode,
} from "react";
import { isNextComponentType } from "../../util";
import { getPageContext, PageContext } from "./getPageContext";

type Props = {
  pageContext?: PageContext;
};

export type WithMaterialUI = {
  StyleProvider: ComponentType;
};

export function withMaterialUIApp<P>(App: ComponentType<P & WithMaterialUI>) {
  class AppWithMaterialUI extends Component<P & Props> {
    static async getInitialProps(context: NextAppContext) {
      let appProps = {};

      if (isNextComponentType(App)) {
        appProps = await App.getInitialProps!(context);
      }

      return appProps;
    }

    private pageContext: PageContext;

    constructor(props: P & Props) {
      super(props);
      this.pageContext = props.pageContext || getPageContext();
      this.styleProvider = this.styleProvider.bind(this);
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { pageContext, ...rest } = this.props;

      /* tslint:disable-next-line:no-unbound-method */
      return <App {...rest as P} StyleProvider={this.styleProvider} />;
    }

    styleProvider({ children }: { children?: ReactNode }) {
      return <StylesProvider {...this.pageContext}>{children}</StylesProvider>;
    }
  }

  return AppWithMaterialUI as ComponentClass<P>;
}
