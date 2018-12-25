import { Button, DashboardCard, Typography } from "@join-uniform/components";
import { styled } from "@join-uniform/theme";
import React, { useMemo } from "react";
import slugify from "slugify";
import { createResponsiveImageUrl } from "../utils";

export type EntryManagementCardProps = {
  entryId: string;
  entryName: string;
  entryLogoUrl: string;
  deleteEntryButtonDisabled: boolean;
  onEditEntryClick: (entryId: string) => void;
  onDeleteEntryClick: (entryId: string) => void;
};

export function EntryManagementCard(props: EntryManagementCardProps) {
  const {
    entryId,
    entryName,
    entryLogoUrl,
    deleteEntryButtonDisabled,
    onEditEntryClick,
    onDeleteEntryClick,
  } = props;

  const sluggedEntry = useMemo(() => `#${slugify(entryName).toLowerCase()}`, [
    entryName,
  ]);

  return (
    <DashboardCard
      title={`${entryName} Entry`}
      titleSiblingNode={
        <Typography variant="subtitle2" color="textSecondary">
          {sluggedEntry}
        </Typography>
      }
      iconNode={<EntryLogoImage logoUrl={entryLogoUrl} />}
      columnLabels={["Category", "Cost Per Paper (Rs)", "Activated"]}
      columnTypes={["dual-line", "single-line", "switch"]}
      bottomActionsNode={
        <>
          <Button onClick={() => onEditEntryClick(entryId)}>Edit Entry</Button>
          <Button
            disabled={deleteEntryButtonDisabled}
            onClick={() => onDeleteEntryClick(entryId)}
          >
            Delete Entry
          </Button>
        </>
      }
      items={[]}
    />
  );
}

const ENTRY_LOGO_MARGIN = 8;

const EntryLogoImage = styled(
  (props: { className?: string; logoUrl: string }) => {
    const { className, logoUrl } = props;

    const optimizedUrl = useMemo(
      () =>
        createResponsiveImageUrl(logoUrl, { w: "64", h: "64", format: "png" }),
      [logoUrl],
    );

    return <img className={className} src={optimizedUrl} />;
  },
)`
  display: block;
  width: ${56 - ENTRY_LOGO_MARGIN}px;
  height: ${56 - ENTRY_LOGO_MARGIN}px;

  ${({ theme }) => theme.breakpoints.up("xs")} and (orientation: landscape) {
    width: ${48 - ENTRY_LOGO_MARGIN}px;
    height: ${48 - ENTRY_LOGO_MARGIN}px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: ${64 - ENTRY_LOGO_MARGIN}px;
    height: ${64 - ENTRY_LOGO_MARGIN}px;
  }
`;
