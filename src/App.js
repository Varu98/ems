import React from 'react';
import { ChakraProvider, Grid, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Router from './Routes/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Grid placeContent={'center'} minH={'90vh'}>
        <Router />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
