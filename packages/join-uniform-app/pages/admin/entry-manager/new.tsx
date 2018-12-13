import { PendingChangesButton } from "@join-uniform/components";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../../containers";

export default function EntryManagerNew() {
  return (
    <AdminLayoutDashboardContainer
      title="New Entry"
      appBarButtons={[
        <PendingChangesButton
          hasDiscardableChanges
          hasPublishableChanges
          onDiscardButtonClick={() => {}} // tslint:disable-line:no-empty
          onPublishButtonClick={() => {}} // tslint:disable-line:no-empty
        />,
      ]}
    >
      <div>New Entry Page</div>
    </AdminLayoutDashboardContainer>
  );
}
