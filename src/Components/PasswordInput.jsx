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
        top={'0'}
        right={'0'}
      >
        <LockIcon color={'grey'} />
      </Button>
      <Tag variant="subtle" colorScheme="yellow">
        <TagLeftIcon boxSize="12px" as={FaRegLightbulb} />
        <TagLabel>enter the name of the user as password</TagLabel>
      </Tag>
    </Box>
  );
};

export default PasswordInput;
