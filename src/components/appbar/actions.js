import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#E9EFC0",
      main: "#B4E197",
      dark: "#4E944F",
      contrastText: "#fff",
    },
    secondary: {
      light: "#88a688",
      main: "#a1c7a2",
      dark: "#3e613f",
      contrastText: "#000",
    },
  },
});

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            color: matches && createTheme.secondary,
          }}
        >
          <PersonIcon />
        </ListItemIcon>
      </MyList>
    </Component>
  );
}
