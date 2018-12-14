import { Button } from "@join-uniform/components";
import {
  GetCategoryComponent,
  GetEntriesComponent,
} from "@join-uniform/graphql";
import { AddIcon } from "@join-uniform/icons";
import { css } from "@join-uniform/theme";
import Link from "next/link";
import React, { Fragment } from "react";
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
      {renderEntries()}
    </AdminLayoutDashboardContainer>
  );

  function renderEntries() {
    return withQueryLoadingSpinner(GetEntriesComponent, entriesResult =>
      entriesResult.data.entries.map(entry => (
        <Fragment key={entry.id}>
          <div>{entry.name}</div>
          {entry.categories.map(categoryId => renderCategory(categoryId))}
          <br />
        </Fragment>
      )),
    );
  }

  function renderCategory(categoryId: string) {
    return withQueryLoadingSpinner(
      GetCategoryComponent,
      { key: categoryId, variables: { id: categoryId } },
      categoryResult => (
        <div>{JSON.stringify(categoryResult.data.category || "", null, 2)}</div>
      ),
    );
  }
}