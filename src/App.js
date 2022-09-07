import React from 'react';
import { ChakraProvider, Grid, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Router from './Routes/Router';

import { createStandaloneToast } from '@chakra-ui/toast';
function App() {
  const { ToastContainer } = createStandaloneToast();

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Grid placeContent={'center'} minH={'90vh'}>
        <ToastContainer />
        <Router />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
