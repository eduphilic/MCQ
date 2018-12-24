import { DashboardCard, Typography } from "@join-uniform/components";
import React, { useMemo } from "react";
import slugify from "slugify";

export type EntryManagementCardProps = {
  entryName: string;
};

export function EntryManagementCard(props: EntryManagementCardProps) {
  const { entryName } = props;

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
      iconNode={<div>Entry Icon Node</div>}
      columnLabels={["Category", "Cost Per Paper (Rs)", "Activated"]}
      columnTypes={["dual-line", "single-line", "switch"]}
      // bottomActionsNode
      items={[]}
    />
  );
}
