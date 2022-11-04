import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { ListItemText, ListItemIcon, ListItem } from "@material-ui/core";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Recycle Me</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Learn" />
        <ListItemText primary="Donate" />
        <ListItemText primary="Badges" />
        <ListItem button={true}>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
