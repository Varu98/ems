import { Grid } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <Grid maxW={'100vw'}>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Grid>
  );
};

export default Navbar;
