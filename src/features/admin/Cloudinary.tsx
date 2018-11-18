import gql from "graphql-tag";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Query } from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { isBrowser } from "../../utils";

let initializationStatus: Promise<{ success: boolean }>;

type CloudinaryContextValue = {
  client: Cloudinary;
  cloudName: string;
  apiKey: string;
} | null;
const CloudinaryContext = createContext<CloudinaryContextValue>(null);

const GET_CLOUDINARY_CONFIG = gql`
  query GetCloudinaryConfig {
    cloudinaryCloudName
    cloudinaryApiKey
  }
`;

export function useCloudinary() {
  return useContext(CloudinaryContext);
}

/**
 * Initializes the Cloudinary client library if it has not already been
 * initialized. If rendered on the server, the client library is not
 * initialized.
 */
export function CloudinaryProvider(props: {
  children?: ReactNode;
}): React.ReactElement<any> {
  const [cloudinary, setCloudinary] = useState<CloudinaryContextValue>(null);

  // Load the Cloudinary client library if it hasn't already been loaded.
  if (isBrowser() && !initializationStatus) {
    const script = document.createElement("script");

    initializationStatus = new Promise(resolve => {
      script.onload = () => resolve({ success: true });
      script.onerror = () => resolve({ success: false });
    });

    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";

    if (!document.head) throw new Error('Could not retrieve "head" element.');
    document.head.insertBefore(script, null);
  }

  // Initialize state to the currently loaded Cloudinary client instance if it
  // exists or undefined otherwise. The state will be updated by the effect
  // below to indicate that the client has been loaded.
  const [cloudinaryClient, setCloudinaryClient] = useState(
    isBrowser() ? window.cloudinary : undefined,
  );

  // Wait for the Cloudinary client script to load and then issue a state
  // update.
  useEffect(() => {
    if (!isBrowser()) return;

    // tslint:disable-next-line:no-floating-promises
    initializationStatus.then(({ success }) => {
      if (!success) throw new Error("Failed to load Cloudinary client.");
      if (!cloudinaryClient) setCloudinaryClient(window.cloudinary);
    });
  }, []);

  // Get the Cloudinary "cloudName" and render the provider.
  return (
    <QueryWithLoading<Pick<Query, "cloudinaryCloudName" | "cloudinaryApiKey">>
      query={GET_CLOUDINARY_CONFIG}
    >
      {({ data }) => {
        if (cloudinaryClient) {
          cloudinaryClient.setCloudName(data.cloudinaryCloudName);

          if (!cloudinary) {
            setCloudinary({
              client: cloudinaryClient,
              apiKey: data.cloudinaryApiKey,
              cloudName: data.cloudinaryCloudName,
            });
          }
        }

        return (
          <CloudinaryContext.Provider value={cloudinary}>
            {props.children}
          </CloudinaryContext.Provider>
        );
      }}
    </QueryWithLoading>
  );
}

export type CloudinaryOpenUploadWidgetOptions = {
  /**
   * Your Cloudinary account cloud name. Can be set either globally using
   * `setCloudName` or explicitly for each widget creation call.
   *
   * Example: `demo`
   */
  cloudName?: string;
};

/**
 * Cloudinary client library.
 */
export type Cloudinary = {
  /**
   * Globally sets the cloud name for all widget method calls.
   */
  setCloudName: (name: string) => void;

  openUploadWidget: (options: CloudinaryOpenUploadWidgetOptions) => void;
};

declare global {
  interface Window {
    cloudinary: Cloudinary | undefined;
  }
}
