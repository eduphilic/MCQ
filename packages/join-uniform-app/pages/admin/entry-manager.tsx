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
import { AddIcon, DashboardIcon } from "@join-uniform/icons";
import { css } from "@join-uniform/theme";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { AdminLayoutDashboardContainer } from "~/containers";
import { createResponsiveImageUrl, withQueryLoadingSpinner } from "~/lib/utils";

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
          iconNode={<EntryLogoImageIcon logoUrl={entry.logoUrl} />}
          columnLabels={["Category", "Cost Per Paper (Rs)", "Activated"]}
          columnTypes={["dual-line", "single-line", "switch"]}
          onItemEditClick={categoryId => {
            Router.push(`/admin/entry-manager/edit?categoryId=${categoryId}`);
          }}
          onRequestDeleteClick={categoryIds => {
            /* tslint:disable-next-line:no-console */
            console.log({ categoryIds });
            alert("Deletion placeholder");
          }}
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
                  switchOnChange: checked => {
                    /* tslint:disable-next-line:no-console */
                    console.log({ checked });
                    alert("Toggle placeholder.");
                  },
                },
              ],
            }),
          )}
        />
      </Grid>
    );
  }
}

const cardLogoImageSize = 64;
const cardLogoImgCss = css`
  display: block;
  width: ${cardLogoImageSize}px;
  height: ${cardLogoImageSize}px;
  margin-top: 8px;
  margin-left: -16px;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    margin-left: -8px;
  }
`;

function EntryLogoImageIcon(props: { logoUrl: string }) {
  const { logoUrl } = props;

  if (!logoUrl) return <DashboardIcon css={cardLogoImgCss} />;

  const src = createResponsiveImageUrl(logoUrl, {
    w: "64",
    h: "64",
    format: "png",
  });

  return <img src={src} css={cardLogoImgCss} />;
}
