import { css } from "@join-uniform/theme";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../containers";

export default function AdminIndexManagerPage() {
  return (
    <AdminLayoutDashboardContainer title="Index Manager">
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
