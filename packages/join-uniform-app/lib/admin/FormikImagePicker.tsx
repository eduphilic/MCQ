import { ImagePicker } from "@join-uniform/components";
import { FormikProps, getIn } from "formik";
import React, { useMemo } from "react";
import { createResponsiveImageUrl, useCloudinary } from "../utils";

export type FormikImagePickerProps<FormValues> = {
  name: keyof FormValues;
  folder: string;
  form: FormikProps<FormValues>;
};

export type FormikImagePickerArrayItemProps<FormValues> = {
  arrayName: keyof FormValues;
  arrayIndex: number;
  arrayItemSubpath?: string;
  folder: string;
  form: FormikProps<FormValues>;
};

type FormikImagePickerBaseProps = {
  value: string | null;
  folder: string;
  onValueChange: (value: string) => void;
};

function FormikImagePickerBase(props: FormikImagePickerBaseProps) {
  const { value, folder, onValueChange } = props;
  const cloudinary = useCloudinary();

  const { uploadedImageUrl, previewImageUrl } = useMemo(
    () => {
      const urls = {
        uploadedImageUrl: null as string | null,
        previewImageUrl: null as string | null,
      };
      if (value) {
        const url = value.toString();
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
    [value],
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
          onValueChange(data.assets[0].secure_url);
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
          onValueChange(result.info.secure_url);
        }
      },
    );
  }
}

export function FormikImagePicker<FormValues>(
  props: FormikImagePickerProps<FormValues>,
) {
  const { name, folder, form } = props;

  return (
    <FormikImagePickerBase
      value={form.values[name].toString()}
      folder={folder}
      onValueChange={value => form.setFieldValue(name.toString(), value)}
    />
  );
}

export function FormikImagePickerArrayItem<FormValues>(
  props: FormikImagePickerArrayItemProps<FormValues>,
) {
  const { arrayName, arrayIndex, arrayItemSubpath, folder, form } = props;
  if (!Array.isArray(form.values[arrayName])) {
    throw new Error("Expected field to be an array.");
  }

  const name = `${arrayName}[${arrayIndex}]${arrayItemSubpath}`;
  const value = getIn(form.values, name) as string | null;

  return (
    <FormikImagePickerBase
      value={value}
      folder={folder}
      onValueChange={handleChange}
    />
  );

  function handleChange(newValue: string) {
    form.setFieldValue(name, newValue);
  }
}
