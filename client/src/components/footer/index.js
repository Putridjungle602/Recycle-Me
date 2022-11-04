import { Grid, Box, Typography } from "@material-ui/core";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        colors: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { sx: "12px", md: "14px " },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About useEffect</FooterTitle>
          <Typography variant="caption2">
            We want to help you help the planet in the smallest ways we can. We
            know you're busy so we make it easy.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dim_brown,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
