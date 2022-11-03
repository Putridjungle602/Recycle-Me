import { ListItemIcon, ListItemText } from "@material-ui/core";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader></AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Learn" />
        <ListItemText primary="Donate" />
        <ListItemText primary="Badges" />
        <ListItemIcon></ListItemIcon>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
