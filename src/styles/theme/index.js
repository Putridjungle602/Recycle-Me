import { createTheme } from "@material-ui/core/styles";

export const Colors = {
  primary: "#88a376",
  secondary: "#a6b697",
  success: "#ab7b6a",
  info: "#bfb07f",
  danger: "#817562",
  warning: "#FF0000",
  dark: "#b6ba8f",
  light: "#bbceac",
  muted: "#7a876f",
  border: "#a6b697",
  shaft: "#bfb07f",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
});

export default theme;
