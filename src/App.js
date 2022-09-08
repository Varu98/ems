import React, { useEffect } from 'react';
import { ChakraProvider, Grid, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Router from './Routes/Router';

import { createStandaloneToast } from '@chakra-ui/toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users/userSlice';
function App() {
  const { ToastContainer } = createStandaloneToast();
  const { status } = useSelector(store => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') dispatch(fetchUsers());
  }, [dispatch, status]);

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
