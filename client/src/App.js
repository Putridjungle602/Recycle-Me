import { Button, Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  // useEffect(() => {
  //   document.title = "Recycle Me";
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Appbar />
        <Banner />
        <Footer />
        {
          // title
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
