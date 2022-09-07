import { LockIcon } from '@chakra-ui/icons';
import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box position={'relative'}>
      <Input
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
    </Box>
  );
};

export default PasswordInput;
