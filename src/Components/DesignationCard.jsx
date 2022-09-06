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

const DesignationCard = () => {
  return (
    <VStack>
      <Wrap>
        <WrapItem>
          <Avatar
            shadow={'md'}
            border="5px solid white"
            size={'2xl'}
            src="images/maleAvatar.png"
          />
        </WrapItem>
      </Wrap>
      <Heading
        textAlign={'center'}
        color={'blackAlpha.800'}
        as={'h3'}
        size="lg"
      >
        Sasuke Uchiha
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
  );
};

export default DesignationCard;
