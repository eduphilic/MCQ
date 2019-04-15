import { Grid, Typography } from "@join-uniform/components";
import { L, LocalizedString } from "@join-uniform/localization";
import { styled } from "@join-uniform/theme";
import React, { useMemo } from "react";
import { createResponsiveImageUrl } from "../utils";

type Props = {
  className?: string;
  title: LocalizedString;
  about: LocalizedString;
  images: {
    title: LocalizedString;
    text: LocalizedString;
    imageUrl: string;
  }[];
};

function AboutSection(props: Props) {
  const { className, title, about, images } = props;

  const optimizedImages = useMemo(
    () =>
      images.map(
        (image): Props["images"][0] => ({
          ...image,
          imageUrl: createResponsiveImageUrl(image.imageUrl, {
            w: "270",
            h: "270",
            q: "50",
            format: "jpg",
          }),
        }),
      ),
    [images],
  );

  return (
    <div className={className}>
      <Grid container contentCenter spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" paragraph align="center">
            <L localizedString={title} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className="about-text"
            variant="h6"
            paragraph
            align="center"
          >
            <L localizedString={about} />
          </Typography>
        </Grid>
        {optimizedImages.length > 0 && (
          <Grid item xs={12} container spacing={16}>
            {optimizedImages.map((image, index) => (
              <Grid
                key={index}
                className="about-image-wrapper"
                item
                xs={12}
                md={6}
              >
                <img className="about-image" src={image.imageUrl} />
                <Typography
                  variant="h5"
                  component="h3"
                  paragraph
                  align="center"
                >
                  <L localizedString={image.title} />
                </Typography>
                <Typography
                  className="about-text"
                  variant="h6"
                  paragraph
                  align="center"
                >
                  <L localizedString={image.text} />
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

const StyledAboutSection = styled(AboutSection)`
  width: 100%;
  padding: 48px 0;
  background-color: #161616;

  .about-text {
    font-size: 16px;
    line-height: 1.6rem;
    color: #a4a4a4;
  }

  .about-image-wrapper {
    margin-top: 24px;
  }

  .about-image {
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

export { StyledAboutSection as AboutSection };
