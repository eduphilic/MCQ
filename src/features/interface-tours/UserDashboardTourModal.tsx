import React, { SFC } from "react";
import { ArrowContainer } from "./components/ArrowContainer";
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

          <ArrowContainer>
            <div>Placeholder</div>
          </ArrowContainer>

          <button onClick={closeModal}>Close Modal</button>
        </TourPortalContents>
      )}
    </TourPortal>
  );
};
