import React, { Component, createContext } from "react";
import { Helmet } from "react-helmet";

export interface PageTitleApi {
  /**
   * Page title.
   */
  title: string;

  /**
   * Sets page title.
   */
  setTitle: (title: string) => void;
}

const PageTitleContext = createContext<PageTitleApi | null>(null);

/**
 * Keeps track of the page title. Provides the current page title through the
 * use of a React context so that the title can be used in presentational
 * components.
 */
export class PageTitleProvider extends Component {
  state = { title: "" };

  setTitle: PageTitleApi["setTitle"] = title => this.setState({ title });

  render() {
    const { title } = this.state;

    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <PageTitleContext.Provider value={{ setTitle: this.setTitle, title }}>
          {this.props.children}
        </PageTitleContext.Provider>
      </>
    );
  }
}

export const PageTitleConsumer = PageTitleContext.Consumer;
