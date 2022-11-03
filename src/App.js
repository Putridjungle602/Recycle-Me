import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "./components/appbar";
import Banner from "./components/banner";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AppBar />
        <Banner />
      </Container>
    </ThemeProvider>
  );
}

export default App;
