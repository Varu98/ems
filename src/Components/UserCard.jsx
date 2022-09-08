import {
  Avatar,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const UserCard = () => {
  const { user } = useSelector(store => store.auth);

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
          <Heading
            textAlign={'center'}
            color={'blackAlpha.800'}
            as={'h3'}
            size="lg"
          >
            {user.name}
          </Heading>
          <Heading
            textAlign={'center'}
            color={'blackAlpha.600'}
            as={'h5'}
            size="sm"
          >
            HR Manager
          </Heading>
        </VStack>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading
          textAlign={'center'}
          color={'blackAlpha.600'}
          as={'h5'}
          size="sm"
        >
          Gender
        </Heading>
        <Heading
          textAlign={'center'}
          as={'h4'}
          size="md"
          color={'blackAlpha.800'}
        >
          {user.gender}
        </Heading>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading
          textAlign={'center'}
          color={'blackAlpha.600'}
          as={'h5'}
          size="sm"
        >
          DOB
        </Heading>
        <Heading
          textAlign={'center'}
          as={'h4'}
          size="md"
          color={'blackAlpha.800'}
        >
          18/10/200
        </Heading>
      </GridItem>
      <GridItem mb={'3rem'}>
        <Heading
          textAlign={'center'}
          color={'blackAlpha.600'}
          as={'h5'}
          size="sm"
        >
          Nationality
        </Heading>
        <Heading
          textAlign={'center'}
          as={'h4'}
          size="md"
          color={'blackAlpha.800'}
        >
          Turkey
        </Heading>
      </GridItem>
    </>
  );
};

export default UserCard;
