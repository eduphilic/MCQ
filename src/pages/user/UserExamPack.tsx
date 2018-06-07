import React from "react";
import { PageTitleSetter } from "stores";

import { DashboardAppBarIconGroup } from "components/DashboardAppBarIconGroup";

export const UserExamPack = () => (
  <>
    <PageTitleSetter title="Exam Pack" />

    <DashboardAppBarIconGroup iconGroupKey="test-button">
      <button>Test</button>
    </DashboardAppBarIconGroup>

    <div>Placeholder</div>
  </>
);
