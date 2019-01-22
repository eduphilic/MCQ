import { css } from "@join-uniform/theme";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../containers";

export default function AdminDashboardPage() {
  return (
    <AdminLayoutDashboardContainer title="Dashboard">
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
