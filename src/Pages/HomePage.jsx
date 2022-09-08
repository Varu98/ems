import { Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';
import React, { useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import DesignationCard from '../Components/UserCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import UserCard from '../Components/UserCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(store => store.user);

  return (
    <Grid
      m={'2rem'}
      minH={'100%'}
      templateRows={'10rem, 1fr'}
      templateColumns={'repeat(3, 1fr)'}
      minW={'20rem'}
    >
      <Flex
        flexDirection={'column'}
        gap={'1rem'}
        top={'20'}
        right={'5'}
        position={'absolute'}
      >
        <Link to={'user-profile'}>
          <Button shadow={'xl'} borderRadius={'100%'} colorScheme={'green'}>
            <FiEdit2 />
          </Button>
        </Link>
        <Link to={'user-profile'}>
          <Button shadow={'xl'} borderRadius={'100%'} colorScheme={'red'}>
            <DeleteIcon />
          </Button>
        </Link>
      </Flex>
      <UserCard />
    </Grid>
  );
};

export default HomePage;
