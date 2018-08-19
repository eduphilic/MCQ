import React, { SFC } from "react";
import { SwipeInstructions } from "./components/SwipeInstructions";
import { TourPortal } from "./components/TourPortal";
import { TourPortalContents } from "./components/TourPortalContents";

export const UserDashboardTourModal: SFC = () => {
  return (
    <TourPortal>
      {({ closeModal }) => (
        <TourPortalContents>
          <SwipeInstructions>
            Swipe LEFT/RIGHT to goto next or previous dashboard pages.
          </SwipeInstructions>

          <button onClick={closeModal}>Close Modal</button>
        </TourPortalContents>
      )}
    </TourPortal>
  );
};
