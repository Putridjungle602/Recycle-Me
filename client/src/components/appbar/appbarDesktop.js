import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { ListItemText, ListItemIcon, ListItem } from "@mui/material";
import Actions from "./actions";

//Added Extra for functionality
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
//creates login/logout and also signup to appear
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Recycle Me</AppbarHeader>
      <MyList type="row">
        <Link to="/">
          <ListItemText sx={{ margin: 5 }} primary="Home" />
        </Link>
        <ListItemText sx={{ margin: 5 }} primary="Learn" />
        <ListItemText sx={{ margin: 5 }} primary="Donate" />
        <ListItemText sx={{ margin: 5 }} primary="Badges" />

        {Auth.loggedIn() ? (
          <Link onClick={Auth.logout}>
            <ListItemText sx={{ margin: 5 }} primary="Logout" />
          </Link>
        ) : (
          <Link to="/login">
            <ListItemText sx={{ margin: 2 }} primary="Login/SignUp" />
          </Link>
        )}
        <ListItem button={true}>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
