import { Button, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Typography from "@mui/core/Typography";
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
import BoxContainer from "./components/BoxContainer";

const products = [
  {
    name : "Small Cardboard Box",
    desc : "smaller boxes small aplliance / shoe box or smaller",
    price : 2
  },
  {
    name : "Large Cardboard Box",
    desc : "boxes Larger then you typical small appliance box",
    price : 4
  },
  {
    name : "Plastic Store Bag",
    desc : "grocerie stor bags",
    price : 1
  },
  {
    name : "Can",
    desc : "aluminum cans",
    price : 1
  },
  {
    name : "Plastic Bottle",
    desc : "plastic water or soda bottles",
    price : 1
  },
  {
    name : "Large Glass Bottle",
    desc : "Larger glass containers like wine bottles",
    price : 3
  },
  {
    name : "Small Glass Bottle",
    desc : "small glass containers such as pop or beer bottles",
    price : 1
  },
  {
    name : "Alternative Transport per Mile",
    desc : "walking, biking , or carpooling",
    price : 5
  }
];

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
        {products.map((product, idx) => (
          <BoxContainer key={idx} name={product.name} desctiprion={product.desc} points={product.price} />
        ))}
        
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
