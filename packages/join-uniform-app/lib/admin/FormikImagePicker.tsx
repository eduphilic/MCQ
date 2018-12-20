import { ImagePicker } from "@join-uniform/components";
import { FormikProps } from "formik";
import React, { useMemo } from "react";
import { createResponsiveImageUrl, useCloudinary } from "../utils";

export type FormikImagePickerProps<FormValues> = {
  name: keyof FormValues;
  folder: string;
  form: FormikProps<FormValues>;
};

export function FormikImagePicker<FormValues>(
  props: FormikImagePickerProps<FormValues>,
) {
  const {
    name,
    folder,
    form: { values, setFieldValue },
  } = props;
  const cloudinary = useCloudinary();

  const { uploadedImageUrl, previewImageUrl } = useMemo(
    () => {
      const urls = {
        uploadedImageUrl: null as string | null,
        previewImageUrl: null as string | null,
      };
      if (values[name]) {
        const url = values[name].toString();
        urls.uploadedImageUrl = createResponsiveImageUrl(url, {
          format: "png",
        });
        urls.previewImageUrl = createResponsiveImageUrl(url, {
          w: "128",
          h: "128",
          format: "png",
        });
      }
      return urls;
    },
    [values[name]],
  );

  return (
    <ImagePicker
      uploadedImageUrl={uploadedImageUrl}
      previewImageUrl={previewImageUrl}
      onSelectButtonClick={handleSelectButtonClick}
      onUploadButtonClick={handleUploadButtonClick}
    />
  );

  async function handleSelectButtonClick() {
    if (!cloudinary) return;

    cloudinary.client.openMediaLibrary(
      await cloudinary.getDefaultMediaLibraryWidgetOptions(),
      {
        insertHandler: data => {
          setFieldValue(name.toString(), data.assets[0].secure_url);
        },
      },
    );
  }

  async function handleUploadButtonClick() {
    if (!cloudinary) return;

    cloudinary.client.openUploadWidget(
      {
        ...cloudinary.getDefaultUploadWidgetOptions(),
        folder,
      },
      (err, result) => {
        if (err) throw new Error(err);
        if (result.event === "abort" || result.event === "close") {
          return;
        }
        if (result.event === "success") {
          setFieldValue(name.toString(), result.info.secure_url);
        }
      },
    );
  }
}
