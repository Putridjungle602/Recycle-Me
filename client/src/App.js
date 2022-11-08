import { Button, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Addded Extra
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// import Typography from "@mui/core/Typography";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // useEffect(() => {
  //   document.title = "Recycle Me";
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
            }}
          >
            <Appbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>

            <Footer />
          </Container>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
