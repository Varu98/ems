import { Avatar, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <HStack
      p={'.5rem'}
      justifyContent={'space-between'}
      shadow={'lg'}
      maxW={'100vw'}
    >
      <Heading ml={'2rem'} as={'h5'} size="sm">
        <Link to={'/'}>Managment System</Link>
      </Heading>
      <HStack>
        <Link to={'user-profile'}>
          <Avatar shadow={'md'} size={'md'} src="images/maleAvatar.png" />
        </Link>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

export default Navbar;
