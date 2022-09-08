import { AddIcon, LockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const PasswordInput = ({ loginHandler }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box position={'relative'}>
      <Tag variant="subtle" colorScheme="yellow">
        <TagLeftIcon boxSize="12px" as={FaRegLightbulb} />
        <TagLabel>enter name of user from API as password</TagLabel>
      </Tag>
      <Input
        onChange={e => loginHandler(e)}
        name="password"
        mb={'1rem'}
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
      />

      <Button
        zIndex={'0.001'}
        onClick={() => setShowPassword(!showPassword)}
        colorScheme={'link'}
        background={'none'}
        position={'absolute'}
        top={'6'}
        right={'0'}
      >
        <LockIcon color={'grey'} />
      </Button>
    </Box>
  );
};

export default PasswordInput;
