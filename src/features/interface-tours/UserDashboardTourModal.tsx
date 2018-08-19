import React, { SFC } from "react";
import { ArrowContainer } from "./components/ArrowContainer";
import { ArrowTargetRow } from "./components/ArrowTargetRow";
import { SwipeInstructions } from "./components/SwipeInstructions";
import { TourDismissalButton } from "./components/TourDismissalButton";
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
            <ArrowTargetRow variant="toolbar">
              <div>Placeholder</div>
            </ArrowTargetRow>
          </ArrowContainer>

          <TourDismissalButton onClick={closeModal}>
            OK, GOT IT!
          </TourDismissalButton>
        </TourPortalContents>
      )}
    </TourPortal>
  );
};
