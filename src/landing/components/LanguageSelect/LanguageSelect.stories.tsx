import { withState } from "@dump247/storybook-state";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SplitThemesPreviewer } from "components/SplitThemesPreviewer/index";
import { LanguageSelect, LanguageSelectProps } from "./LanguageSelect";

storiesOf("Landing", module).add(
  "LanguageSelect",
  withState<{ language: LanguageSelectProps["language"] }>(
    { language: "english" },
    withInfo()(((store: any) => (
      <SplitThemesPreviewer>
        <LanguageSelect
          language={store.state.language}
          onChange={language => store.set({ language })}
        />
      </SplitThemesPreviewer>
    )) as any),
  ),
);
