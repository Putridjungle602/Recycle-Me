const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  grow: {
    flexGrow: 1,
  },
  img: {
    backgroundImage: `url(${Image})`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px, 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  app: {
    backgroundColor: "#4E944F",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: 0,
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));

const useTheme = createTheme({});

export default useStyles;
