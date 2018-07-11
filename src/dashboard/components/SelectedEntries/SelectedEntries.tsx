import React, { SFC } from "react";
import styled, { css } from "styled";
import { IEntry } from "../../models/IEntry";
import { IEntrySelectMeta } from "../../models/IEntrySelectMeta";

// import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

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
  const {
    entries,
    entrySelectMeta,
    selectedEntryIDs,
    onEntryRemoveButtonClick,
    onAddMoreButtonClick,
  } = props;

  const selectedEntries = entries.filter(e => selectedEntryIDs.includes(e.id));
  const isDeleteEnabled =
    selectedEntries.length - 1 >= entrySelectMeta.minEntriesCount;
  const isAddMoreEnabled =
    selectedEntries.length < entrySelectMeta.maxEntriesCount;

  return (
    <>
      <TabletWrapper>
        {selectedEntries.map(entry => (
          <EntryButton
            key={entry.id}
            disabled={!isDeleteEnabled}
            onClick={() => onEntryRemoveButtonClick(entry.id)}
          >
            <StyledBlockImage src={entry.logoUrlByWidth["48"]} />

            {isDeleteEnabled && (
              <StyledAvatar>
                <Remove />
              </StyledAvatar>
            )}

            {/* TODO: Select correct localization. */}
            <Typography>{entry.title.en}</Typography>
          </EntryButton>
        ))}

        {isAddMoreEnabled && (
          <EntryButton onClick={onAddMoreButtonClick}>
            <AddMoreBlock>
              <Add />
            </AddMoreBlock>

            {/* TODO: Select correct localization. */}
            <Typography>Add More</Typography>
          </EntryButton>
        )}
      </TabletWrapper>
    </>
  );
};

const TabletWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit / 2}px;
`;

const EntryButton = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: initial;
  }

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }

  > *:last-child {
    margin-top: ${({ theme }) => theme.spacing.unit / 2}px;
  }
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: -4px;
  top: -4px;
`;

const blockStyle = css`
  width: 100px;
  height: 100px;
  padding: 26px;
  background-color: ${({ theme }) => theme.palette.grey["200"]};
`;

const StyledBlockImage = styled(BlockImage)`
  ${blockStyle};
`;

const AddMoreBlock = styled.div`
  ${blockStyle};
  padding: 16px;

  svg {
    width: 100%;
    height: 100%;
    fill: #828282;
  }
`;
