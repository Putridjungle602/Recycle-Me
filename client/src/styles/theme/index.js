import { createTheme } from "@material-ui/core/styles";

export const Colors = {
  primary: "#208B3A",
  secondary: "#1A7431",
  success: "#E4FF1A",
  info: "#1BE7FF",
  danger: "#FF5714",
  warning: "#E8AA14",
  dark: "#10451D",
  light: "#92E6A7",
  muted: "#6EDE8A",
  border: "#155D27",
  inverse: "#1A7431",
  shaft: "#5390D9",
  //browns
  dim_brown: "#EDA268",
  light_brown: "#DA7E37",
  dark_brown: "#8F3E00",
  //monochrome
  white: "#fff",
  black: "#000",
};

export const Font = {};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

export default theme;
