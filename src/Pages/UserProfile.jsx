import { PhoneIcon } from '@chakra-ui/icons';
import {
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  VStack,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, updateUser } from '../features/authentication/authSlice';
import {
  fetchUsers,
  postNewUserCredentials,
} from '../features/users/userSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { users, createUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  const [newUser, SetnewUser] = useState({
    ...createUser,
    lastName: '',
    designation: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    status: 'active',
  });

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users);
  }, [dispatch]);
  const newUserHandler = e => {
    const { name, value } = e.target;
    SetnewUser(prevCredentials => ({
      ...prevCredentials,
      [name]: value,
    }));
    console.log(newUser);
  };

  const areAllFieldsFilled = obj => Object.values(obj).includes('');

  return (
    <SimpleGrid
      placeContent={'stretch'}
      placeItems="stretch"
      p={'1rem'}
      columnGap={5}
      rowGap={[3, 0]}
      columns={[1, 2]}
    >
      {/* Parent Grid One */}
      <GridItem>
        <VStack mb={'3rem'}>
          <Text mt={'1.2rem'}>Image size should not be larger than 1 MB</Text>
          <AvatarGroup>
            <Avatar
              shadow={'md'}
              border="5px solid white"
              size={'2xl'}
              src="images/maleAvatar.png"
            >
              <AvatarBadge boxSize={'3rem'} bgColor={'gray'} border={'none'}>
                <FiCamera fontSize={'2rem'} color="white" />
              </AvatarBadge>
            </Avatar>
          </AvatarGroup>
        </VStack>
        <SimpleGrid
          placeContent={'stretch'}
          placeItems={'stretch'}
          columns={2}
          columnGap={3}
          rowGap={3}
        >
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <Input
                onChange={e => newUserHandler(e)}
                name="name"
                placeholder="First Name"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <Input
                onChange={e => newUserHandler(e)}
                name="lastName"
                placeholder="Last Name"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <Input
                onChange={e => newUserHandler(e)}
                name="designation"
                placeholder="Designation"
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </GridItem>
      {/* Parent Grid Two */}
      <GridItem>
        {/* Nested Grid Two */}
        <SimpleGrid columns={2} columnGap={3} rowGap={3}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Date Of Birth</FormLabel>
              <Input
                onChange={e => newUserHandler(e)}
                name="dob"
                placeholder="Date of Birth"
                type={'date'}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
                onChange={e => newUserHandler(e)}
                name="gender"
                placeholder="Gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <Input
                onChange={e => newUserHandler(e)}
                name="address"
                placeholder="Address 1"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  onChange={e => newUserHandler(e)}
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input
                onChange={e => newUserHandler(e)}
                name="city"
                placeholder="City"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Select
                onChange={e => newUserHandler(e)}
                name="state"
                placeholder="State"
              >
                <option value="up">Uttar Pradesh</option>
                <option value="rj">Rajasthan</option>
                <option value="kk">KolKata</option>
                <option value="bl">Bangalore</option>
                <option value="gj">Gujurat</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Zip Code</FormLabel>
              <Input
                onChange={e => newUserHandler(e)}
                name="zip"
                placeholder="Zip Code"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Select
                onChange={e => newUserHandler(e)}
                name="country"
                placeholder="Country"
              >
                <option value="ind">India</option>
                <option value="pak">Pakistan</option>
                <option value="chi">China</option>
                <option value="rus">Russia</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1} colEnd={3}>
            <HStack justifyContent={'center'} w={'full'}>
              <Button fontSize={['.7rem', '1rem']} colorScheme={'gray'}>
                Cancel
              </Button>
              <Button
                type="submit"
                isDisabled={areAllFieldsFilled(newUser)}
                onClick={e => {
                  e.preventDefault();
                  dispatch(postNewUserCredentials(newUser));
                  dispatch(addUser(newUser));
                  navigate('/');
                }}
                fontSize={['.7rem', '1rem']}
                colorScheme={'green'}
              >
                Submit
              </Button>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
};

export default UserProfile;
