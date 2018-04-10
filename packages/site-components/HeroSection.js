import styled from "styled-components";
import heroImageJpg from "./assets/heroImage.jpg";

const HeroSection = styled.section`
  padding: 24px;
  opacity: 0.75;
  background-image: url("${heroImageJpg}");

  &,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #fff;
  }
`;

export default HeroSection;
