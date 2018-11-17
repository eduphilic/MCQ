import React, { createContext, ReactNode, useContext } from "react";
import { isBrowser } from "../../utils";

type CloudinaryContextValue = Cloudinary | null;
const CloudinaryContext = createContext<CloudinaryContextValue>(null);
let initialized = false;

/**
 * Returns the initialized instance of the Cloudinary client library. If called
 * outside of a CloudinaryProvider or during server rendering, the return value
 * is `null`.
 */
export function useCloudinary() {
  return useContext(CloudinaryContext);
}

/**
 * Initializes the Cloudinary client library if it has not already been
 * initialized. It passes the initialized instance through a context for use
 * with `useCloudinary`. If rendered on the server, the client library is not
 * initialized.
 */
export function CloudinaryProvider(props: {
  children?: ReactNode;
}): React.ReactElement<any> {
  if (!isBrowser) return <>{props.children}</>;

  if (!initialized) {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";

    if (!document.head) throw new Error('Could not retrieve "head" element.');
    document.head.insertBefore(script, null);
    initialized = true;
  }

  return (
    <CloudinaryContext.Provider value={cloudinary || null}>
      {props.children}
    </CloudinaryContext.Provider>
  );
}

/**
 * Cloudinary client library.
 */
export type Cloudinary = {
  openUploadWidget: (options: {}) => void;
};

declare global {
  const cloudinary: Cloudinary | undefined;
}
