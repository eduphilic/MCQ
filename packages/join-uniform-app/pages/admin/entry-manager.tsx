import {
  Button,
  DashboardCard,
  DashboardCardItem,
  Grid,
} from "@join-uniform/components";
import {
  GetEntriesComponent,
  GetEntriesEntries,
  GetEntryCategoriesComponent,
  GetEntryCategoriesEntryCategories,
} from "@join-uniform/graphql";
import { AddIcon } from "@join-uniform/icons";
import { css } from "@join-uniform/theme";
import Link from "next/link";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../containers";
import { withQueryLoadingSpinner } from "../../lib/utils";

export default function AdminIndexPage() {
  return (
    <AdminLayoutDashboardContainer
      title="Entry Manager"
      appBarButtons={[
        <Link href="/admin/entry-manager/new">
          <Button color="orange">
            {/* prettier-ignore */}
            <AddIcon css={css`margin-right: 8px;`} />
            Entry
          </Button>
        </Link>,
      ]}
    >
      <Grid container contentCenter spacing={16}>
        {/* {renderEntryCard()} */}
        {withQueryLoadingSpinner(GetEntriesComponent, entriesResult =>
          entriesResult.data.entries.map(entry =>
            withQueryLoadingSpinner(
              GetEntryCategoriesComponent,
              { key: entry.id, variables: { entryId: entry.id } },
              categoriesResult =>
                renderEntryCard(entry, categoriesResult.data.entryCategories),
            ),
          ),
        )}
      </Grid>
    </AdminLayoutDashboardContainer>
  );

  function renderEntryCard(
    entry: GetEntriesEntries,
    categories: GetEntryCategoriesEntryCategories[],
  ) {
    return (
      <Grid key={entry.id} item xs={12}>
        <DashboardCard
          title={`${entry.name} Entry`}
          columnLabels={["Category", "Cost Per Paper (Rs)", "Activated"]}
          columnTypes={["dual-line", "single-line", "switch"]}
          items={categories.map(
            (category): DashboardCardItem => ({
              key: category.id,
              columns: [
                {
                  primaryText: category.name,
                  secondaryText: category.education,
                },
                {
                  primaryText: category.pricePerPaperRs.toString(),
                },
                {
                  switchChecked: category.activated,
                  switchTooltipTitle: "Toggle Activation",
                },
              ],
            }),
          )}
        />
      </Grid>
    );
  }
}
