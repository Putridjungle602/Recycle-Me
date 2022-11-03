import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/naja-bertolt-jensen-frWkCQZhe-I-unsplash.jpg" />
      <BannerContent>
        <Typography variant="h6">Recycling helps the planet</Typography>
        <BannerTitle variant="h2">
          You can recycle more and earn points here!
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Recycle glass, paper, alumimum or choose to walk instead of drive and
          you can earn points that you can trade in and buy things or donate to
          a cause you care about.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
