import React from 'react';
import { ChakraProvider, Grid, theme } from '@chakra-ui/react';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Grid placeContent={'center'} minH={'100vh'}>
        <LoginPage />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
