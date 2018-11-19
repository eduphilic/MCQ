import { Grid, Typography } from "@material-ui/core";
import CloudUpload from "@material-ui/icons/CloudUpload";
import Collections from "@material-ui/icons/Collections";
import Texture from "@material-ui/icons/Texture";
import React, { Fragment, SFC, useMemo } from "react";
import { createGlobalStyle, styled } from "../styled";
import { createResponsiveImageUrl } from "../utils";
import { Button } from "./Button";

type ImagePickerProps = {
  /**
   * Image url.
   */
  src: string | null;

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
  const Wrapper = useMemo(
    () => {
      const src = props.src
        ? createResponsiveImageUrl(props.src, { format: "png" })
        : null;
      if (!src) return Fragment;

      const Link: SFC = ({ children }) => (
        <a href={src} target="_blank">
          {children}
        </a>
      );
      return Link;
    },
    [props.src],
  );

  return (
    <Grid container spacing={16}>
      <LeftIconStyle />

      {/* Image preview. */}
      <Grid item>
        <Wrapper>
          <ImageWrapper>
            {props.src ? (
              <Image
                src={createResponsiveImageUrl(props.src, {
                  format: "png",
                  w: "128",
                  h: "128",
                })}
              />
            ) : (
              <EmptyImageTexture />
            )}
          </ImageWrapper>
        </Wrapper>
      </Grid>

      <Grid item xs container direction="column" justify="space-between">
        {/* Title */}
        <Grid item>
          <Typography variant="h6">{props.title}</Typography>
        </Grid>

        {/* Action buttons. */}
        <Grid item>
          <Button onClick={props.onSelectButtonClick}>
            <Collections className="left-icon" />
            Select
          </Button>
          <Button onClick={props.onUploadButtonClick}>
            <CloudUpload className="left-icon" />
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

const EmptyImageTexture = styled(Texture)`
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
