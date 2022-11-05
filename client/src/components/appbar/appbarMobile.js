import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
