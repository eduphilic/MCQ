import { Component } from "react";
import { PageTitleApi } from "../PageTitleConsumer";

export interface PageTitleSetterProps {
  /**
   * Page title.
   */
  title: string;

  pageTitleApi?: PageTitleApi | null;
}

export class PageTitleSetter extends Component<PageTitleSetterProps> {
  state = {};

  static getDerivedStateFromProps(props: PageTitleSetterProps) {
    const { pageTitleApi } = props;
    if (!pageTitleApi) throw new Error("Used outside of provider.");

    const { title, setTitle } = pageTitleApi;
    const { title: nextTitle } = props;

    if (title !== nextTitle) setTitle(nextTitle);

    return null;
  }

  render() {
    return null;
  }
}
