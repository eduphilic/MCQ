import {
  CloudUploadIcon,
  CollectionsIcon,
  TextureIcon,
} from "@join-uniform/icons";
import { createGlobalStyle, styled } from "@join-uniform/theme";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import React, { FC, Fragment, SFC, useMemo } from "react";
import { Button } from "../Button";
import { Grid } from "../Grid";
import { Typography } from "../muiComponents";

type ImagePickerProps = {
  /**
   * Url to the uploaded full size image. A browser tab is opened when the
   * preview image is clicked to this url.
   */
  uploadedImageUrl: string | null;

  /**
   * A 128px by 128px preview image of the currently selected image.
   */
  previewImageUrl: string | null;

  /**
   * Component title.
   */
  title?: string;

  onSelectButtonClick?: () => void;

  onUploadButtonClick?: () => void;
};

/**
 * Provides an image picker component for use in the admin dashboard.
 */
export function ImagePicker(props: ImagePickerProps) {
  const {
    uploadedImageUrl,
    previewImageUrl,
    title,
    onSelectButtonClick,
    onUploadButtonClick,
  } = props;

  const Wrapper = useMemo(
    () => {
      if (!uploadedImageUrl) return Fragment;

      const Link: SFC = ({ children }) => (
        <a href={uploadedImageUrl} target="_blank">
          {children}
        </a>
      );
      return Link;
    },
    [uploadedImageUrl],
  );

  return (
    <Grid container spacing={16}>
      <LeftIconStyle />

      {/* Image preview. */}
      <Grid item>
        <Wrapper>
          <ImageWrapper>
            {previewImageUrl ? (
              <Image src={previewImageUrl} />
            ) : (
              <EmptyImageTexture />
            )}
          </ImageWrapper>
        </Wrapper>
      </Grid>

      <Grid item xs container direction="column" justify="space-between">
        {/* Title */}
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>

        {/* Action buttons. */}
        <Grid item>
          <Button onClick={onSelectButtonClick}>
            <CollectionsIcon className="left-icon" />
            Select
          </Button>
          <Button onClick={onUploadButtonClick}>
            <CloudUploadIcon className="left-icon" />
            Upload
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const LeftIconStyle = createGlobalStyle`
  .left-icon {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }
`;

const ImageWrapper = styled.div`
  width: 128px;
  height: 128px;
  border: 1px solid
    ${({ theme }) =>
      theme.palette.type === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)"};
`;

const EmptyImageTexture = styled(TextureIcon as FC<SvgIconProps>)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) =>
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)"};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
