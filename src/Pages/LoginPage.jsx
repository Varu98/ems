import {
  Button,
  createStandaloneToast,
  FormControl,
  Heading,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';
import { addUser } from '../features/authentication/authSlice';
import { getNewUserEmail } from '../features/users/userSlice';

const LoginPage = () => {
  const { toast } = createStandaloneToast();
  const navigate = useNavigate();
  const { users } = useSelector(store => store.user);
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  // Login Handler
  const loginHandler = e => {
    const { name, value } = e.target;
    setLoginCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value,
    }));
    console.log(loginCredentials);
    console.log(users);
  };
  // Submit Handler
  console.log(user);
  const submitHandler = () => {
    if (loginCredentials.email && loginCredentials.password === 'admin') {
      dispatch(addUser(users.filter(admin => admin.name === 'admin')));
      navigate('/admin');
    } else if (users.some(user => user.email === loginCredentials.email)) {
      const payloadUser = users.filter(
        user => user.email === loginCredentials.email
      );
      dispatch(addUser(payloadUser[0]));
      if (users.some(user => user.name === loginCredentials.password)) {
        navigate('/');
      } else {
        toast({
          title: 'Incorrect password',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      dispatch(
        getNewUserEmail({
          email: loginCredentials.email,
          name: loginCredentials.password,
        })
      );
      navigate('/user-profile');
    }
  };
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
        <Tag variant="subtle" colorScheme="yellow">
          <TagLeftIcon boxSize="12px" as={FaRegLightbulb} />
          <TagLabel>enter email of user from API as email</TagLabel>
        </Tag>
        <Input
          onChange={e => loginHandler(e)}
          mb={'1rem'}
          name="email"
          type={'text'}
          placeholder="Email"
        />

        <PasswordInput loginHandler={loginHandler} />
      </FormControl>
      <Button onClick={() => submitHandler()} colorScheme={'green'}>
        Login/Signup
      </Button>
    </VStack>
  );
};

export default LoginPage;
