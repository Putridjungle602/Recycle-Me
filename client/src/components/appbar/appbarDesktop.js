import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { ListItemText, ListItemIcon, ListItem } from "@mui/material";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Recycle Me</AppbarHeader>
      <MyList type="row">
        <ListItemText sx={{ margin:2 }} primary="Home" />
        <ListItemText sx={{ margin:2 }} primary="Learn" />
        <ListItemText sx={{ margin:2 }} primary="Donate" />
        <ListItemText sx={{ margin:2 }} primary="Badges" />
        <ListItem button={true}>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
