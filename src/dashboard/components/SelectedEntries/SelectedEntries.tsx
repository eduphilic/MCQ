import React, { SFC } from "react";
import styled from "styled";
import { IEntry } from "../../models/IEntry";
import { IEntrySelectMeta } from "../../models/IEntrySelectMeta";

import Paper from "@material-ui/core/Paper";

import { BlockImage } from "components/BlockImage";
import { Typography } from "components/Typography";

export type SelectedEntriesProps = {
  entries: IEntry[];
  entrySelectMeta: IEntrySelectMeta;
  selectedEntryIDs: string[];
  onEntryRemoveButtonClick: (entryID: string) => any;
  onAddMoreButtonClick: () => any;
};

export const SelectedEntries: SFC<SelectedEntriesProps> = props => {
  const { entries, selectedEntryIDs } = props;

  const selectedEntries = entries.filter(e => selectedEntryIDs.includes(e.id));

  return (
    <>
      <StyledPaper>
        {selectedEntries.map(entry => (
          <EntryWrapper key={entry.id}>
            <StyledBlockImage src={entry.logoUrlByWidth["48"]} />

            {/* TODO: Select correct localization. */}
            <Typography>{entry.title.en}</Typography>
          </EntryWrapper>
        ))}
      </StyledPaper>
    </>
  );
};

const StyledPaper = styled(Paper)`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit / 2}px;
`;

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }

  > *:last-child {
    margin-top: ${({ theme }) => theme.spacing.unit / 2}px;
  }
`;

const StyledBlockImage = styled(BlockImage)`
  width: 100px;
  height: 100px;
  padding: 26px;
  background-color: ${({ theme }) => theme.palette.grey["200"]};
`;
