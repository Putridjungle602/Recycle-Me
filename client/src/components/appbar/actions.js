import { ListItem, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  MyList,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItem
          button={true}
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              color: matches && Colors.secondary,
              justifyContent: "center",
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItem>
      </MyList>
    </Component>
  );
}
