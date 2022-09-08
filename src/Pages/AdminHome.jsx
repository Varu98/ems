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
import { useNavigate } from 'react-router-dom';
import AdminCard from '../Components/AdminCard';

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <SimpleGrid
      m={[6, 12]}
      columns={[1, 1, 2]}
      rowGap={[6, 12]}
      columnGap={[6, 12]}
    >
      <AdminCard />
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
        <VStack spacing={'2rem'}>
          <Button
            onClick={() => {
              navigate('/user-profile');
            }}
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
