import { useContext } from "react";
import { SessionContext, wasSessionRetrieved } from "./SessionContext";

export const useSession = () => {
  const session = useContext(SessionContext);

  if (!wasSessionRetrieved()) {
    throw new Error('"useSession" was used outside of its provider.');
  }

  return session;
};
