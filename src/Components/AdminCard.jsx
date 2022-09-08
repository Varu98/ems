import { DeleteIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  GridItem,
  Heading,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const AdminCard = () => {
  const { users } = useSelector(store => store.user);

  return users
    .filter(admin => admin.name !== 'admin')
    .map(user => (
      <GridItem
        position={'relative'}
        shadow={'md'}
        p="2rem"
        rounded={'md'}
        colSpan={1}
      >
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
    ));
};

export default AdminCard;
