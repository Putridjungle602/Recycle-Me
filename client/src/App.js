import { Button, Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  // useEffect(() => {
  //   document.title = "Recycle Me";
  // }, []);

  return (

  <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
