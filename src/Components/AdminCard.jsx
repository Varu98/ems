import { DeleteIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  GridItem,
  Heading,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { deleteUserByAdmin } from '../features/users/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const AdminCard = () => {
  const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const textColor2 = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const alertColor = useColorModeValue('blackAlpha.100', 'blackAlpha.50');
  const dispatch = useDispatch();
  const { users } = useSelector(store => store.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteByID, setDeleteByID] = useState(null);
  const cancelRef = React.useRef();

  return users
    .filter(admin => admin.name !== 'admin')
    .map(user => (
      <GridItem
        key={user.id}
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
                src={
                  user.gender === 'male'
                    ? 'images/maleAvatar.png'
                    : 'images/femaleAvatar.png'
                }
              />
            </WrapItem>
          </Wrap>
          <Heading textAlign={'center'} color={textColor} as={'h3'} size="lg">
            {console.log(user.name)}
            {user.name}
          </Heading>
          <Heading textAlign={'center'} color={textColor2} as={'h5'} size="sm">
            HR Manager
          </Heading>
        </VStack>
        <Button
          onClick={() => {
            onOpen();
            setDeleteByID(user.id);
          }}
          position={'absolute'}
          bottom="3"
          right={3}
          shadow={'xl'}
          borderRadius={'100%'}
          colorScheme={'red'}
        >
          <DeleteIcon />
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay bgColor={alertColor}>
            <AlertDialogContent shadow={'md'}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Employee
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    dispatch(deleteUserByAdmin(deleteByID));
                    onClose();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </GridItem>
    ));
};

export default AdminCard;
