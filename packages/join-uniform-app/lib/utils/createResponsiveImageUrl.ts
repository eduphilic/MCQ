export type CreateResponsiveImageUrlOptions = {
  w?: string;
  h?: string;
  format?: "jpg" | "png";
};

/**
 * Adds the requested transformations to the provided Cloudinary image url.
 *
 * @see https://cloudinary.com/documentation/image_transformations#resizing_and_cropping_images
 */
export function createResponsiveImageUrl(
  imageUrl: string,
  options: CreateResponsiveImageUrlOptions,
) {
  let computedImageUrl = imageUrl;
  const params = Object.keys(options)
    .filter(key => key !== "format")
    .map(key => `${key}_${options[key as keyof typeof options]}`);

  // Insert the transformation fragment after the "upload" fragment.
  if (params.length > 0) {
    const computedParams = params.join(",");
    const fragments = computedImageUrl.split("/");
    computedImageUrl = fragments.reduce((accumulator, fragment, index) => {
      return `${accumulator}${fragment}${fragment === "upload" ? `/${computedParams}` : ""}${index === fragments.length - 1 ? "" : "/"}`; // prettier-ignore
    }, "");
  }

  // Swap out the trailing file extension.
  if (options.format) {
    const fileExtension = computedImageUrl.split(".").pop()!;
    computedImageUrl = computedImageUrl
      .replace(new RegExp(`${fileExtension}$`), "")
      .concat(options.format);
  }

  return computedImageUrl;
}
