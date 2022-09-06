import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';
import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import DesignationCard from '../Components/DesignationCard';

const HomePage = () => {
  return (
    <Grid
      minH={'100%'}
      templateRows={'repeat(2, 1fr)'}
      templateColumns={'repeat(3, 1fr)'}
      minW={'20rem'}
    >
      <Flex
        flexDirection={'column'}
        gap={'1rem'}
        top={'14'}
        right={'5'}
        position={'absolute'}
      >
        <Button shadow={'xl'} borderRadius={'100%'} colorScheme={'green'}>
          <FiEdit2 />
        </Button>
        <Button shadow={'xl'} borderRadius={'100%'} colorScheme={'red'}>
          <DeleteIcon />
        </Button>
      </Flex>
      <GridItem mb={'3rem'} colSpan={'3'}>
        <DesignationCard />
      </GridItem>
      <GridItem>
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
          Male
        </Heading>
      </GridItem>
      <GridItem>
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
      <GridItem>
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
    </Grid>
  );
};

export default HomePage;
