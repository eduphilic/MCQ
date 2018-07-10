import { BottomToolbarDock } from "navigation";
import React, { SFC } from "react";
// import { State } from "./reducer";
// import { connect } from "react-redux";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "components/TypographyButton";
import { EntrySelect } from "./components/EntrySelect";
import { createEntryPlaceholders } from "./placeholders/createEntryPlaceholders";

const entries = createEntryPlaceholders();

export const OnboardingEntriesPage: SFC<{}> = () => {
  //

  return (
    <BottomToolbarDock
      toolbarNode={
        <AppBar position="static" color="default">
          <Toolbar>
            <ButtonWrapper>
              <TypographyButton color="primary" filled>
                Next
              </TypographyButton>
            </ButtonWrapper>
          </Toolbar>
        </AppBar>
      }
    >
      <EntrySelect
        entries={entries}
        minSelectedCount={0}
        maxSelectedCount={3}
        // tslint:disable-next-line:no-empty
        onSelectionChange={() => {}}
      />
    </BottomToolbarDock>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1232px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
`;
