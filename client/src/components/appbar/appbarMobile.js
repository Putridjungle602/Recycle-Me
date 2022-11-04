import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Actions from "./actions";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Recycle Me
      </AppbarHeader>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
