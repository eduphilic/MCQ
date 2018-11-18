import gql from "graphql-tag";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Mutation as ApolloMutation } from "react-apollo";
import {
  GenerateCloudinarySignatureMutationArgs,
  Mutation,
  Query,
} from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { isBrowser } from "../../utils";

let initializationStatus: Promise<{ success: boolean }>;

type CloudinaryContextValue = {
  client: Cloudinary;
  cloudName: string;
  apiKey: string;
  generateSignature: (
    cb: (signature: string) => void,
    paramsToSign: any,
  ) => void;
  getDefaultUploadWidgetOptions: () => CloudinaryOpenUploadWidgetOptions;
} | null;
const CloudinaryContext = createContext<CloudinaryContextValue>(null);

const GET_CLOUDINARY_CONFIG = gql`
  query GetCloudinaryConfig {
    cloudinaryCloudName
    cloudinaryApiKey
  }
`;

const GENERATE_CLOUDINARY_SIGNATURE = gql`
  mutation GenerateCloudinarySignature($paramsToSign: JSON!) {
    generateCloudinarySignature(paramsToSign: $paramsToSign)
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
    <ApolloMutation<
      Pick<Mutation, "generateCloudinarySignature">,
      GenerateCloudinarySignatureMutationArgs
    >
      mutation={GENERATE_CLOUDINARY_SIGNATURE}
    >
      {generateCloudinarySignature => (
        <QueryWithLoading<
          Pick<Query, "cloudinaryCloudName" | "cloudinaryApiKey">
        >
          query={GET_CLOUDINARY_CONFIG}
        >
          {({ data }) => {
            if (cloudinaryClient) {
              cloudinaryClient.setCloudName(data.cloudinaryCloudName);

              if (!cloudinary) {
                const generateSignature: NonNullable<
                  CloudinaryContextValue
                >["generateSignature"] = async (cb, paramsToSign) => {
                  const fetchResult = await generateCloudinarySignature({
                    variables: { paramsToSign },
                  });
                  if (!fetchResult || fetchResult.errors) return;
                  cb(fetchResult.data!.generateCloudinarySignature);
                };

                setCloudinary({
                  client: cloudinaryClient,
                  apiKey: data.cloudinaryApiKey,
                  cloudName: data.cloudinaryCloudName,
                  generateSignature,
                  getDefaultUploadWidgetOptions: () => ({
                    // Required:
                    cloudName: data.cloudinaryCloudName,

                    // Widget behavior:
                    sources: ["local", "url", "camera"],
                    multiple: false,
                    cropping: true,
                    croppingAspectRatio: 1, // square

                    // Upload parameters:
                    folder: "Assets",
                    resourceType: "image",
                    uploadSignature: generateSignature,
                    apiKey: data.cloudinaryApiKey,
                  }),
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
      )}
    </ApolloMutation>
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

  apiKey: string;

  // Widget behavior:

  /**
   * List of sources that should be added as tabs (web) or source options
   * (mobile/responsive) in the widget. Possible values: `local`, `url`,
   * `camera`, `dropbox`, `imageSearch`, `facebook`, `instagram`
   *
   * Notes:
   * - `camera` is not relevant for mobile devices (the `local` option also
   *   allows capturing from the camera on mobile devices) and is currently
   *   supported in all modern browsers (not supported in Internet Explorer or
   *   Desktop Safari).
   * - The `camera` and `dropbox` source options will appear only if the upload
   *   widget is embedded in an HTTPS page.
   */
  sources?: (
    | "local"
    | "url"
    | "camera"
    | "dropbox"
    | "imageSearch"
    | "facebook"
    | "instagram")[];

  /**
   * The source that's selected when the widget is opened.
   *
   * @default "local"
   */
  defaultSource?: NonNullable<CloudinaryOpenUploadWidgetOptions["sources"]>[0];

  /**
   * Whether selecting and uploading multiple images is allowed. Completion
   * callback is called only when all images complete uploading. If set to true,
   * multiple hidden fields of image identifiers are created. If set to false,
   * only a single image is allowed in any source.
   *
   * @default true
   */
  multiple?: boolean;

  /**
   * The maximum number of files allowed in multiple upload mode. If a user selects or drags more than the allowed
   * amount, only the first maxImages files will be uploaded.
   *
   * @example 10
   * @default null
   */
  maxFiles?: number | null;

  /**
   * Set to `true` if you want to allow your users to interactively crop their
   * images before uploading them to Cloudinary. Interactive cropping allows
   * users to mark the interesting part of images, and the selected dimensions
   * are sent as the `customCoordinates` or `faceCoordinates` upload parameter,
   * depending on the value used for `croppingCoordinatesMode`.
   *
   * Setting `gravity` to `custom` or `faces` (as appropriate) when generating
   * delivery URLs will deliver the image with the cropping that the user
   * defined in the widget. Incoming cropping can be applied before saving the
   * image by including the crop mode set to `custom` gravity in your upload
   * preset.
   *
   * Cropping is supported only with single-file uploading so make sure to also
   * set the `multiple` widget parameter to `false` in order to enable
   * interactive cropping.
   *
   * @default false
   */
  cropping?: boolean;

  /**
   * If specified, enforce the given aspect ratio on the selected region when
   * performing interactive cropping. Relevant only if `cropping` is enabled.
   *
   * The aspect ratio is defined as width/height. For example, 0.5 for portrait
   * oriented rectangle or 1 for square.
   *
   * @example 0.5
   * @default null
   */
  croppingAspectRatio?: number | null;

  /**
   * Initialize the size of the cropping selection box to a different value from
   * the default.
   *
   * Relevant only if the `cropping` feature is enabled.
   *
   * The `croppingDefaultSelectionRatio` value is calculated as a proportion of
   * the image's size.
   *
   * Range `0.1` to `1.0`.
   *
   * @example 0.75
   * @default 1.0
   */
  croppingDefaultSelectionRatio?: number;

  /**
   * Whether to display the cropping dimensions in the top left corner of the
   * cropping region.
   *
   * Relevant only if the `cropping` feature is enabled.
   *
   * @default false
   */
  croppingShowDimensions?: boolean;

  /**
   * Determines how to apply the selected region coordinates. Relevant only if
   * the cropping feature is enabled.
   *
   * `custom`: the selected region is set as the `customCoordinates` upload
   * parameter (default).
   *
   * `face`: the selected region is set as the `faceCoordinates` upload
   * parameter.
   *
   * @default "custom"
   */
  croppingCoordinatesMode?: "custom" | "face";

  /**
   * Whether to show a **Back** button when in cropping mode.
   *
   * Relevant only if the `cropping` feature is enabled.
   *
   * @default true
   */
  croppingShowBackButton?: boolean;

  // Dropbox:

  /**
   * Your DropBox App key.
   *
   * Required if adding the `dropbox` source.
   */
  dropboxAppKey?: string;

  // Facebook:

  /**
   * The App ID of your own Facebook application.
   *
   * Defaults to using the Cloudinary Media Upload app to access their Facebook
   * accounts if not provided.
   */
  facebookAppId?: string;

  // Image search:

  /**
   * Your API key needed to access Google APIs.
   *
   * Required if adding the imageSearch source.
   */
  googleApiKey?: string;

  /**
   * The URLs of sites to allow for Image Search. If more than one site is
   * given, the Search by Site dropdown is added. To allow searching the entire
   * web, use the value "all".
   *
   * The default value may be incorrect here, the documentation was ambiguous.
   *
   * @default ["all"]
   */
  searchBySites?: string[];

  // Instagram:

  /**
   * The App ID of your own Instagram application for accessing your users
   * Instagram accounts. Defaults to using the Cloudinary Media Upload app to
   * access their Instagram accounts if not provided.
   */
  instagramClientId?: string;

  // Upload parameters:

  /**
   * Custom public ID to assign to a single uploaded image. If not specified,
   * either a randomly generated string or the original file name is used as the
   * public ID according to the unsigned upload preset. To ensure secure usage,
   * overwriting previously uploaded images sharing the same public ID is not
   * supported (unless you also include "overwrite = true" in the upload
   * preset).
   *
   * @example "profile_11002"
   * @default null
   */
  publicId?: string | null;

  /**
   * Folder name for all uploaded images. Acts as the prefix of assigned public
   * IDs.
   *
   * @example "user_photos"
   * @default null
   */
  folder?: string | null;

  /**
   * One or more tags to assign to the uploaded images.
   *
   * @example ["users", "content"]
   * @default null
   */
  tags?: string[] | null;

  /**
   * Limits uploaded files to the specified type. By default, all resource types
   * are allowed.
   *
   * Possible values: `auto`, `image`, `video`, `raw`.
   *
   * @default "auto".
   */
  resourceType?: "auto" | "image" | "video" | "raw";

  /**
   * Additional context metadata to attach to the uploaded resources.
   *
   * @example { alt: "my_alt", caption: "my_caption" }
   */
  context?: Record<string, string>;

  /**
   * Either a string representing the precalculated signature of all upload
   * parameters used, or a function to generate the signature string
   * dynamically. The function accepts 2 parameters, the first is a
   * resultCallback (function) and the second is an object with the relevant
   * upload parameters that are needed for generating the signature.
   *
   * @example "c347053314777423cd4f"
   *
   * For details, see Generating authentication signatures.
   * @see https://cloudinary.com/documentation/upload_images#generating_authentication_signatures
   */
  uploadSignature:
    | string
    | ((cb: (signature: string) => any, paramsToSign: any) => any);

  // Client-side actions:

  /**
   * Allows client-side validation of the uploaded files based on their file
   * extensions. You can specify one or more file extensions.
   *
   * @example ["png", "gif", "jpeg"]
   * @default null
   */
  clientAllowedFormats?: string[];

  /**
   * If specified, perform client-side validation to prevent uploading files
   * larger than the given bytes size.
   *
   * @example 1500000 (1.5 MB)
   * @default null (no client-side limit)
   *
   * Notes:
   * - Upload size is limited on the server-side by the maximum file size set in
   * your account's Usage Limits.
   * - The preview, crop, and pixel-count options are not available for files
   * larger than 40MB (the files can still be uploaded).
   */
  maxFileSize?: number;

  /**
   * If specified, client-side scale-down resizing takes place before uploading
   * if the width of the selected file is larger than the specified value.
   *
   * Alternatively, can be used in conjunction with `validateMaxWidthHeight` to
   * prevent uploading of images that exceed this value.
   *
   * @example 2000
   * @default null (no resizing)
   */
  maxImageWidth?: number;

  /**
   * If specified, client-side scale-down resizing takes place before uploading
   * if the height of the selected file is larger than the specified value.
   *
   * Alternatively, can be used in conjunction with `validateMaxWidthHeight` to
   * prevent uploading of images that exceed this value.
   *
   * @example 2000
   * @default null (no resizing)
   */
  maxImageHeight?: number;

  /**
   * If specified, client-side validation takes place before uploading. If the
   * width and/or height of the image is larger than `maxImageWidth` and/or
   * `maxImageHeight` respectively, the upload is cancelled and no client-side
   * scale-down resizing takes place.
   *
   * @default false (no validation)
   */
  validateMaxWidthHeight?: boolean;

  /**
   * If specified, client-side validation takes place before uploading. If the
   * width of the selected file is smaller than the specified value, the upload
   * is cancelled.
   *
   * @example 200
   * @default null (no validation)
   */
  minImageWidth?: number | null;

  /**
   * @example 200
   * @default null (no validation)
   */
  minImageHeight?: number | null;

  croppingValidateDimensions?: boolean;

  maxChunkSize?: number;

  // Containing page update:

  form?: string | null;

  fieldName?: string;

  thumbnails?: string | null;

  thumbnailTransformation?: any;
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
