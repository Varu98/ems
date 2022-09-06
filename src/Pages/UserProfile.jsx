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
import React from 'react';
import { FiCamera } from 'react-icons/fi';

const UserProfile = () => {
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
              <Input placeholder="First Name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <Input placeholder="Last Name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <Input placeholder="Designation" />
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
              <Input placeholder="Date of Birth" type={'date'} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select placeholder="Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <Input placeholder="Address 1" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input placeholder="City" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Select placeholder="State">
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
              <Input placeholder="Zip Code" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Select placeholder="Country">
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
              <Button fontSize={['.7rem', '1rem']} colorScheme={'green'}>
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
