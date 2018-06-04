import { createStore } from "utils";

export const PageTitleStore = createStore(
  { title: "" },
  {
    setTitle: (title: string) => () => ({
      title,
    }),
  },
  "PageTitleStore",
);

export const PageTitleSetter = PageTitleStore.createSetter("title");
