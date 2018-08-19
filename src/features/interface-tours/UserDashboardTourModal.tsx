import React, { SFC } from "react";
import { TourPortal } from "./components/TourPortal";

export const UserDashboardTourModal: SFC = () => {
  return (
    <TourPortal>
      {({ closeModal }) => <button onClick={closeModal}>Close Modal</button>}
    </TourPortal>
  );
};
