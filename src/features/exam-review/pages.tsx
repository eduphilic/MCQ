import { routePathFromLocalizationKey } from "features/navigation";
import React from "react";
import { Route } from "react-router-dom";
import { ExamReviewPage } from "./ExamReviewPage";

export const pages = [
  <Route
    key="exam-review-page"
    path={routePathFromLocalizationKey("routes_ExamReview_ExamReviewPage")}
    exact
    component={ExamReviewPage}
  />,
];
