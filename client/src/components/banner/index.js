import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
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
        <Typography variant="h6">Learn more about recycling here</Typography>
        <BannerTitle variant="h2">Earn Points Here!</BannerTitle>
        <BannerDescription variant="subtitle">
          Do your part and we'll do the rest!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
