import Grid from "material-ui/Grid";
import styled from "styled-components";

const HeroContainer = styled(Grid).attrs({
  container: true,
})`
  padding: 24px;
  background-image: url("/static/images/heroImage.jpg");
`;

export default HeroContainer;
