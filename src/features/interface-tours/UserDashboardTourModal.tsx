import React, { SFC } from "react";
import { TourPortal } from "./components/TourPortal";
import { TourPortalContents } from "./components/TourPortalContents";

export const UserDashboardTourModal: SFC = () => {
  return (
    <TourPortal>
      {({ closeModal }) => (
        <TourPortalContents>
          <button onClick={closeModal}>Close Modal</button>
        </TourPortalContents>
      )}
    </TourPortal>
  );
};
