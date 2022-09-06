import { Button, FormControl, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import PasswordInput from '../Components/PasswordInput';

const LoginPage = () => {
  return (
    <VStack
      boxShadow={'md'}
      rounded="md"
      maxW={'25rem'}
      p="2rem"
      spacing={'1rem'}
    >
      <Heading as={'h4'} size={['xs', 'md']}>
        Employee and Admin login/signup
      </Heading>
      <FormControl isRequired>
        <Input mb={'1rem'} type={'password'} placeholder="Email" />
        <PasswordInput />
      </FormControl>
      <Button colorScheme={'green'}>Login/Signup</Button>
    </VStack>
  );
};

export default LoginPage;
