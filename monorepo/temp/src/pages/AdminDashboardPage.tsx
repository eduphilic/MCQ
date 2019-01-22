import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";

const AdminDashboardPage: SFC<RouteComponentProps> = () => (
  <DashboardLayout>
    <div>Admin Dashboard Page Placeholder</div>
  </DashboardLayout>
);

export default AdminDashboardPage;
