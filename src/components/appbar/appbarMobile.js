import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AppbarHeader, AppbarContainer } from "../../styles/appbar";
import Actions from "./appbar/actions";

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
