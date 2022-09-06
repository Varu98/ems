import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import DesignationCard from '../Components/DesignationCard';

const AdminHome = () => {
  return (
    <SimpleGrid columns={2} rowGap="6" columnGap={[6, 12]}>
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
        <DesignationCard />
        <Button
          position={'absolute'}
          bottom="3"
          right={3}
          shadow={'xl'}
          borderRadius={'100%'}
          colorScheme={'red'}
        >
          <DeleteIcon />
        </Button>
      </GridItem>
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
        <DesignationCard />
        <Button
          position={'absolute'}
          bottom="3"
          right={3}
          shadow={'xl'}
          borderRadius={'100%'}
          colorScheme={'red'}
        >
          <DeleteIcon />
        </Button>
      </GridItem>
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
        <DesignationCard />
        <Button
          position={'absolute'}
          bottom="3"
          right={3}
          shadow={'xl'}
          borderRadius={'100%'}
          colorScheme={'red'}
        >
          <DeleteIcon />
        </Button>
      </GridItem>
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
        <VStack spacing={'2rem'}>
          <Button
            maxW={'5rem'}
            maxH={'5rem'}
            rounded={'full'}
            shadow="md"
            colorScheme={'teal'}
            w={'full'}
            h={'full'}
          >
            <FiPlus fontSize={'5rem'} />
          </Button>
          <Heading as={'h3'} size={'lg'}>
            Add Employee
          </Heading>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default AdminHome;
