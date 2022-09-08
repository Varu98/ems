import {
  Avatar,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/authentication/authSlice.js';
import { useEffect } from 'react';

const UserCard = () => {
  const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');
  const textColor2 = useColorModeValue('blackAlpha.600', 'whiteAlpha.700');
  const alertColor = useColorModeValue('blackAlpha.100', 'blackAlpha.50');
  const { user, isLoggedIn } = useSelector(store => store.auth);
  const { createUser } = useSelector(store => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) dispatch(updateUser(createUser));
  }, [dispatch]);

  return (
    <>
      <GridItem mb={'3rem'} colSpan={'3'}>
        <VStack>
          <Wrap>
            <WrapItem>
              <Avatar
                shadow={'md'}
                border="5px solid white"
                size={'2xl'}
                src={
                  user.gender === 'male'
                    ? 'images/maleAvatar.png'
                    : 'images/femaleAvatar.png'
                }
              />
            </WrapItem>
          </Wrap>
          <Heading textAlign={'center'} color={textColor} as={'h3'} size="lg">
            {user.name}
          </Heading>
          <Heading textAlign={'center'} color={textColor2} as={'h5'} size="sm">
            HR Manager
          </Heading>
        </VStack>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading textAlign={'center'} color={textColor2} as={'h5'} size="sm">
          Gender
        </Heading>
        <Heading textAlign={'center'} as={'h4'} size="md" color={textColor}>
          {user.gender}
        </Heading>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading textAlign={'center'} color={textColor2} as={'h5'} size="sm">
          DOB
        </Heading>
        <Heading textAlign={'center'} as={'h4'} size="md" color={textColor}>
          18/10/200
        </Heading>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading textAlign={'center'} color={textColor2} as={'h5'} size="sm">
          Nationality
        </Heading>
        <Heading textAlign={'center'} as={'h4'} size="md" color={textColor}>
          Turkey
        </Heading>
      </GridItem>
    </>
  );
};

export default UserCard;
