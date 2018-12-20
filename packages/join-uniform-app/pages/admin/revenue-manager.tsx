import { css } from "@join-uniform/theme";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../containers";

export default function AdminRevenueManagerPage() {
  return (
    <AdminLayoutDashboardContainer title="Revenue Manager">
      <div
        css={css`
          display: none;
        `}
      >
        Page Contents
      </div>
    </AdminLayoutDashboardContainer>
  );
}
